import Section from "@/components/section";

export default function HeroSection() {
  return (
    <Section>
      <h1 className="font-bold text-5xl mb-6">Ezekiel Toh</h1>
      <h2 className="text-lg">Software Engineer</h2>
      <h3 className="mt-1 mb-2 text-gray-300">
        With a passion to build and innovate, I have worked with multiple
        companies and personal projects to deliver products that make an impact.
      </h3>
      <a href="#contact">
        <button className="rounded-md border-2 p-2 bg-slate-600">
          Contact me
        </button>
      </a>
    </Section>
  );
}
