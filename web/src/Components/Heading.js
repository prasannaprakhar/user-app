import "./Heading.css";

export const Heading = ({ heading }) => {
  return (
    <div className="heading-title">
      <h1 className="heading-name">{heading}</h1>
    </div>
  );
};
