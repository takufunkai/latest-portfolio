import HeroSection from "./heroSection";
import dynamic from "next/dynamic";

const DynamicWorkSection = dynamic(() =>
  import("./workSection")
);
const DynamicEducationSection = dynamic(() =>
  import("./educationSection")
);
const DynamicProjectsSection = dynamic(() =>
  import("./projectsSection")
);
const DynamicContactSection = dynamic(() =>
  import("./contactSection")
);
const DynamicTechStackSection = dynamic(() =>
  import("./techStackSection")
);

export default function Home() {
  return (
    <div className="max-w-4xl m-auto px-4">
      <HeroSection />
      <DynamicWorkSection />
      <DynamicEducationSection />
      <DynamicProjectsSection />
      <DynamicContactSection />
      <DynamicTechStackSection />
    </div>
  );
}
