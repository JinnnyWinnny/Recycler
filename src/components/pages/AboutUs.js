import React from "react";
import "../../App.css";
// import "../../index.css";
import "./AboutUs.css";

import jenny from "../../imgs/jenny1.jpg";
import chao from "../../imgs/chao.PNG";
import yaret from "../../imgs/yaret.PNG";

const developers = [
  {
    name: "Jieun Lee",
    title: "Software Engineer",
    portfolio: "https://jieun-lee.web.app/",
    githubLink: "https://github.com/JinnnyWinnny",
    linkedIn: "https://www.linkedin.com/in/jieun-lee-a14379221/",
    profilePic: jenny,
  },
  {
    name: "Yaret Leon",
    title: "Electrical Engineering",
    githubLink: "https://github.com/JinnnyWinnny",
    linkedIn: "https://www.linkedin.com/in/yaret-leon-a012271b5",
    profilePic: yaret,
  },
  {
    name: "Chaowen Ma",
    title: "Electrical Engineering",
    githubLink: "https://github.com/JinnnyWinnny",
    linkedIn: "https://www.linkedin.com/in/chaowen-ma-b1382b1a4/",
    profilePic: chao,
  },
];

function AboutUs() {
  return (
    <div className="">
      <h1 className="team-title">Team members</h1>

      <div className="card-container">
        {developers.map((developer) => (
          <div className="card-holder" key={developer.name}>
            <div className="our-team">
              <div className="picture">
                <img
                  className="img-fluid"
                  alt={developer.name}
                  // src="https://picsum.photos/130/130?image=1027"
                  src={developer.profilePic}
                />
              </div>
              <div className="detail-holder">
                <h3 className="name">{developer.name}</h3>
                <h4 className="title">{developer.title}</h4>
              </div>
              <ul className="social">
                {developer.name === "Jieun Lee" ? (
                  <>
                    <li>
                      <a href={developer.githubLink} aria-hidden="true">
                        <i className="fab fa-github" />
                      </a>
                    </li>
                    <li>
                      <a href={developer.portfolio} aria-hidden="true">
                        <i class="fab fa-angellist"></i>
                      </a>
                    </li>
                  </>
                ) : null}

                <li>
                  <a href={developer.linkedIn} aria-hidden="true">
                    <i class="fab fa-linkedin" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default AboutUs;
