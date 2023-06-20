import Section from "@/components/section";
import { EMAIL } from "@/constants";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { TbMail } from "react-icons/tb";

export default function ContactSection() {
  const links = [
    {
      icon: <FaGithub size={24} />,
      link: "https://www.github.com/takufunkai",
    },
    {
      icon: <FaLinkedin size={24} />,
      link: "https://www.linkedin.com/in/ezekiel-toh",
    },
  ];

  return (
    <Section title="Contact me">
      <h2 className="mb-1">Ezekiel Toh</h2>
      <h3 className="mb-4">
        <a href={`mailto:${EMAIL}`} className="flex items-center gap-2">
          <TbMail />
          ezekiel@comp.nus.edu.sg
        </a>
      </h3>
      <div className="flex mb-4 gap-2">
        {links.map(({ icon, link }) => (
          <a key={link} href={link} target="_blank" rel="noreferrer">
            {icon}
          </a>
        ))}
      </div>
    </Section>
  );
}
