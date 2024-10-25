import React from "react";
import ShinyButton from "./ShinyButton";
import SocialButton from "./SocialButton";
import { FaGithub } from "react-icons/fa";
import { IoIosDocument } from "react-icons/io";

const Socials = () => {
  return (
    <div className="flex items-center space-x-2 p-5">
      <ShinyButton
        text={"let's connect!"}
        link="https://www.linkedin.com/in/wilson-liu-780255237/"
      />
      <SocialButton link="https://github.com/wilsonliu2" icon={FaGithub} />
      <SocialButton
        link="https://www.linkedin.com/in/wilsonliu1/overlay/1729839933697/single-media-viewer?type=DOCUMENT&profileId=ACoAADrygxAB3grmsnkE8GUy3PoJMNxnAoThYVQ&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3B1KOElJE9RAOI7KDuxaeNnw%3D%3D"
        icon={IoIosDocument}
      />
    </div>
  );
};

export default Socials;
