import Image from "next/image";
import React from "react";
import propertyImg from "../public/assets/projects/Calculator.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const property = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={propertyImg}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Calculator</h2>
          <h3>JavaScript / HTML / CSS</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <div className="col-span-4">
          <h2>Overview</h2>
          <p>
            This sleek and efficient calculator combines the prowess of
            JavaScript with the elegance of HTML and CSS. With its user-friendly
            interface, it allows for seamless mathematical operations with just
            a few clicks. Designed with simplicity in mind, this calculator
            provides a minimalist layout that is both visually appealing and
            easy to navigate. Its responsive design ensures optimal performance
            across various devices, including desktops, laptops, tablets, and
            smartphones. Utilizing JavaScript's computational capabilities, this
            calculator offers accurate results for basic arithmetic as well as
            complex calculations. Its error-checking functionality guarantees
            reliable outputs, providing users with confidence in their
            calculations. The HTML structure of the calculator enables
            effortless integration into any web application or website. It can
            be seamlessly embedded, making it a versatile tool that enhances
            user experience without disrupting their browsing. Incorporating
            CSS, this calculator showcases a modern and stylish aesthetic. The
            combination of colors, fonts, and animations enhances its visual
            appeal, creating an engaging user experience. Whether you're a
            student, professional, or someone in need of quick calculations,
            this JavaScript HTML CSS calculator is a valuable companion.
            Experience the convenience and efficiency it offers, making it an
            essential tool for your everyday mathematical needs.
          </p>
          <a
            href="https://github.com/AmalEN20/Calculator"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4 mr-8">Code</button>
          </a>
          <a
            href="https://amalen20.github.io/Calculator/"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4">Demo</button>
          </a>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> JavaScript
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> HTML
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> CSS
              </p>
            </div>
          </div>
        </div>
        <Link href="/#projects">
          <p className="underline cursor-pointer">Back</p>
        </Link>
      </div>
    </div>
  );
};

export default property;
