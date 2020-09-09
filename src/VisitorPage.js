import React, { Component } from 'react'
import Interaction from "./components/Interaction";
import Coof from "./components/Coof";
import AboutMe from "./components/AboutMe";
import WhatIDo from "./components/WhatIDo";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
export default class VisitorPage extends Component {
    render() {
        return (
            <div>
        <Interaction></Interaction>
        <AboutMe></AboutMe>
        <WhatIDo></WhatIDo>
        <Portfolio></Portfolio>
        <Coof></Coof>
        <Contact></Contact>
        <Footer></Footer>
            </div>
        )
    }
}
