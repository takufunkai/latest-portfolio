import Section from "@/components/section";
import { FaGithub } from "react-icons/fa";
import { TbBrandNextjs, TbBrandTailwind, TbBrandVercel } from "react-icons/tb";

export default function TechStack() {
  const technologies = [
    {
      icon: <TbBrandTailwind className="icons" />,
      label: "Tailwind CSS",
    },
    {
      icon: <TbBrandNextjs className="icons" />,
      label: "NextJS",
    },
    {
      icon: <TbBrandVercel className="icons" />,
      label: "Vercel",
    },
  ];
  return (
    <Section title="Technologies used for this portfolio">
      <a
        href="https://github.com/takufunkai/latest-portfolio"
        target="_blank"
        rel="noreferrer"
      >
        <button className="flex border-2 p-2 mb-4 rounded-md bg-gray-600">
          <FaGithub className="icons" />
          <p className="ml-2">GitHub repository</p>
        </button>
      </a>
      {technologies.map((tech, i) => (
        <div className="flex gap-2 mb-2" key={i}>
          {tech.icon}
          <p>{tech.label}</p>
        </div>
      ))}
    </Section>
  );
}
