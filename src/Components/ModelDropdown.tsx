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
    <div className="drop1-container">
      <ul className="unordered-list-style">
        <li className="list-style">
          <button
            className="newfolder-style"
            onClick={() => {
              handleRenameHandler();
            }}
          >
            {buttonTitle[0]}
          </button>
        </li>
        <hr className="horizontal-line-style" />
        <li className="list1-style">
          <button
            onClick={(event: React.MouseEvent<HTMLButtonElement>) => handleDeleteHandler()}
            className="newfolder-style"
          >
            {buttonTitle[1]}
          </button>
        </li>
      </ul>
    </div>
  );
}

export default ModelDropdown;
