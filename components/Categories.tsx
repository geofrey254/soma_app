"use client";
import React from "react";
import { FaCertificate } from "react-icons/fa6";
import Subjects from "@/app/subjects/Subjects";

function Categories() {
  return (
    <section
      id="subjects"
      className="bg-[#f9eeea] jumbotron w-full px-4 py-4 md:py-12 2xl:py-8 flex justify-center items-center"
    >
      <div className="flex flex-col gap-4 justify-center md:items-center mt-8">
        <h4 className="flex gap-4">
          <FaCertificate className="cert text-[#350203]" size={20} />
          Large Collection of Subjects
        </h4>
        <h4 className={`font-bold text-center text-4xl`}>Explore Subjects</h4>
        <Subjects />
      </div>
    </section>
  );
}

export default Categories;
