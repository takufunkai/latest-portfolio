export default function ExperienceItem({
  title,
  subtitle,
  description,
  icons = [],
}) {
  return (
    <div className="mb-6">
      <h2 className="text-xl">{title}</h2>
      <h3 className="mt-1 text-gray-400">{subtitle}</h3>
      <div className="mt-2">{description}</div>
      {icons.length > 0 && (
        <div className="flex gap-2">
          {icons.map((icon, i) => (
            <p key={i}>{icon}</p>
          ))}
        </div>
      )}
    </div>
  );
}
