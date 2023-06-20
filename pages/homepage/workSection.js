import Section from "@/components/section";
import ExperienceItem from "@/components/experienceItem";
import Link from "@/components/link";
import {
  AntDesignIcon,
  AwsIcon,
  Css3Icon,
  GolangIcon,
  JiraIcon,
  MaterialIcon,
  MongoIcon,
  NextjsIcon,
  NodejsIcon,
  PostgresqlIcon,
  PythonIcon,
  ReactIcon,
  RubyRailsIcon,
  SassIcon,
  TurboIcon,
  VercelIcon,
} from "@/components/icons";

export default function WorkSection() {
  const workExperience = [
    {
      title: (
        <Link href="https://www.byteplus.com" text="Byteplus, Bytedance" />
      ),
      subtitle: "January 2023 - June 2023 | Frontend Engineer Intern",
      icons: [
        <NextjsIcon key="nextjs" />,
        <NodejsIcon key="node" />,
        <Css3Icon key="css" />,
        <MongoIcon key="mongodb" />,
        <AntDesignIcon key="antdesign" />,
        <TurboIcon key="turbo" />,
        <JiraIcon key="jira" />,
      ],
    },
    {
      title: <Link href="https://workclass.co" text="WorkClass" />,
      subtitle:
        "May 2022 - July 2022, October 2022 - December 2022 | Software Engineer Intern",
      icons: [
        <NextjsIcon key="nextjs" />,
        <PythonIcon key="python" />,
        <AwsIcon key="aws" />,
        <VercelIcon key="vercel" />,
        <PostgresqlIcon key="psql" />,
        <NodejsIcon key="node" />,
        <SassIcon key="sass" />,
        <JiraIcon key="jira" />,
        <AntDesignIcon key="antdesign" />,
      ],
    },
    {
      title: "ZDD Labs",
      subtitle: "October 2021 - March 2022 | Part-time Frontend Engineer",
      icons: [
        <NextjsIcon key="nextjs" />,
        <ReactIcon key="react" />,
        <NodejsIcon key="node" />,
        <SassIcon key="sass" />,
        <MaterialIcon key="materialui" />,
      ],
    },
    {
      title: (
        <Link
          href="https://www.comp.nus.edu.sg/~vwo/projects/2021-aac-aunqa.html"
          text="Computing for Voluntary Welfare Organizations"
        />
      ),
      subtitle: "May 2021 - July 2021 | Software Engineer Intern",
      icons: [
        <ReactIcon key="react" />,
        <GolangIcon key="golang" />,
        <RubyRailsIcon key="rubyonrails" />,
        <PostgresqlIcon key="psql" />,
        <MaterialIcon key="materialui" />,
        <SassIcon key="sass" />,
      ],
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
