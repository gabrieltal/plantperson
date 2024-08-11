export default function InternetLink({href, image, title }) {
  return (
    <a className="margin-x--xs no-underline" href={href} target="_blank" rel="noopener noreferrer"><img alt={title} src={image} /><span className="screen-reader-only">{title}</span></a>
  );
};
