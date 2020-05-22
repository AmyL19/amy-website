import React, { Component } from "react";
import Proj from "./Proj";
import "../App.css";
import tc_icon from "./pics/textcrafter.png";
import df_icon from "./pics/driverfinder.png";
import foodcmu from "./pics/foodcmu.png";
import web_code from "./pics/web_code.png";

export default class Projects extends Component {
  state = {};

  render() {
    return (
      <div className="all_projects">
        <header>Projects</header>
        <Proj
          name="Personal Website"
          img={web_code}
          date="May 2022 - "
          descrp="(AKA this website!) Written using React and Typescript"
          link="https://github.com/AmyL19/amy-website"
        />
        <Proj
          name="TextCrafter"
          subhead="TartanHacks 2019"
          img={tc_icon}
          date="February 2019"
          descrp="Android app that suggests resoponses to text messages. Used XML and Java through Android Studio. Also utilized Microsoft Azure Text Analytics APIs"
          link="https://devpost.com/software/text-crafter"
        />
        <Proj
          name="Food@CMU"
          subhead="2nd place HackCMU 2018"
          img={foodcmu}
          date="September 2018"
          descrp="Flask web app for CMU dining services to hep students find foo don campus and donate dining blocks to local charities. Used HTML, CSS to design webpage and JavaScript to integrate Google APIs"
          link="https://devpost.com/software/food-cmu"
        />
        <Proj
          name="DriverFinder"
          subhead="American Association for Cancer Research (AACR) 2018 Journal"
          img={df_icon}
          date="May 2016 - July 2018"
          descrp="HccDriverFinder is a program that runs DNA sequence alignment and analysis algorithms on Next Generation Sequencing data to identify mutations or viral integration events that could drive liver cancer."
          link="http://cancerres.aacrjournals.org/content/78/13_Supplement/559"
          link1="https://github.com/AmyL19/DriverFinder"
        />
      </div>
    );
  }
}
