import React, { Component } from "react";
import Skill from "./Skill";
import profilePhoto from "../photos/profilePhoto.webp";
import resume from "../photos/resume.pdf";
import { FormattedMessage } from "react-intl";
import InstagramIcon from "../icons/InstagramIcon";
import { yellow } from "@material-ui/core/colors";
console.log(yellow,"yellow");
export default class AboutMe extends Component {
  render() {
    const yellowColor = "#fce130";
    const iconHover = (e) => {
     console.log("sea");
    };
    return (
      <section id="about-me" className="ftco-section about-section">
        <div className="container">
          <div className="row d-flex my-5" data-scrollax-parent="true">
            <div
              className="col-md-4 author-img"
              style={{
                backgroundImage: `url(${profilePhoto})`,
              }}
              data-scrollax=" properties: { translateY: '-70%'}"
            />
            <div className="col-md-2" />
            <div className="col-md-6 wrap ftco-animate">
              <div className="about-desc">
                <h1 className="bold-text">
                  <FormattedMessage
                    id="aboutme"
                    defaultMessage="HAQQIMDA"
                  ></FormattedMessage>
                </h1>
                <div className="p-5">
                  <h2 className="mb-5">
                    {" "}
                    <FormattedMessage
                      id="hiiamasgaraliyev"
                      defaultMessage="Salam mən Əsgər Əliyev"
                    ></FormattedMessage>
                  </h2>
                  <p className="orange-is-new-black">
                    <FormattedMessage
                      id="longAboutMe"
                      defaultMessage=" Bakı,Azərbaycanda yaşayıram.Yeni və yüksək texnologiyaları
                    öyrənməyi və araşdırmağı sevirəm. Yeniliklərə açığam .
                    Durmadan öyənməyə ve özümü inkişaf etdirməyə davam edirəm."
                    ></FormattedMessage>
                  </p>
                  <p>
                    <a target="_blank" href={resume}>
                      <FormattedMessage
                        id="clickToSeeCv"
                        defaultMessage="CV-mə baxmaq üçün klikləyin."
                      ></FormattedMessage>
                    </a>
                  </p>
                  <ul className="ftco-footer-social list-unstyled mt-4">
                    <li>
                      <a onMouseOver={() => this.iconHover}  href="https://wa.me/994555174401">
                      <InstagramIcon  color={yellowColor} width="50px" ></InstagramIcon>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.facebook.com/asgar.aliyev.568/">
                      <InstagramIcon color={yellowColor} width="50px" ></InstagramIcon>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/asgaraliyev">
                      <InstagramIcon color={yellowColor} width="50px" ></InstagramIcon>

                      </a>
                    </li>
                  </ul>
                  <h5>
                    {" "}
                    <FormattedMessage
                      id="contactWithMe"
                      defaultMessage="Mənimlə əlaqə qurun"
                    ></FormattedMessage>
                  </h5>
                  <p>
                    <span className="white-is-new-black">
                      {" "}
                      <FormattedMessage
                        id="eMail"
                        defaultMessage="E-Poçt:"
                      ></FormattedMessage>{" "}
                    </span>
                    <a href="mailto:asgaraliyev2001@gmail.com">
                      asgaraliyev2001@gmail.com
                    </a>
                  </p>
                  <p>
                    <span className="white-is-new-black">
                      <FormattedMessage
                        id="phone"
                        defaultMessage="Telefon:"
                      ></FormattedMessage>{" "}
                    </span>
                    <a href="tel://994555174401">+994555174401</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row d-flex justify-content-end mt-5">
            <div className="col-md-10">
              <div className="profile ftco-animate">
                <div className="row my-5">
                  <div className="col-md-6">
                    <p>
                      <strong>
                        <FormattedMessage
                          id="myNameOriginal"
                          defaultMessage="Adım"
                        ></FormattedMessage>{" "}
                        :
                      </strong>{" "}
                      <span className="orange-is-new-black">
                        <FormattedMessage
                          id="myName"
                          defaultMessage="Əsgər"
                        ></FormattedMessage>
                      </span>
                    </p>
                    <p>
                      <strong>
                        <FormattedMessage
                          id="address"
                          defaultMessage="Ünvan"
                        ></FormattedMessage>
                        :
                      </strong>{" "}
                      <span className="orange-is-new-black">
                        Baku,Azerbaycan
                      </span>
                    </p>
                    <p>
                      <strong>
                        <FormattedMessage
                          id="myPhone"
                          defaultMessage="Telefonum"
                        ></FormattedMessage>
                        :
                      </strong>{" "}
                      <span>
                        <a href="tel://+994555174401">+994-55-517-44-01</a>
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="exp mt-5 ftco-animate">
                <h2 className="mb-4">
                  <FormattedMessage
                    id="myExperiences"
                    defaultMessage="Təcrübələrim"
                  ></FormattedMessage>
                </h2>
                <div className="exp-wrap py-4">
                  <div className="desc">
                    <h4 className="seven-rem">
                      {" "}
                      Web Developer <span> - Buta Education</span>{" "}
                    </h4>
                  </div>
                  <div className="year">
                    <p className="seven-rem orange-is-new-black">2020</p>
                  </div>
                </div>
                <div className="exp-wrap py-4">
                  <div className="desc">
                    <h4 className="seven-rem ">
                      Frontend Developer<span> - Vergul.az</span>{" "}
                    </h4>
                  </div>
                  <div className="year">
                    <p className="seven-rem orange-is-new-black">2019</p>
                  </div>
                </div>
              </div>
              <div className="exp mt-5 ftco-animate">
                <h2 className="mb-4">
                  <FormattedMessage
                    id="education"
                    defaultMessage="Təhsil"
                  ></FormattedMessage>
                </h2>
                <div className="exp-wrap py-4">
                  <div className="desc">
                    <h4 className="seven-rem">
                      Bakalavr<span> - Qərbi Kaspi Üniversiteti</span>{" "}
                    </h4>
                    <p className="location six-rem orange-is-new-black">
                      Azerbaycan - Bakı
                    </p>
                  </div>
                  <div className="year">
                    <p className="seven-rem orange-is-new-black">
                      2018 - Davam edir
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="skills" className="row mt-5 flex-column ftco-animate">
            <div className="col-md-8">
              <h2 className="mb-4">
                <FormattedMessage
                  id="mySkills"
                  defaultMessage="My Skills"
                ></FormattedMessage>
              </h2>
            </div>
            <Skill name="HTML/SCSS" progress={90}></Skill>
            <Skill name="OpenCV/Flask/Selenium/Bs4" progress={80}></Skill>
            <Skill name="Jquery/ES6/AJAX/JSON" progress={75}></Skill>
            <Skill name="ReactJS/Redux" progress={70}></Skill>
          </div>
        </div>
      </section>
    );
  }
}
