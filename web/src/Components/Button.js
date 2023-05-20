import "./Button.css";

export const Button = ({ label, onClick }) => {
  return (
    <div>
      <button
        className="btn-comp"
        type="button"
        onClick={(event) => onClick(event)}
      >
        {label}
      </button>
    </div>
  );
};
