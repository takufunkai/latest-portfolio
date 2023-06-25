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
      points: [
        'Built i18n translation service module, which is used across the various customer-facing platforms, reducing build times by more than 60% and improving page load speed by more than 30%.',
        'Assisted migration of marketing website from in-house React library to NextJS, using specific rendering practices to improve site-wide performance and SEO score.',
        'Assisted in building in-house Content Management System for marketing team to create new pages.'
      ],
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
      points: [
        'Optimized job portal’s SEO and web vitals with all important landing pages having above 90% rating consistently, contributing to achieving the company’s all-time high of over 2,300 daily unique visitors.',
        'Refactored frontend code-base written in NextJS to optimally leverage on server-side rendering, incremental static regeneration and static site generation to improve page speeds.',
        'Migrated AWS EC2 servers and CI/CD pipeline to alternative cloud service provider, reducing costs by 80%.',
        'Implemented caching in Django (Python) backend to improve response time.',
        'Built Search backend using MeiliSearch, significantly improving the search results and response time of users making search requests on landing pages.',
      ],
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
      points: [
        'Implemented new game features and improvements using React/NextJS, SCSS and Typescript.',
        'Built Javascript module to replace third-party library, saving thousands of dollars per month.'
      ],
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
      points: [
        'Created a report-generation system using Go and PostgreSQL, and developed the GUI for the system in React and Typescript. Replaces the need for manual work on Excel sheets, significantly reducing the man-hours and errors.',
        'Rewrote and refactored 4 major back-end modules from Ruby on Rails to Go.',
      ],
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
