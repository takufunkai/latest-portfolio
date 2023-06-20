export default function Section({ id, children, title }) {
  return (
    <section className="flex items-center py-10" id={id}>
      <div>
        {title && <h1 className="font-bold text-4xl mb-6">{title}</h1>}
        {children}
      </div>
    </section>
  );
}
