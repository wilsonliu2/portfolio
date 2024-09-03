import React from "react";
import ShinyButton from "./ShinyButton";
import SocialButton from "./SocialButton";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Socials = () => {
  return (
    <div className="flex items-center space-x-2 p-5">
      <ShinyButton
        text={"let's connect!"}
        link="https://www.linkedin.com/in/wilson-liu-780255237/"
      />
      <SocialButton
        link="https://www.linkedin.com/in/wilson-liu-780255237/"
        icon={FaLinkedin}
      />
      <SocialButton link="https://github.com/wilsonliu2" icon={FaGithub} />
    </div>
  );
};

export default Socials;
