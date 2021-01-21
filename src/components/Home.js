import React from "react";
import "../index.css";
import resume from "../Kabilan Balasubramani Resume (1).pdf";
function Home() {
  return (
    <div>
      <div className="text-9xl text-black opacity-5 z-10 absolute top-48">
        I'm
      </div>
      <div className="text-9xl text-black opacity-5 z-10 absolute top-48 transform right-44">
        Skills <br /> Skills <br /> Skills
      </div>
      <div className="card varela">
        <p className="font-black">Skills {"&"} Interests</p>
        <h2 className="font-bold">-Python, Java, React JS, Git</h2>
        <h2 className="font-bold">-Cooking, Running, Anime</h2>
      </div>

      <div className="h-screen bg-gray-100 flex flex-col items-start justify-center pb-40">
        <div className=" ml-20 w-1/2">
          <p class=" varela text-6xl text-black">Kabilan Balasubramani</p>
          <p className="  varela mt-7 text-xl lh-4 text-black">
            Hi! I'm a freshman at the University of Pittsburgh studying Computer
            Science impassioned by data analytics, machine learning, and tech.
            Also, tabs are better than spaces.
          </p>
        </div>

        <div className="mt-10 ml-20">
          <a
            href={resume}
            target="_blank"
            className="hover:bg-indigo-800 transition duration-300 shadow-lg bg-white p-3 mr-6 rounded-sm"
          >
            Resume
          </a>
          <a
            href="https://github.com/Kabi22"
            target="_blank"
            className="hover:bg-indigo-800 transition duration-300 shadow-lg bg-white p-3 mr-6 rounded-sm"
          >
            Github
          </a>
          <a
            href="https://www.linkedin.com/in/kabilan-balasubramani-6146131b2/"
            target="_blank"
            className="hover:bg-indigo-800 transition duration-300 shadow-lg bg-white p-3 mr-6 rounded-sm"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
