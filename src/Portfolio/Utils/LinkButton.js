import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function LinkButton({ name, icon, link }) {
  const handleClick = () => {
    window.open(link);
  };

  return (
    <div className="d-flex m-4 w-50 justify-content-center">
      <button
        type="button"
        className="col d-flex justify-content-center link-button"
        onClick={handleClick}
      >
        <div className="pe-4">
          <FontAwesomeIcon icon={icon} />
        </div>
        {name}
      </button>
    </div>
  );
}

export default LinkButton;
