import Section from "@/components/section";
import ExperienceItem from "@/components/experienceItem";
import Link from "@/components/link";
import { TbBrandNextjs } from "react-icons/tb";
import { FaNodeJs } from "react-icons/fa";

export default function WorkSection() {
  const workExperience = [
    {
      title: (
        <Link href="https://www.byteplus.com" text="Byteplus, Bytedance" />
      ),
      subtitle: "January 2023 - June 2023 | Frontend Engineer Intern",
      icons: [
        <TbBrandNextjs key="nextjs" className="icons" />,
        <FaNodeJs key="nodejs" className="icons" />,
      ],
    },
    {
      title: <Link href="https://workclass.co" text="WorkClass" />,
      subtitle:
        "May 2022 - July 2022, October 2022 - December 2022 | Software Engineer Intern",
    },
    {
      title: "ZDD Labs",
      subtitle: "October 2021 - March 2022 | Part-time Frontend Engineer",
    },
    {
      title: (
        <Link
          href="https://www.comp.nus.edu.sg/~vwo/projects/2021-aac-aunqa.html"
          text="Computing for Voluntary Welfare Organizations"
        />
      ),
      subtitle: "May 2021 - July 2021 | Software Engineer Intern",
    },
  ];

  return (
    <Section title="Work Experiences">
      {workExperience.map((item, i) => (
        <ExperienceItem key={i} {...item} />
      ))}
    </Section>
  );
}
