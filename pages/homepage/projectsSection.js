import Section from "@/components/section";
import ExperienceItem from "@/components/experienceItem";
import Link from "@/components/link";

export default function ProjectsSection() {
  const personalProjects = [
    {
      title: (
        <Link
          href="https://josephinesim.sg"
          text="Real estate agent marketing website"
        />
      ),
    },
    {
      title: (
        <Link
          href="https://rtt-app.vercel.app"
          text="Class 2B Riding Theory Test mock exams"
        />
      ),
    },
    {
      title: (
        <Link
          href="sg-carpark-availabilities.vercel.app"
          text="Singapore Carpark Availabilities"
        />
      ),
    },
  ];
  return (
    <Section title="Personal Projects">
      {personalProjects.map((item, i) => (
        <ExperienceItem key={i} {...item} />
      ))}
    </Section>
  );
}
