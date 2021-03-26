import React from "react";
import Skill from "./Skill";
import profilePhoto from "../photos/profilePhoto.webp";
import resume from "../photos/resume.pdf";
import { FormattedMessage } from "react-intl";
import InstagramIcon from "../icons/InstagramIcon";
import { yellow } from "@material-ui/core/colors";
import FacebookIcon from "../icons/FacebookIcon";
import WhatsappIcon from "../icons/WhatsappIcon";
import Skills from "./Skills";
import { useSelector } from "react-redux";

export default function AboutMe() {
  const items = useSelector((state) => state.items);
  const yellowColor = "#fce130";
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
                    <a
                      onMouseOver={() => this.iconHover}
                      href="https://wa.me/994555174401"
                    >
                      <WhatsappIcon
                        nameOfClass="social-icon"
                        color={yellowColor}
                        width="50px"
                      ></WhatsappIcon>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.facebook.com/asgar.aliyev.568/">
                      <FacebookIcon
                        nameOfClass="social-icon"
                        color={yellowColor}
                        width="50px"
                      ></FacebookIcon>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/asgaraliyev">
                      <InstagramIcon
                        nameOfClass="social-icon"
                        color={yellowColor}
                        width="50px"
                      ></InstagramIcon>
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
                    asgaraliyev.work@gmail.com
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
            {/* <div className="profile ftco-animate">
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
            </div> */}
            <div className="exp mt-5 ftco-animate">
              <h2 className="mb-4">
                <FormattedMessage
                  id="myExperiences"
                  defaultMessage="Təcrübələrim"
                ></FormattedMessage>
              </h2>
              {items.map((experience) => {
                if (experience.sys.contentType.sys.id == "experiences") {
                  console.log(
                    experience.sys.contentType.sys.id,
                    "experience.sys.contentType.sys.id"
                  );

                  return (
                    <div className="exp-wrap py-4">
                      <div className="desc">
                        <h4 className="seven-rem">
                          {experience.fields.jobTitle}
                          <span> - {experience.fields.companyName}</span>{" "}
                        </h4>
                      </div>
                      <div className="year">
                        <p className="seven-rem orange-is-new-black">
                          {experience.fields.startedAt.split("-")[0]}-
                          {experience.fields.finishedAt != null
                            ? experience.fields.finishedAt.split("-")[0]
                            : "davam edir"}
                        </p>
                      </div>
                    </div>
                  );
                }
              })}
            </div>
            <div className="exp mt-5 ftco-animate">
              <h2 className="mb-4">
                <FormattedMessage
                  id="education"
                  defaultMessage="Təhsil"
                ></FormattedMessage>
              </h2>
              {items.map((education) => {
                if (education.sys.contentType.sys.id == "educations") {
                  return (
                    <div className="exp-wrap py-4">
                      <div className="desc">
                        <h4 className="seven-rem">
                          {education.fields.degree}
                          <span> - {education.fields.agencyName}</span>
                        </h4>
                        <p className="location six-rem orange-is-new-black">
                          {education.fields.locationByName}
                        </p>
                      </div>
                      <div className="year">
                        <p className="seven-rem orange-is-new-black">
                          {education.fields.startedAt.split("-")[0]} -{" "}
                          {education.fields.finishedAt != null
                            ? education.fields.finishedAt.split("-")[0]
                            : "davam edir"}
                        </p>
                      </div>
                    </div>
                  );
                }
              })}
            </div>
          </div>
        </div>
        <Skills></Skills>
      </div>
    </section>
  );
}
