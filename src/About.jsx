import React from "react";
import Common from "./Common";
import web from "../src/Images/aboutImg.jpg";


const About = () => {
  return (
   <Common name='Three years of experience in  '
     imgsrc={web}
     company="Tata Consultancy Services"
     visit="/contact"
     btnname="Contact Now"
     discription ="UI Developer| Full time | Noida/Delhi-NCR |B.Tech| CS/IT | Extrovert | Team Player | Outdoor Games | Reading | Movies |Travelling"
   />
  );
};
export default About;
