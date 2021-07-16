import React from "react";
import Card from "./Card";
import imgReact from "../src/Images/ReactImg.png";
import bootStrap from "../src/Images/bootstrap-4.png";
import html from "../src/Images/html.png";
import css from "../src/Images/css.jpeg";
import javaScript from "../src/Images/js.png";
import jQuery from "../src/Images/jQuery.jpg";
import java from "../src/Images/java.jpg";
import json from "../src/Images/json.jpg";
import figma from "../src/Images/figma.png";


const Service = () => {
  return (
    <>
      <div className="my-5">
        <h1 className="text-center">My Web Development Core Skills</h1>
      </div>
      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-4">
              <Card
                imgSrc={imgReact}
                title="React JS"
                text="1.5 years of experience in react.js including JSX, Functional component, Props, Hooks, Events, Forms, API Call, Context API, Router, Arrays map, CSS Styling,Material UI, NPM "
                visit="https://reactjs.org/docs/getting-started.html"
                btn="React"
              />
              <Card
                imgSrc={bootStrap}
                title="Bootstrap 4"
                text="Good working knowledge to use this CSS framework and its grid system to make website interactive and responsive"
                visit="https://reactjs.org/docs/getting-started.html"
                btn="Bootstrap"
              />
              <Card
                imgSrc={html}
                title="HTML5"
                text="2 years of experience in Creating layout design using HTML 5, Forms, Tables, iFrames, Semantics, Graphics, Media"
                visit="https://reactjs.org/docs/getting-started.html"
                btn="HTML5"
              />
              <Card
                imgSrc={css}
                title="CSS3"
                text="Experienced in styling designed HTML page using CSS3, Flex Media queries, Transition, Animations, Shadow"
                visit="https://reactjs.org/docs/getting-started.html"
                btn="CSS 3"
              />
              <Card
                imgSrc={javaScript}
                title="JavaScript"
                text="2 years of experience in JS like DOM manipulation, objects, OOP concept, ES6/ES7"
                visit="https://reactjs.org/docs/getting-started.html"
                btn="Java Script"
              />
              <Card
                imgSrc={jQuery}
                title="jQuery"
                text="Basic knowlwdge of jQuery also like DOM manipulation, js objects and some useful plugins."
                visit="https://reactjs.org/docs/getting-started.html"
                btn="jQuery"
              />
              <Card
                imgSrc={java}
                title="Java"
                text="1 year of Experience in Core Java, Objects oriented programming and its concept"
                visit="https://www.java.com/"
                btn="Java"
              />
              <Card
                imgSrc={json}
                title="JSON"
                text="Worked on JSON objects also, like creating, updating, deleting configuration tokens"
                visit="https://www.json.org/json-en.html"
                btn="JSON"
              />
              <Card
                imgSrc={figma}
                title="Figma"
                text="Basic knowledge to use UX tool figma, designed a chat layout using this tool "
                visit="https://www.figma.com/"
                btn="Figma"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Service;
