import { Link } from "react-router-dom";
function Team() {
  return (
    <div className="container pb-5 about">
      <div className="row mt-2 mb-5 text-center">
        <h1 className="fs-2 p-2">People</h1>
      </div>
      <div className="row mt-5 mb-5 p-5 text-center">
        <div className="col-lg-6 col-sm-12">
          <img
            src="images/divyam.jpg"
            style={{
              width: "50%",
              borderRadius: "50%",
              marginLeft: "2rem",
              objectFit: "fill",
            }}
          ></img>
          <div style={{ marginLeft: "2rem" }}>
            <h4 className="mt-4">Divyam Verma</h4>
            <h5>Developer</h5>
          </div>
        </div>
        <div className="col-lg-6 col-sm-12 about">
          <p className="p-2">
            A 3rd year B.Tech(CSE) student. A 4-star coder (C++) at HackerRank,
            and An aspiring Software Engineer. My skills are programming in C++
            and Java (proficient). Currently, I am on a journey to master
            Full-stack web development using the MERN stack. I have solved over
            300 DSA questions and have obtained 100 days(2024) badge on{" "}
            <a href="https://leetcode.com/u/captain2607/" target="_blank">
              LeetCode
            </a>
            &nbsp; platform.
          </p>

          <p className="p-2">
            I like to sing, listen to some mushy music and read self-help books
            in my relaxation time Check out some articles written by me on my{" "}
            <a
              href="https://www.linkedin.com/in/divyam-verma-4821b9248/recent-activity/articles/"
              target="_blank"
            >
              LinkedIN
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
