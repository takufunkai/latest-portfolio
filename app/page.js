import HeroSection from "@/pages/homepage/heroSection";
import dynamic from "next/dynamic";

const DynamicWorkSection = dynamic(() =>
  import("@/pages/homepage/workSection")
);
const DynamicEducationSection = dynamic(() =>
  import("@/pages/homepage/educationSection")
);
const DynamicProjectsSection = dynamic(() =>
  import("@/pages/homepage/projectsSection")
);
const DynamicContactSection = dynamic(() =>
  import("@/pages/homepage/contactSection")
);
const DynamicTechStackSection = dynamic(() =>
  import("@/pages/homepage/techStackSection")
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
