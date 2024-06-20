import React, { useState } from "react";
import "./NavBar.css";

export const NavBar = () => {
  const links = [
<<<<<<< HEAD
    { index: 0, href: "banner", text: "Home" },
    { index: 1, href: "project", text: "Project" },
    { index: 2, href: "certificate", text: "Certificate" },
=======
    { index: 0, href: "banner", text: "home" },
    { index: 1, href: "project", text: "project" },
    { index: 2, href: "certificate", text: "certificate" },
>>>>>>> 9d7580f97947da5036e80ab80868ab746451ac05
    { index: 3, href: "contact", text: "contact" },
  ];

  const [colorChanged, setColorChanged] = useState(false);

  const handleColorChange = () => {
    setColorChanged(!colorChanged);
  };

  const handleOnClick = (index) => {
    if (index) {
      const element = document.getElementById(links[index].href);
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const toContact = () => {
    const element = document.getElementById("contact");
    element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="navbar">
      <div className="logo">
        <div className="right">J</div>
        <span className="with-line"></span>
        <div className="left">J</div>
      </div>
      <div className={`links ${colorChanged ? "mobile" : ""}`}>
        {links.map((link, index) => (
          <a
            href={`#${link.href}`}
            key={index}
            onClick={() => handleOnClick(index)}
          >
            <p className={`${link.text}`}>{link.text}</p>
          </a>
        ))}
      </div>
      <div className="navbutton">
        <button onClick={toContact}>Contact Me</button>
        <button className="toggler" onClick={handleColorChange}>
          Links
        </button>
      </div>
    </div>
  );
};
