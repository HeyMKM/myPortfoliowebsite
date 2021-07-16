import React from "react";
import Common from "./Common";
import web from "../src/Images/profile.jpg";

const Home = () => {
  return (
    <>
   <Common name='To know more about me with'
     imgsrc={web}
     company="My Portfolio"
     visit="/technology"
     btnname="Get Started"
     discription="Frontend Developer - Expert in interactive & responsive website development, Unit testing & deployment"
   />
    </>
  );
};
export default Home;
