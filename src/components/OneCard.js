import React, { useState, useEffect } from "react";
import { CSSTransition } from "react-transition-group";
import { FormattedMessage } from "react-intl";
import client from "../config/Contentful";
export default function OneCard({ item }) {
  const [isVisible, setVisible] = useState(false);
  const [entry, setEntry] = useState(null);
  useEffect(() => {
    client.getEntry(item.sys.id).then((entry) => {
      console.log(entry);
      
      setEntry(entry.fields);
    });
  }, []);
  console.log(entry, "entry");
  return (
    <li
      className="one-card"
      onMouseOver={() => {
        setVisible(true);
      }}
      onMouseLeave={() => {
        setVisible(false);
      }}
    >
      {entry && (
        <a href={entry.websiteLink}>
          <div className="main">
            <div className="filter"></div>
            <CSSTransition in={isVisible} timeout={1000} classNames="my-node">
              <div className="details">
                <div className="main-details">
                  <FormattedMessage
                    id="click_to_see"
                    defaultMessage="Görmək üçün kliklə"
                  ></FormattedMessage>
                  <h4>{entry.websiteName}</h4>
                </div>
              </div>
            </CSSTransition>

            {entry.websitePhoto.fields.file.url != null ? (
              <img src={entry.websitePhoto.fields.file.url}></img>
            ) : (
              <h1>something went wrong</h1>
            )}
          </div>
        </a>
      )}
    </li>
  );
}
