import React, { Component, useState } from "react";
import Exp from "./Exp";
import "../App.css";

const Experiences = () => {
  const header_style = {
    fontSize: 30,
    background: "white",
    color: "#4f5568",
    borderRadius: 5,
    alignContent: "center" as "center",
    margin: 50,
    padding: 7,
    display: "inline-flex" as "inline-flex",
    boxShadow: "2px 2px 5px gray" as "0 0 0 0 0",
  };

  return (
    <div className="row">
      <div className="column">
        <header style={header_style}>Experiences</header>
        <br></br>
        <Exp
          name="CMU Database Group"
          subhead="Research intern"
          date="September 2020 -"
          descrp="Contributed to the research and contstruction of Noise Page, a self-driving database management system"
          link="https://beta.noise.page/"
        />
        <Exp
          name="Zensors"
          subhead="Software engineering intern"
          date="June 2020 - August 2020"
          descrp="Added features to Zensor's visual sensing platform UI. Projects include streamlining the notifications feature of the app and creating a new time selector component."
          link="https://www.zensors.com/"
        />
        <Exp
          name="Carnegie Mellon University"
          subhead="Course notes writer"
          descrp="Worked with database professor, Dr. Andy Pavlo, to write lecture notes for the course Introduction to Database Systems (15-445)."
          date="May 2020 - August 2020"
          link="https://15445.courses.cs.cmu.edu/fall2020/schedule.html"
        />
        <Exp
          name="Jane Street"
          subhead="INSIGHT program software engineering track"
          descrp="Spent a week at Jane Street learning about their company, trading, and programming in OCaml."
          date="January 2019"
        />
        <Exp
          name="University of Pennsylvania"
          subhead="Research Intern"
          descrp="Worked with database professor, Dr. Susan Davidson, to develop a Chrome extension to help teachers organize course materials. Used Google Apps Script (JavaScript) to parse and tag Google Drive documents and also build a searchable, sorted question bank for more convenient course material writing."
          date="May 2019 - August 2019"
        />
        <Exp
          name="JBS Science"
          subhead="Bioinformatics Intern"
          descrp="Led team of high school students to develop software, HccDriverFinder, for early detection of liver cancer (personalized medicine). Performed both programming and bench work."
          date="May 2016 - May 2018"
        />
      </div>
      <div className="column">
        <header style={header_style}>Activities</header>
        <br></br>
        <Exp
          name="Asian Christian Fellowship"
          subhead="Ministry Team Leader"
          descrp="Planned fellowship events, led a cell group, prayed and casted vision for the fellowship, and discipled other college students."
          date="January 2018 - "
        />
        <Exp
          name="PCC Coding Camp"
          subhead="Pittsburgh Chinese Church"
          descrp="Started and directed a virtual Coding Camp​ of about 40 kids at Pittsburgh Chinese Church. The kids were broken up into a beginners class (Scratch) and an advanced class (Python)."
          date="August 2020"
        />
        <Exp
          name="INSPIRE, CMU Interfaith Spirituality Embassy"
          subhead="Participant"
          descrp="Participated in weekly discussion meetings with people of different faiths about topics relating to spirituality."
          date="September 2018 - "
        />
        <Exp
          name="The Tartan"
          subhead="Writer"
          descrp="Wrote articles for the SciTech column of the CMU student run newspaper, The Tartan."
          date="September 2018 - May 2019"
        />
        <br></br>
        &nbsp;&nbsp;
        <br></br>
      </div>
      <div className="column">
        <header style={header_style}>Community Service</header>
        <br></br>
        <Exp
          name="Pittsburgh Project Volunteer"
          date="October 2019 - "
          descrp="Participated in ~monthly service days with the Pittsburgh Project. Activities include running food and clothing drives for the homeless, helping elderly people clean their homes, visiting homeless shelters."
        />
        <Exp
          name="VBS co-Director"
          subhead="Trinity Christian Church of Greater Philadelphia"
          date="August 2019 - "
          descrp="Co-directed a full day summer camp with over 100 children at my church. Planned lessons and activities, led team debriefs, and coordinated other logistics with our team."
        />
        <Exp
          name="FOCUS missionary"
          subhead="La Sequita, Equador"
          date="May 2019"
          descrp="Spent two weeks in Equador building a bathhouse and community center for the village people of La Sequita. Visited families in the village house by house to chat with and pray for them."
        />
        <Exp
          name="Notetaker"
          subhead="CMU Office of Disability Resources"
          date="September 2018 - May 2019"
          descrp="Took handwritten course notes and uploaded them to a portal for students with disabilities to download."
        />
        <Exp
          name="English Teacher and Summer Missionary"
          subhead="Taichung, Taiwan"
          date="July 2018, 2019"
          descrp="Spent 1.5 weeks in Taichung teaching english and bible lessons to young children. "
        />
      </div>
      <br></br>
      &nbsp; &nbsp;
      <br></br>
    </div>
  );
}

export default Experiences;

