import Section from "@/components/section";
import ExperienceItem from "@/components/experienceItem";
import Link from "@/components/link";
import {
  Css3Icon,
  NextjsIcon,
  VercelIcon,
  PostgresqlIcon,
  NodejsIcon,
  ReactIcon,
  MapboxIcon,
  GoogleSheetsIcons,
} from "@/components/icons";

export default function ProjectsSection() {
  const personalProjects = [
    {
      title: (
        <Link
          href="https://josephinesim.sg"
          text="Real estate agent marketing website"
        />
      ),
      icons: [
        <NextjsIcon key="nextjs" />,
        <VercelIcon key="vercel" />,
        <PostgresqlIcon key="psql" />,
        <NodejsIcon key="node" />,
        <Css3Icon key="css3" />,
      ],
    },
    {
      title: (
        <Link
          href="https://rtt-app.vercel.app"
          text="Class 2B Riding Theory Test mock exams"
        />
      ),
      icons: [<ReactIcon key="react" />, <Css3Icon key="css3" />],
    },
    {
      title: (
        <Link
          href="https://sg-carpark-availabilities.vercel.app"
          text="Singapore Carpark Availabilities"
        />
      ),
      icons: [
        <ReactIcon key="react" />,
        <MapboxIcon key="mapbox" />,
        <GoogleSheetsIcons key="sheets" />,
      ],
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
