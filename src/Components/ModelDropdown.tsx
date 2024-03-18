import "../css-files/ModelDropdown.css";
type TModelDropdownProp = {
  handleRenameHandler: () => void;
  handleDeleteHandler: () => void;
  buttonTitle: string[];
};
function ModelDropdown({
  handleRenameHandler,
  handleDeleteHandler,
  buttonTitle,
}: TModelDropdownProp) {
  return (
    <div className="dropdown-container">
      <ul className="unordered-list">
        <li className="rename-button-container">
          <button
            className="newfolder"
            onClick={() => {
              handleRenameHandler();
            }}
            data-testid="rename"
          >
            {buttonTitle[0]}
          </button>
        </li>
        <hr className="horizontal-line" />
        <li className="delete-button-container">
          <button
            onClick={(event: React.MouseEvent<HTMLButtonElement>) =>
              handleDeleteHandler()
            }
            className="newfolder"
          >
            {buttonTitle[1]}
          </button>
        </li>
      </ul>
    </div>
  );
}

export default ModelDropdown;
