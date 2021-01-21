import React from "react";
import Project from "./Project";
import linkedIn from "../images/linkedin-statistics.png";
import league from "../images/League.jpg";
import graph from "../images/graph.png";
import pathfinding from "../images/Pathfinding.png";
import spotify from "../images/Spotify.png";
import music from "../images/music.jpg";
import labyrinth from "../images/labyrinth.jpg";

import { Frame, Page } from "framer";

function Projects() {
  return (
    <div className="bg-gray-100 h-screen z-0">
      <div className="flex justify-center py-10 z-20">
        <Page width={850} height={550} radius={30}>
          <Frame size={850} radius={30} background={"#fff"}>
            <Project
              title="League of Legends Match Outcome Predictor"
              description="Designed functional League of Legends API using Python linked to Riot API. Built predictive matchmaking interface based on players’ prior statistics and data – calculating
probability of a win against players accounting for various in-game variables with weighted metric
"
              link="https://github.com/Aphelion82/Augury"
              image={league}
              stack={["python", "SQLite"]}
            />
          </Frame>
          <Frame size={550} radius={30} background={"#fff"}>
            <Project
              title="Spotify Clone"
              description="Built Spotify UI/UX clone with valid user authentication using Spotify API. Created component based site using React JS. "
              link=""
              image={spotify}
              stack={["ReactJS"]}
            />
          </Frame>

          <Frame size={850} radius={30} background={"#fff"}>
            <Project
              title="LinkedIn Skills Analyzer Dashboard"
              description="Created interactive LinkedIn skills tracking dashboard using Python Dash, Pandas, Plotly. Analyzed world bank data, creating metric for skills ranking and frequency for 70 industries
"
              link="https://github.com/Kabi22/LinkedIn-Skills-Tracker"
              image={linkedIn}
              stack={["python", "Dash"]}
            />
          </Frame>
          <Frame size={550} radius={30} background={"#fff"}>
            <Project
              title="Pathfinding Visualizer"
              description="Designed interactive UI using Python to visualize A* search algorithm as an educational tool to allow
users to visually inspect the runtime behavior of the algorithm"
              link="https://github.com/Kabi22/Pathfinding-Visualizer"
              image={pathfinding}
              stack={["python"]}
            />
          </Frame>
        </Page>
      </div>
    </div>
  );
}

export default Projects;
