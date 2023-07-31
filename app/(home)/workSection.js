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
        "Reduced code compile and build time by 60% and increasing page load speed by 30% across 3 customer-facing platforms, by building an in-house i18n translation service module in NodeJS.",
        "Assisted migration of marketing website from in-house React library to NextJS, using specific rendering practices to improve site-wide performance and SEO score by 10%.",
        "Built and designed system in React for developers to build new components through StorybookJS for Content Management System, which is used by the marketing team to create new pages, reducing development time significantly.",
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
        "Improved server response to website by 80%, by optimizing SQL statements and Django (Python) logic, and implementing server-side cache in server scripts.",
        "Improved development time by creating multiple one-click bash/Unix scripts to dockerize and deploy new microservices and serverless functions to AWS servers.",
        "Reduce deployment costs by 80% by migrating AWS EC2 servers and CI/CD pipeline to alternative cloud service provider, Linode.",
        "Improved search results and response times of website users by optimizing Search/Autocomplete module in MeiliSearch and Python by up to 10%",
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
        "Implemented new game features and improvements using React/NextJS, SCSS and Typescript.",
        "Built Javascript module to replace third-party library, saving thousands of dollars per month.",
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
        "Created a report-generation system using Go and PostgreSQL, and developed the GUI for the system in React and Typescript. Replaces the need for manual work on Excel sheets, significantly reducing the man-hours and errors.",
        "Rewrote and refactored 4 major back-end modules from Ruby on Rails to Go.",
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
