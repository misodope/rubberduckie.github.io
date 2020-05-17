import "./Social.scss";
import React from "react";

const socialObject = {
  tiktok: {
    icon: (
      <a href="https://www.tiktok.com/@misodope/">
        <img src="https://img.icons8.com/ios-filled/50/000000/tiktok.png" />
      </a>
    ),
    name: <a href="https://www.tiktok.com/@misodope/">@misodope</a>,
  },
  instagram: {
    icon: (
      <a href="https://www.instagram.com/jerrrychen/">
        <img src="https://img.icons8.com/ios-filled/50/000000/instagram-new.png" />
      </a>
    ),
    name: <a href="https://www.instagram.com/jerrrychen/">@jerrrychen</a>,
  },
  github: {
    icon: (
      <a href="https://github.com/misodope">
        <img src="https://img.icons8.com/ios-filled/50/000000/github.png" />
      </a>
    ),
    name: <a href="https://github.com/misodope">@misodope</a>,
  },
};

const Social = () => {
  const socials = Object.keys(socialObject).map((social, index) => (
    <div key={social} className={`social__icon animated fadeIn`}>
      {socialObject[social].icon}
    </div>
  ));

  return <div className="social">{socials}</div>;
};

export default Social;
