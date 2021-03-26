import React, { useEffect } from "react";
import Interaction from "./components/Interaction";
import Coof from "./components/Coof";
import AboutMe from "./components/AboutMe";
// import WhatIDo from "./components/WhatIDo";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import client from "./config/Contentful";
import Footer from "./components/Footer";
import { useDispatch } from "react-redux";
export default function VisitorPage() {
  const dispatch = useDispatch();
  useEffect(() => {
    client.getEntries().then((res) => {
      dispatch({ type: "CHANGE_ITEMS", data: res.items });
    });
  }, []);
  return (
    <div>
      <Interaction></Interaction>
      <AboutMe></AboutMe>
      {/* <WhatIDo></WhatIDo> */}
      <Portfolio></Portfolio>
      <Coof></Coof>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}
