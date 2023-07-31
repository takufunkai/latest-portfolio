import Section from "@/components/section";
import ExperienceItem from "@/components/experienceItem";
import { JavaIcon } from "@/components/icons";

export default function EducationSection() {
  const education = [
    {
      title: "National University of Singapore",
      subtitle: "2020 - 2024 | BComp Computer Science (4.16/5.00)",
      description: (
        <div>
          Teaching assistant
          <p>CS2030S (Programming Methodology II in Java) | Rating 4.6/5.0</p>
          <p>CS2103T (Software Engineering in Java) | Rating 4.1/5.0</p>
        </div>
      ),
    },
    {
      title: "Anderson Junior College",
      subtitle: "2016 - 2017",
    },
  ];

  return (
    <Section title="Education">
      {education.map((item, i) => (
        <ExperienceItem key={i} {...item} />
      ))}
    </Section>
  );
}
