import Section from "@/components/section";
import ExperienceItem from "@/components/experienceItem";

export default function EducationSection() {
  const education = [
    {
      title: "National University of Singapore",
      subtitle: "2020 - 2024 | BComp Computer Science",
      description: (
        <div>
          Teaching assistant
          <p>CS2030S | Rating 4.6/5.0</p>
          <p>CS2103T | Rating 4.1/5.0</p>
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
