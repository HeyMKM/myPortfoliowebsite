import React from "react";
import { useState } from "react";

const Footer = () => {
  let year = new Date();
  let currDate = year.toDateString();
  let currTime = year.toLocaleTimeString();
  const [time, setTime] = useState(currTime);

  setInterval(() => {
    let currTime = new Date().toLocaleTimeString();
    setTime(currTime);
  }, 1000);

  return (
    <>
      <footer className=" w-100 bg-light d-flex justify-content-md-between align-items-end">
        <p>{currDate} </p>
        <p>© MkM. All right reserved | Terms and Condition*</p>
        <p>{time}</p>
      </footer>
    </>
  );
};
export default Footer;
