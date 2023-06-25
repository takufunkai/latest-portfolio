export default function ExperienceItem({
  title,
  subtitle,
  description,
  points = [],
  icons = [],
}) {
  return (
    <div className="mb-6">
      <h2 className="text-xl">{title}</h2>
      <h3 className="mt-1 text-gray-400">{subtitle}</h3>
      <div className="mt-2">{description}</div>
      <ul className='mt-2 list-disc'>{points.map((point, i) => <li className='mb-2' key={i}>{point}</li>)}</ul>
      {icons.length > 0 && <div className="flex gap-2">{icons}</div>}
    </div>
  );
}
