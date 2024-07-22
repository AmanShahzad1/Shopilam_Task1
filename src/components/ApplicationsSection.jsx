// src/components/ApplicationsSection.js
import React from 'react';
import libraryImage from "../img/landing-page/applications/library.jpg";
import surveyImage from "../img/landing-page/applications/survey.jpg";
import chatImage from "../img/landing-page/applications/chat.jpg";
import todoImage from "../img/landing-page/applications/todo.jpg";

const ApplicationsSection = () => {
  return (
    <div className="section background">
      <div className="container" id="apps">
        <div className="row">
          <div className="col-12 offset-0 col-lg-8 offset-lg-2 text-center mb-4">
            <h1>Applications</h1>
            <p className="section-text">
              With the help of components and layouts, we created four different applications.
              They are a good way to get you started if you want to build something similar.
              <br />
            </p>
          </div>
        </div>
        <div className="row screenshots">
          <div className="col-12 text-center mb-4">
            <ul className="nav nav-tabs justify-content-center mb-4" role="tablist">
              {[
                { id: "library", label: "Library", imgSrc: libraryImage, link: "/Apps.MediaLibrary.html" },
                { id: "survey", label: "Survey", imgSrc: surveyImage, link: "/Apps.Survey.List.html" },
                { id: "chat", label: "Chat", imgSrc: chatImage, link: "/Apps.Chat.html" },
                { id: "todo", label: "Todo", imgSrc: todoImage, link: "/Apps.Todo.List.html" },
              ].map((app, index) => (
                <li key={index} className="nav-item">
                  <a className={`nav-link ${index === 0 ? 'active' : ''}`} data-toggle="tab" href={`#${app.id}`} role="tab">
                    <p>{app.label}</p>
                  </a>
                </li>
              ))}
            </ul>
            <div className="tab-content">
              {[
                { id: "library", imgSrc: libraryImage, link: "/Apps.MediaLibrary.html" },
                { id: "survey", imgSrc: surveyImage, link: "/Apps.Survey.List.html" },
                { id: "chat", imgSrc: chatImage, link: "/Apps.Chat.html" },
                { id: "todo", imgSrc: todoImage, link: "/Apps.Todo.List.html" },
              ].map((app, index) => (
                <div key={index} className={`tab-pane fade ${index === 0 ? 'show active' : ''} justify-content-center`} id={app.id} role="tabpanel">
                  <a target="_blank" href={app.link}>
                    <img alt="app image" className="app-image" src={app.imgSrc} />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplicationsSection;
