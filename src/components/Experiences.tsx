import React, { Component, useState } from "react";
import Exp from "./Exp";
import "../App.css";

const Experiences = () => {
  const header_style = {
    fontSize: 30,
    background: "white",
    color: "#4f5568",
    borderRadius: 5,
    float: "left" as "left",
    width: "100%",
    margin: 50,
    display: "inline-flex" as "inline-flex",
    fontFamily: "SpaceGrotesk-SemiBold"
    // boxShadow: "2px 2px 5px gray" as "0 0 0 0 0",
  };

  const tableStyle= {
    textAlign: "left" as "left",
    paddingBottom: "200px",
    margin: "auto" as "auto",
  }

  const hiddenLinkStyle = {
    position: "absolute" as "absolute",
    left: "0px",
  }


  return (
      <div>
        <header style={header_style}>Experiences</header>
        <div>
        <table style={tableStyle}>
          <tr>
          <td>
            <Exp
              name="Carnegie Mellon University"
              subhead="15-210 Teaching Assistant"
              date="August 2021 - December 2021"
              descrp="Led recitations, graded homeworks and exams, and held offce hours for the course Parallel and Sequential Data Structures and Algorithms."
            />
          </td>
          <td>
            <Exp
              name="Expedia Group"
              subhead="Software engineering intern"
              date="June 2021 - August 2021"
              descrp="Automated Expedia's Recommendations Platform performance testing framework by developing a pipeline for deploying and running tests on their APIs and models."
            />
          </td>
          <td>
            <Exp
              name="Zensors"
              subhead="Software engineering intern"
              date="June 2020 - August 2020"
              descrp="Added features to Zensor's visual sensing platform UI. Projects include streamlining the notifications feature of the app and creating a new time selector component."
              link="https://www.zensors.com/"
            />
          </td>
          </tr>
          <tr>
            <td>
              <Exp
                name="Carnegie Mellon University"
                subhead="Course notes writer"
                descrp="Worked with database professor, Dr. Andy Pavlo, to write lecture notes for the course Introduction to Database Systems (15-445)."
                date="May 2020 - August 2020"
                link="https://15445.courses.cs.cmu.edu/fall2020/schedule.html"
              />
            </td>
            <td>
              <Exp
                name="Jane Street"
                subhead="INSIGHT program software engineering track"
                descrp="Spent a week at Jane Street learning about their company, trading, and programming in OCaml."
                date="January 2019"
              />
            </td>
            <td>
              <Exp
                name="University of Pennsylvania"
                subhead="Research Intern"
                descrp="Worked with database professor, Dr. Susan Davidson, to develop a Chrome extension to help teachers organize course materials. Used Google Apps Script (JavaScript) to parse and tag Google Drive documents and also build a searchable, sorted question bank for more convenient course material writing."
                date="May 2019 - August 2019"
              />
            </td>
          </tr>
        </table>
        </div>


        <div>
          <header style={header_style}>Activities</header>
          <a id="Activities" style={hiddenLinkStyle}></a>
          <br></br>

          <div>
        <table style={tableStyle}>
          <tr>
          <td>
            <Exp
              name="Asian Christian Fellowship"
              subhead="Ministry Team Leader"
              descrp="Planned fellowship events, led a cell group, prayed and casted vision for the fellowship, and discipled other college students."
              date="January 2018 - Jun 2021"
            />
          </td>
          <td>
            <Exp
              name="PCC Coding Camp"
              subhead="Pittsburgh Chinese Church"
              descrp="Started and directed a virtual Coding Camp​ of about 40 kids at Pittsburgh Chinese Church. The kids were broken up into a beginners class (Scratch) and an advanced class (Python)."
              date="August 2020, 2021"
            />
          </td>
          </tr>
          <tr>
            <td>
              <Exp
                name="INSPIRE, CMU Interfaith Spirituality Embassy"
                subhead="Participant"
                descrp="Participated in weekly discussion meetings with people of different faiths about topics relating to spirituality."
                date="September 2018 - "
              />
            </td>
            <td>
              <Exp
                name="The Tartan"
                subhead="Writer"
                descrp="Wrote articles for the SciTech column of the CMU student run newspaper, The Tartan."
                date="September 2018 - May 2019"
              />
            </td>
          </tr>
        </table>
      </div>
          <br></br>
          &nbsp;&nbsp;
          <br></br>
        </div>
        <div>
          <header style={header_style}>Volunteering</header>
          <a id="Volunteering" style={hiddenLinkStyle}></a>
          <br></br>
          <table style={tableStyle}>
          <tr>
          <td>
            <Exp
              name="Coding Camp"
              date="August 2020, 2021"
              descrp="Founded and directed a virtual Coding Camp for children at Pittsburgh Chinese Church. Worked with a team of 15 other college students to hold three classes teaching coding to kids from third grade to high school."
            />
          </td>
          <td>
            <Exp
              name="Pittsburgh Project Volunteer"
              date="October 2019 - "
              descrp="Participated in ~monthly service days with the Pittsburgh Project. Activities include running food and clothing drives for the homeless, helping elderly people clean their homes, visiting homeless shelters."
            />
          </td>
          <td>
            <Exp
              name="VBS co-Director"
              subhead="Trinity Christian Church of Greater Philadelphia"
              date="August 2019 - "
              descrp="Co-directed a full day summer camp with over 100 children at my church. Planned lessons and activities, led team debriefs, and coordinated other logistics with our team."
            />
          </td>
          </tr>
          <tr>
            <td>
              <Exp
                name="FOCUS missionary"
                subhead="La Sequita, Equador"
                date="May 2019"
                descrp="Spent two weeks in Equador building a bathhouse and community center for the village people of La Sequita. Visited families in the village house by house to chat with and pray for them."
              />
            </td>
            <td>
              <Exp
                name="Notetaker"
                subhead="CMU Office of Disability Resources"
                date="September 2018 - May 2019"
                descrp="Took handwritten course notes and uploaded them to a portal for students with disabilities to download."
              />
            </td>
            <td>
              <Exp
                name="English Teacher and Summer Missionary"
                subhead="Taichung, Taiwan"
                date="July 2018, 2019"
                descrp="Spent 1.5 weeks in Taichung teaching english and bible lessons to young children. "
              />
            </td>
          </tr>
        </table>
      </div>
      <br></br>
      &nbsp; &nbsp;
      <br></br>
    </div>
  );
}

export default Experiences;

