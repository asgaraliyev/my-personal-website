import React, { Component } from 'react'

export default class AboutMe extends Component {
    render() {
        return (
            <section className="ftco-section about-section">
            <div className="container">
              <div className="row d-flex my-5" data-scrollax-parent="true">
                <div
                  className="col-md-4 author-img"
                  style={{ backgroundImage: "url("+`https://upload.wikimedia.org/wikipedia/commons/c/ce/G-Eazy_-_Openair_Frauenfeld_2019_40.jpg` +")"}}
                  data-scrollax=" properties: { translateY: '-70%'}"
                />
                <div className="col-md-2" />
                <div className="col-md-6 wrap ftco-animate">
                  <div className="about-desc">
                    <h1 className="bold-text">Haqqımda</h1>
                    <div className="p-5">
                      <h2 className="mb-5">Salam mən Əsgər Əliyev</h2>
                      <p className="orange-is-new-black">
                        Bakı,Azərbaycanda yaşayıram.Yeni və yüksək
                        texnologiyaları öyrənməyi və araşdırmağı sevirəm.
                      </p>
                      <p>
                        <a target="_blank" href="/static/resume.pdf">
                          CV-mə baxmaq üçün klikləyin.
                        </a>
                      </p>
                      <ul className="ftco-footer-social list-unstyled mt-4">
                        <li>
                          <a href="https://wa.me/burabaxilmalidi">
                            <span className="icon-whatsapp" />
                          </a>
                        </li>
                        <li>
                          <a href="burabaxilmalidi">
                            <span className="icon-facebook" />
                          </a>
                        </li>
                        <li>
                          <a href="https://www.instagram.com/burabaxilmalidi">
                            <span className="icon-instagram" />
                          </a>
                        </li>
                      </ul>
                      <h5>Mənimlə əlaqə qurun</h5>
                      <p>
                        <span className="white-is-new-black">E-Poçt:{" "}</span>
                        <a href="mailto:burabaxilmalidi">E-Poçt: burabaxilmalidi</a>
                      </p>
                      <p>
                        <span className="white-is-new-black">Telefon:{" "}</span>
                        <a href="tel://burabaxilmalidi">burabaxilmalidi</a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row d-flex justify-content-end mt-5">
                <div className="col-md-10">
                  <div className="profile ftco-animate">
                    <h2 className="mb-4">Profilim</h2>
                    <h4 className="mb-4">
                      Mən bir Python və Frontend Developer .Mənim üçün əsas olan
                      işlərimi kreativ və analitik düşüncə ilə etməkdir.
                    </h4>
                    <p className="orange-is-new-black">
                      Yeniliklərə açığam . Durmadan öyənməyə ve özümü inkişaf
                      etdirməyə davam edirəm.
                    </p>
                    <div className="row my-5">
                      <div className="col-md-6">
                        <p >
                          <strong>Adım:</strong> <span className="orange-is-new-black">Əsgər Əliyev</span>
                        </p>
                        <p>
                          <strong>Ünvan:</strong> <span className="orange-is-new-black">burabaxilmalidi</span>
                        </p>
                        <p>
                          <strong>Telefonum:</strong>{" "}
                          <span>
                            <a href="tel://burabaxilmalidi">burabaxilmalidi</a>
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="exp mt-5 ftco-animate">
                    <h2 className="mb-4">Təcrübələrim</h2>
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
                    <h2 className="mb-4">Təhsil</h2>
                    <div className="exp-wrap py-4">
                      <div className="desc">
                        <h4 className="seven-rem">
                          Bakalavr<span> - Qərbi Kaspi Üniversiteti</span>{" "}
                        </h4>
                        <p className="location six-rem orange-is-new-black">Azerbaycan - Bakı</p>
                      </div>
                      <div className="year">
                        <p className="seven-rem orange-is-new-black">2018 - Davam edir</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="skills" className="row mt-5 flex-column ftco-animate">
                <div className="col-md-8">
                  <h2 className="mb-4">Bacarıqlarım</h2>
                </div>
                <div className="col-md-6 animate-box">
                  <div className="progress-wrap">
                    <h4 className="left-side" >Python</h4>
                    <div className="progress">
                      <div
                        className="progress-bar color-1"
                        role="progressbar"
                        aria-valuenow={75}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        style={{ width: "90%" }}
                      >
                        <span>90%</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="col-md-6 animate-box"
                  data-animate-effect="fadeInRight"
                >
                  <div className="progress-wrap">
                    <h4 className="left-side">jQuery</h4>
                    <div className="progress">
                      <div
                        className="progress-bar color-1"
                        role="progressbar"
                        aria-valuenow={60}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        style={{ width: "50%" }}
                      >
                        <span>50%</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 animate-box">
                  <div className="progress-wrap">
                    <h4 className="left-side">Flutter</h4>
                    <div className="progress">
                      <div
                        className="progress-bar color-1"
                        role="progressbar"
                        aria-valuenow={85}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        style={{ width: "60%" }}
                      >
                        <span>60%</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="col-md-6 animate-box"
                  data-animate-effect="fadeInRight"
                >
                  <div className="progress-wrap">
                    <h4 className="left-side" >SCSS</h4>
                    <div className="progress">
                      <div
                        className="progress-bar color-1"
                        role="progressbar"
                        aria-valuenow={90}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        style={{ width: "75%" }}
                      >
                        <span>75%</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 animate-box">
                  <div className="progress-wrap">
                    <h4 className="left-side">Selenium</h4>
                    <div className="progress">
                      <div
                        className="progress-bar color-1"
                        role="progressbar"
                        aria-valuenow={70}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        style={{ width: "90%" }}
                      >
                        <span>90%</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="col-md-6 animate-box"
                  data-animate-effect="fadeInRight"
                >
                  <div className="progress-wrap">
                    <h4 className="left-side">OpenCV</h4>
                    <div className="progress">
                      <div
                        className="progress-bar color-1"
                        role="progressbar"
                        aria-valuenow={80}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        style={{ width: "80%" }}
                      >
                        <span>80%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )
    }
}
