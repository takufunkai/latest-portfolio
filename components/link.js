export default function Link({ href, text, newTab = true }) {
  return (
    <a
      className="underline"
      href={href}
      {...(newTab && {
        target: "_blank",
        rel: "noreferrer",
      })}
    >
      {text}
    </a>
  );
}
