import React from "react";
import { SiTicktick } from "react-icons/si";

function Pricing() {
  return (
    <section className="bg-[#f3e8de]">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-[#350203]">
            Affordable Plans for High School Students in Kenya
          </h2>
          <p className="mb-5 font-normal text-[#350203]">
            Soma offers high-quality, interactive educational content that helps
            students excel in their studies. Choose the best plan for your
            learning journey.
          </p>
        </div>
        <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
          {/* Starter Plan */}
          <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
            <h3 className="mb-4 text-2xl font-semibold">Starter</h3>
            <p className=" text-[#350203] dark:text-gray-400">
              Ideal for individual learners who want access to core subjects.
            </p>
            <div className="flex justify-center items-baseline my-8">
              <span className="mr-2 text-5xl font-extrabold text-[#350203]">
                Kes.250
              </span>
              <span className="text-[#350203] dark:text-gray-400">/month</span>
            </div>
            <ul role="list" className="mb-8 space-y-4 text-left">
              <li className="flex items-center space-x-3">
                <SiTicktick className="text-green-500 dark:text-green-400" />
                <span>Access to core subjects: Maths, English, Science</span>
              </li>
              <li className="flex items-center space-x-3">
                <SiTicktick className="text-green-500 dark:text-green-400" />
                <span>Lesson summaries and practice quizzes</span>
              </li>
              <li className="flex items-center space-x-3">
                <SiTicktick className="text-green-500 dark:text-green-400" />
                <span>Monthly progress reports</span>
              </li>
              <li className="flex items-center space-x-3">
                <SiTicktick className="text-green-500 dark:text-green-400" />
                <span>6 months of email support</span>
              </li>
            </ul>
            <a
              href="#"
              className="text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900"
            >
              Get started
            </a>
          </div>

          {/* Advanced Plan */}
          <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
            <h3 className="mb-4 text-2xl font-semibold">Advanced</h3>
            <p className=" text-[#350203] dark:text-gray-400">
              For students who want to dive deeper into subjects with extra
              resources.
            </p>
            <div className="flex justify-center items-baseline my-8">
              <span className="mr-2 text-5xl font-extrabold text-[#350203]">
                Kes.500
              </span>
              <span className="text-[#350203] dark:text-gray-400">/month</span>
            </div>
            <ul role="list" className="mb-8 space-y-4 text-left">
              <li className="flex items-center space-x-3">
                <SiTicktick className="text-green-500 dark:text-green-400" />
                <span>
                  Access to advanced subjects: Physics, Chemistry, Geography
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <SiTicktick className="text-green-500 dark:text-green-400" />
                <span>
                  Lesson summaries, quizzes, and interactive exercises
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <SiTicktick className="text-green-500 dark:text-green-400" />
                <span>Weekly progress tracking and feedback</span>
              </li>
              <li className="flex items-center space-x-3">
                <SiTicktick className="text-green-500 dark:text-green-400" />
                <span>12 months of live chat support</span>
              </li>
            </ul>
            <a
              href="#"
              className="text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900"
            >
              Get started
            </a>
          </div>

          {/* Premium Plan */}
          <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
            <h3 className="mb-4 text-2xl font-semibold">Premium</h3>
            <p className=" text-[#350203] dark:text-gray-400">
              For students seeking the best of everything – exclusive content &
              features.
            </p>
            <div className="flex justify-center items-baseline my-8">
              <span className="mr-2 text-5xl font-extrabold text-[#350203]">
                Kes.1200
              </span>
              <span className="text-[#350203] dark:text-gray-400">/month</span>
            </div>
            <ul role="list" className="mb-8 space-y-4 text-left">
              <li className="flex items-center space-x-3">
                <SiTicktick className="text-green-500 dark:text-green-400" />
                <span>Access to all subjects and premium content</span>
              </li>
              <li className="flex items-center space-x-3">
                <SiTicktick className="text-green-500 dark:text-green-400" />
                <span>Exclusive live tutoring sessions and Q&A</span>
              </li>
              <li className="flex items-center space-x-3">
                <SiTicktick className="text-green-500 dark:text-green-400" />
                <span>Daily practice tests and assessments</span>
              </li>
              <li className="flex items-center space-x-3">
                <SiTicktick className="text-green-500 dark:text-green-400" />
                <span>24/7 premium support via live chat</span>
              </li>
            </ul>
            <a
              href="#"
              className="text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900"
            >
              Get started
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Pricing;
