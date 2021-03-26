import React, { useEffect, useState } from "react";
import Skill from "./Skill";
import { FormattedMessage } from "react-intl";
import { useSelector } from "react-redux";
export default function Skills() {
  // const [skills, setSkills] = useState([]);
  const items = useSelector((state) => state.items);
  items.sort(function (b, a) {
    return parseFloat(a.fields.percentage) - parseFloat(b.fields.percentage);
  });
  // useEffect(() => {
  //   client
  //     .getEntries()
  //     .then((res) => {
  //       var skills = res.items;
  //       skills.sort(function (b, a) {
  //         return (
  //           parseFloat(a.fields.percentage) - parseFloat(b.fields.percentage)
  //         );
  //       });
  //       setSkills(skills);
  //     })
  //     .catch((error) => {});
  // }, []);
  return (
    <div id="skills" className="row mt-5 flex-column ftco-animate">
      <div className="col-md-8">
        <h2 className="mb-4">
          <FormattedMessage
            id="mySkills"
            defaultMessage="My Skills"
          ></FormattedMessage>
        </h2>
      </div>
      {items.map((skill) => {
        if (skill.sys.contentType.sys.id === "skills") {
          console.log(skill.sys);

          return (
            <Skill
              name={skill.fields.name}
              progress={skill.fields.percentage}
            ></Skill>
          );
        }
      })}
    </div>
  );
}
