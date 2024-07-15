import React from "react";
import Header from "./Header";
import image from "../Home1.png";

const Home = () => {
  return (
    <>
      <Header></Header>
      <section className="bg-gray-100 pt-10 pb-10 min-h-screen">
        <div className="container mx-auto p-4 md:p-10 flex flex-col md:flex-row items-center ">
          <div className="md:w-1/2 ml-5 text-center md:text-left">
            <h1 className=" text-4xl text-red-500 font-bold mb-5">
              Welcome to CodeQuest
            </h1>
            <p className="text-lg md:text-lg text-gray-700">
              Learn, code, and grow with our interactive platform designed for
              developers of all levels. Explore a wealth of resources and engage
              with a vibrant community dedicated to advancing your coding
              journey.
            </p>
            <button className="bg-red-500 text-white mt-10 px-6 py-3 rounded-md hover:bg-red-600 transition duration-300">
              Join Now
            </button>
          </div>
          <div className="md:w-1/2 ml-20">
            <img
              src={image}
              alt="Coding Illustration"
              className="w-full h-auto bg-grey-100"
            />
          </div>
        </div>
      </section>
      <section className="pb-20 bg-gray-300 -mt-24">
        <h2 className="text-3xl font-bold text-center text-red-500 pt-10">
          About
        </h2>
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap">
            <div className="lg:pt-10 pt-6 w-full md:w-4/12 px-4 text-center">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                <div className="px-4 py-5 flex-auto">
                  <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-blue-500">
                    <i className="fas fa-award"></i>
                  </div>
                  <h6 className="text-xl font-semibold">
                    Extensive Problem Library
                  </h6>
                  <p className="mt-2 mb-4 text-gray-600">
                    Provides a wide range of problems for all skill levels and
                    various topics to enhance your coding skills and prepare for
                    interviews.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-10 w-full md:w-4/12 px-4 text-center">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                <div className="px-4 py-5 flex-auto">
                  <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-500">
                    <i className="fas fa-retweet"></i>
                  </div>
                  <h6 className="text-xl font-semibold">
                    Automated Code Evaluation
                  </h6>
                  <p className="mt-2 mb-4 text-gray-600">
                    Saves time and ensures impartial assessment, providing
                    instant feedback to users and ensure correctness,
                    efficiency, and robustness.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-10 w-full md:w-4/12 px-4 text-center">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                <div className="px-4 py-5 flex-auto">
                  <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-green-500">
                    <i className="fas fa-fingerprint"></i>
                  </div>
                  <h6 className="text-xl font-semibold">Leaderboard</h6>
                  <p className="mt-2 mb-4 text-gray-600">
                  Encourages learning through competition, enhances problem-solving skills, and provides opportunities to gain recognition and rewards.
                  </p>
                </div>
              </div>
            </div>
            </div>
          </div>
          </section>
          {/* <div className="container mx-auto px-4">
    
          <div className="flex flex-wrap items-center mt-32">
            <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
              <div className="text-gray-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-gray-100">
                <i className="fas fa-user-friends text-xl"></i>
              </div>
              <h3 className="text-3xl mb-2 font-semibold leading-normal">
                Working with us is a pleasure
              </h3>
              <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700">
                Don't let your uses guess by attaching tooltips and popoves to
                any element. Just make sure you enable them first via
                JavaScript.
              </p>
              <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-gray-700">
                The kit comes with three pre-built pages to help you get started
                faster. You can change the text and images and you're good to
                go. Just make sure you enable them first via JavaScript.
              </p>
              <a
                href="https://www.creative-tim.com/learning-lab/tailwind-starter-kit#/presentation"
                className="font-bold text-gray-800 mt-8"
              >
                Check Tailwind Starter Kit!
              </a>
            </div>

            <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-pink-600">
                <img
                  alt="..."
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80"
                  className="w-full align-middle rounded-t-lg"
                />
                <blockquote className="relative p-8 mb-4">
                  <svg
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 583 95"
                    className="absolute left-0 w-full block"
                    style={{
                      height: "95px",
                      top: "-94px",
                    }}
                  >
                    <polygon
                      points="-30,95 583,95 583,65"
                      className="text-pink-600 fill-current"
                    ></polygon>
                  </svg>
                  <h4 className="text-xl font-bold text-white">
                    Top Notch Services
                  </h4>
                  <p className="text-md font-light mt-2 text-white">
                    The Arctic Ocean freezes every winter and much of the
                    sea-ice then thaws every summer, and that process will
                    continue whatever happens.
                  </p>
                </blockquote>
              </div>
            </div>
          </div>
          </div> */}
      
      
      <footer class="bg-gray-800 text-white py-8">
        <div class="container mx-auto px-6">
          <div class="flex flex-col md:flex-row justify-between items-center">
            <div class="mb-4 md:mb-0">
              <h1 class="text-2xl font-bold">CodeQuest</h1>
              <p class="text-sm">Online Coding Judge Platform</p>
            </div>

            <ul class="flex flex-col md:flex-row">
              <li class="md:ml-6 mb-2 md:mb-0">
                <a href="#" class="hover:text-red-500">
                  Home
                </a>
              </li>
              <li class="md:ml-6 mb-2 md:mb-0">
                <a href="#" class="hover:text-red-500">
                  Problems
                </a>
              </li>
              <li class="md:ml-6 mb-2 md:mb-0">
                <a href="#" class="hover:text-red-500">
                  IDE
                </a>
              </li>
              <li class="md:ml-6 mb-2 md:mb-0">
                <a href="#" class="hover:text-red-500">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div class="mt-4 text-sm text-gray-600">
            <p>&copy; 2024 CodeQuest. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Home;
