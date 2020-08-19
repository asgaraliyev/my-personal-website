import React, { Component } from "react";
const WorksContext = React.createContext();

export  class WorksProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      works: [
        {
          id: 1,
          photo: "http://www.butaeducation.com/static/img/logos/icon.webp",
          employer: "Buta Education Xaricde Tehsil Merkezi",
          photos: ["https://cdn2.editmysite.com/images/landing-pages/global/home-com-forward/themes/design-s.png"],
          workContent:
            "Buta Education şirkəti 2015-ci ildən bəri tələbələrin xaricdə təhsil almasının təşkili xidmətini göstərir.",
          time: "İyul 2020",
        },
      ],
    };
  }
  render() {
    return (
      <WorksContext.Provider value={this.state}>
        {this.props.children}
      </WorksContext.Provider>
    );
  }
}

const WorksConsumer = WorksContext.Consumer;
export default WorksConsumer
