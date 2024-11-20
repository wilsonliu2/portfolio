import React from "react";
import ShinyButton from "./ShinyButton";
import SocialButton from "./SocialButton";
import { FaGithub } from "react-icons/fa";
import { IoIosDocument } from "react-icons/io";
import { SiDevpost } from "react-icons/si";

const Socials = () => {
  return (
    <div className="flex items-center space-x-2 p-5">
      <ShinyButton
        text={"let's connect!"}
        link="https://www.linkedin.com/in/wilson-liu-780255237/"
      />
      <SocialButton link="https://github.com/wilsonliu2" icon={FaGithub} />
      <SocialButton
        link="https://devpost.com/wilsonliu2?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav"
        icon={SiDevpost}
      />
    </div>
  );
};

export default Socials;
