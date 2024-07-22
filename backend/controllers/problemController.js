const { exec } = require("child_process");
const fs = require("fs");
const path = require("path");
const os = require("os");
const { S3Client, PutObjectCommand,GetObjectCommand } = require('@aws-sdk/client-s3');
const { getSignedUrl } = require('@aws-sdk/s3-request-presigner');
const Problem = require("../models/problems_model");
const dotenv = require('dotenv');

dotenv.config();

// run problem
const runproblem_post = (req, res) => {
  const { code, language, input } = req.body;

  let fileExtension, compileCommand, runCommand, mainFileName;
  const tempDir = os.tmpdir();  // Moved inside the function

  if (language === "python") {
    fileExtension = ".py";
    mainFileName = "main.py";
    runCommand = `python ${path.join(tempDir, mainFileName)}`;
  } else if (language === "cpp") {
    fileExtension = ".cpp";
    mainFileName = "main.cpp";
    compileCommand = `g++ ${path.join(tempDir, mainFileName)} -o ${path.join(tempDir, "main.out")}`;
    runCommand = `${path.join(tempDir, "main.out")}`;
  } else if (language === "java") {
    fileExtension = ".java";
    mainFileName = "Main.java";
    compileCommand = `javac ${path.join(tempDir, mainFileName)}`;
    runCommand = `java -cp ${tempDir} Main`;
  } else {
    return res.status(400).json({ error: "Unsupported language" });
  }

  const tempCodeFilePath = path.join(tempDir, mainFileName);
  try {
    fs.writeFileSync(tempCodeFilePath, code);
  } catch (error) {
    return res.status(500).json({ error: "Failed to write code to file", details: error.message });
  }

  let inputFilePath = null;
  if (input) {
    inputFilePath = path.join(tempDir, "input.txt");
    try {
      fs.writeFileSync(inputFilePath, input);
    } catch (error) {
      fs.unlinkSync(tempCodeFilePath);
      return res.status(500).json({
        error: "Failed to write input to file",
        details: error.message,
      });
    }
  }

  if (compileCommand) {
    exec(compileCommand, (compileError, compileStdout, compileStderr) => {
      if (compileError) {
        fs.unlinkSync(tempCodeFilePath);
        if (inputFilePath) fs.unlinkSync(inputFilePath);
        return res.json({ output: null, error: compileStderr });
      }
      executeCode(runCommand, inputFilePath, tempCodeFilePath, res);
    });
  } else {
    executeCode(runCommand, inputFilePath, tempCodeFilePath, res);
  }
};

function executeCode(command, inputFilePath, tempCodeFilePath, res) {
  const options = inputFilePath ? { input: fs.readFileSync(inputFilePath) } : {};
  const childProcess = exec(command, options, (error, stdout, stderr) => {
    if (fs.existsSync(tempCodeFilePath)) fs.unlinkSync(tempCodeFilePath);
    if (command.includes(".out") && fs.existsSync(path.join(os.tmpdir(), "main.out"))) {
      fs.unlinkSync(path.join(os.tmpdir(), "main.out"));
    } else if (command.includes("java") && fs.existsSync(tempCodeFilePath.replace(".java", ".class"))) {
      fs.unlinkSync(tempCodeFilePath.replace(".java", ".class"));
    }
    if (inputFilePath && fs.existsSync(inputFilePath)) fs.unlinkSync(inputFilePath);

    if (error) {
      res.json({ output: null, error: stderr });
    } else {
      res.json({ output: stdout, error: stderr });
    }
  });

  if (options.input) {
    childProcess.stdin.write(options.input);
    childProcess.stdin.end();
  }
}

const addproblem_post = async (req, res) => {
  try {
    const { title, description, difficulty, constraints, inputFormat, outputFormat, sampleTestCases, topicTags, companyTags, userid } = req.body;
    const { inputFile, outputFile } = req.files;

    console.log('req.files:', req.files);

    let inputFileUrl = '';
    let outputFileUrl = '';

    if (inputFile && inputFile.length > 0) {
      const inputFileData = inputFile[0];
      console.log('inputFileData:', inputFileData);
      // if (!inputFileData.buffer) {
      //   throw new Error('Input file buffer is undefined');
      // }
      inputFileUrl = `uploads/${Date.now()}_${inputFileData.originalname}`;
      // await fs.promises.writeFile(inputFileUrl, inputFileData.buffer);
    }

    if (outputFile && outputFile.length > 0) {
      const outputFileData = outputFile[0];
      console.log('outputFileData:', outputFileData);
      // if (!outputFileData.buffer) {
      //   throw new Error('Output file buffer is undefined');
      // }
      outputFileUrl = `uploads/${Date.now()}_${outputFileData.originalname}`;
      // await fs.promises.writeFile(outputFileUrl, outputFileData.buffer);
    }

    const newProblem = new Problem({
      userid,
      title,
      description,
      difficulty,
      constraints,
      inputFormat,
      outputFormat,
      sampleTestCases,
      inputFile: inputFileUrl,
      outputFile: outputFileUrl,
      topicTags,
      companyTags,
    });

    await newProblem.save();
    res.status(201).json({ message: 'Problem added successfully', Problem: newProblem });

  } catch (error) {
    console.error('Error adding problem:', error);
    res.status(500).json({ error: 'An error occurred while adding the problem' });
  }
};

const getProblems = async (req, res) => {
  try {
    const problems = await Problem.find();
    res.status(200).json(problems);
    console.log(problems);
  
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


// get single problem
const singleproblem_get = (req, res) => {
  const id = req.params.id;
  Problem.findById(id)
    .then((question) => {
      res.json({ question: question });
    })
    .catch((err) => {
      console.log(err);
      res.json({ message: "Error in fetching question" });
    });
};




module.exports = {
  runproblem_post,
  addproblem_post,
  getProblems,
  singleproblem_get,
 
};
