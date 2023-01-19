import React from "react";
import { BsGithub } from "react-icons/bs";
import { FiTwitter } from "react-icons/fi";
import { FaGitAlt } from "react-icons/fa";
import { SiUpwork } from "react-icons/si";
import { AiOutlineCopyrightCircle } from "react-icons/ai";
import { Link } from "react-router-dom";
import { FaCocktail } from "react-icons/fa";

const Footer = () => {
  return (
    <div
      style={{
        height: 100,
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        boxShadow: "0px 0px 10px 0px",
      }}
    >
      <Link to="/">
        <FaCocktail style={{ fontSize: "2.5rem", color: "#3E8AAD" }} />
      </Link>
      <h3 style={{ fontFamily: "cursive" }}>
        Design by HMS <AiOutlineCopyrightCircle />
      </h3>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <BsGithub />
        <FiTwitter style={{ margin: "5px 0px" }} />
        <FaGitAlt style={{ margin: "0px 0px 5px 0px" }} />
        <SiUpwork />
      </div>
    </div>
  );
};

export default Footer;
