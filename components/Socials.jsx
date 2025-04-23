import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const socialIcons = [
  { icon: <FaGithub />, path: "https://github.com/siddhantkokne0409" },
  { icon: <FaLinkedinIn />, path: "https://linkedin.com/in/siddhantkokane" },
  { icon: <FaInstagram />, path: "https://www.instagram.com/siddhant_04_09/" },
];

const Socials = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socialIcons.map((item, index) => {
        return (
          <a
            key={index}
            href={item.path}
            target="_blank"
            className={iconStyles}
          >
            {item.icon}
          </a>
        );
      })}
    </div>
  );
};

export default Socials;
