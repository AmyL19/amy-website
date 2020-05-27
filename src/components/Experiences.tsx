import React, { Component } from "react";
import Exp from "./Exp";
import App from "../App";
import "../App.css";
import { SSL_OP_SINGLE_DH_USE } from "constants";
export default class Experiences extends Component {
  state = {};

  render() {
    const header_style = {
      fontSize: 30,
      borderStyle: "solid" as "solid",
      borderRadius: 5,
      alignContent: "center" as "center",
      margin: 50,
      padding: 7,
      display: "inline-flex" as "inline-flex",
      boxShadow: "2px 2px 5px gray" as "0 0 0 0 0",
    };
    const li_style = {
      fontSize: 13,
      color: "#4f5568",
      textAlign: "left" as "left",
      marginBottom: 10,
    };

    const h_style = {
      fontSize: 13,
      color: "#4f5568",
      fontWeight: "bold" as "bold",
    };

    return (
      <div className="row">
        <div className="column">
          <header style={header_style}>Experiences</header>
          <br></br>
          <Exp
            name="Zensors, Pittsburgh PA"
            subhead="Software development intern"
            date="June 2020 - "
          />
          <Exp
            name="Carnegie Mellon University SCS, Pittsburgh PA"
            subhead="Course notes writer"
            descrp="Worked with database professor, Dr. Andy Pavlo, to write course notes for his course 15-445."
            date="May 2020 - "
          />
          <Exp
            name="University of Pennsylvania CIS, Philadelphia PA"
            subhead="Research Intern"
            descrp="Worked with database professor, Dr. Susan Davidson, to develop a Chrome extension to help teachers organize course materials. Used Google Apps Script (JavaScript) to parse and tag Google Drive documents and also build a searchable, sorted question bank for more convenient course material writing."
            date="May 2019 - August 2019"
          />
          <Exp
            name="JBS Science, Doylestown PA"
            subhead="Bioinformatics Intern"
            descrp="Led team of high school students to develop software, HccDriverFinder, for early detection of liver cancer (personalized medicine). Performed both programming and bench work."
            date="May 2016 - May 2018"
          />
          <Exp
            name="Jane Street, Manhattan NY"
            subhead="INSIGHT program software engineering track"
            descrp="Spent a week at Jane Street learning about their company, trading, and programming in OCaml."
            date="January 2019"
          />
        </div>
        <div className="column">
          <header style={header_style}>Activities</header>
          <br></br>
          <Exp
            name="Asian Christian Fellowship"
            subhead="Ministry Team Leader"
            descrp="Planned fellowship events, led a cell group, prayed and casted vision for the fellowship, and discipled others."
            date="January 2018 - "
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
          <Exp
            name="Women@SCS"
            subhead="Participant"
            date="September 2018 - May 2019"
          />
          <br></br>
          &nbsp;&nbsp;
          <br></br>
          {/* <header style={header_style}>Relevant Coursework</header>
          <br></br>
          <p style={h_style}> Computer Science </p>
          <li style={li_style}>Introduction to Computer Systems (15-213)</li>
          <li style={li_style}>
            Parallel and Sequential Data Structures and Algorithms (15-210)
          </li>
          <li style={li_style}>
            Principles of Functional Programming (15-150)
          </li>
          <li style={li_style}>Principles of Imperative Computation (15-122</li>
          <li style={li_style}>Probability and Computing (15-259)</li>
          <li style={li_style}>
            Great Ideas in Theoretical Computer Science (15-251)
          </li>
          <br></br>
          <p style={h_style}> Philosophy </p>
          <li style={li_style}>Continental Philosophy (80-253)</li>
          <li style={li_style}>Formal Logic (80-310))</li>
          <li style={li_style}>Introduction to Religion(79-281)</li>
          <li style={li_style}>Introduction to Philosophy (80-100)</li> */}
        </div>
        <div className="column">
          <header style={header_style}>Community Service</header>
          <br></br>
          <Exp
            name="Pittsburgh Project Volunteer"
            subhead="Homeless and community service org in Pittsburgh"
            date="October 2019 - "
            descrp="Participated in ~monthly service days with the Pittsburgh Project. Activities include running food and clothing drives for the homeless, helping elderly people clean their homes, visiting homeless shelters."
          />
          <Exp
            name="VBS Director"
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
          {/* <Exp
            name="Philly Missions"
            subhead="Philadelphia, PA"
            date="March 2019"
            descrp="Spent 1.5 weeks in Kensington doing homeless outreach, teaching kids at a Vacation Bible School, and doing construction work at a church."
          /> */}
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
}
