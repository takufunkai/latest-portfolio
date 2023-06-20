import {
  FaAws,
  FaCss3,
  FaJava,
  FaJira,
  FaNodeJs,
  FaPython,
  FaReact,
  FaSass,
} from "react-icons/fa";
import {
  SiAntdesign,
  SiGooglesheets,
  SiMapbox,
  SiMaterialdesign,
  SiMongodb,
  SiPostgresql,
  SiRubyonrails,
  SiTurborepo,
  SiVercel,
} from "react-icons/si";
import { TbBrandGolang, TbBrandNextjs } from "react-icons/tb";

const BaseIcon = ({ Icon, text }) => {
  return (
    <div className="group relative">
      <Icon className="icons" />
      <p className="hidden absolute group-hover:block bg-white text-gray-500 p-2 -left-1 mt-1 rounded-md whitespace-nowrap shaodw-md">
        {text}
      </p>
    </div>
  );
};

export const NextjsIcon = () => (
  <BaseIcon Icon={TbBrandNextjs} text="Next.js" />
);
export const NodejsIcon = () => <BaseIcon Icon={FaNodeJs} text="Node.js" />;

export const Css3Icon = () => <BaseIcon Icon={FaCss3} text="CSS 3" />;

export const MongoIcon = () => <BaseIcon Icon={SiMongodb} text="MongoDB" />;

export const AntDesignIcon = () => (
  <BaseIcon Icon={SiAntdesign} text="Ant Design" />
);

export const TurboIcon = () => (
  <BaseIcon Icon={SiTurborepo} text="Turbo Repo" />
);

export const JiraIcon = () => <BaseIcon Icon={FaJira} text="JIRA" />;

export const PythonIcon = () => <BaseIcon Icon={FaPython} text="Python" />;

export const VercelIcon = () => <BaseIcon Icon={SiVercel} text="Vercel" />;

export const AwsIcon = () => (
  <BaseIcon Icon={FaAws} text="Amazon Web Services" />
);

export const PostgresqlIcon = () => (
  <BaseIcon Icon={SiPostgresql} text="PostgreSQL" />
);

export const SassIcon = () => <BaseIcon Icon={FaSass} text="Sass" />;

export const ReactIcon = () => <BaseIcon Icon={FaReact} text="React" />;

export const MaterialIcon = () => (
  <BaseIcon Icon={SiMaterialdesign} text="Material UI" />
);

export const GolangIcon = () => (
  <BaseIcon Icon={TbBrandGolang} text="GO Lang" />
);

export const RubyRailsIcon = () => (
  <BaseIcon Icon={SiRubyonrails} text="Ruby on Rails" />
);

export const MapboxIcon = () => <BaseIcon Icon={SiMapbox} text="Mapbox GL" />;

export const GoogleSheetsIcons = () => (
  <BaseIcon Icon={SiGooglesheets} text="Google Sheets" />
);

export const JavaIcon = () => {
  <BaseIcon Icon={FaJava} text="Java" />;
};
