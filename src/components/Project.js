import React from "react";
import { Frame, Page } from "framer";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";

function Project({ title, description, link, image, stack }) {
  return (
    <div className="project h-full w-full text-xl rounded-xl bg-white shadow-2xl poppins ">
      <img
        className="w-full h-1/2 object-cover opacity-100"
        src={image}
        alt="project img"
      />

      <div className="w-full flex justify-start bg-none">
        {stack.map((item) => (
          <div
            className={`m-4 w-20 h-8 text-base font-bold rounded bg-gray-100 flex justify-center items-center
            mr-3 ${item}`}
          >
            {item}
          </div>
        ))}
        <p className="absolute mt-2 right-4">
          <ArrowRightAltIcon />
        </p>
      </div>
      <h1 className=" ml-4 text-3xl text-black ">{title}</h1>
      <p className="ml-4 my-4">{description}</p>
      <a className="ml-4 text-blue-500 underline" href={link} target="_blank">
        Github
      </a>
    </div>
  );
}

export default Project;
