function ModelDropdown({
  type,
  setIsPopupActive,
  setIsDropdownActive,
  buttonName1,
  buttonName2,
  folderId,
  handleDelete
}) {
  return (
    <div>
      <div className={type == "create" ? `drop-container` : "rename" ? `drop1-container` : null}>
        <ul style={{ display: "flex", flexDirection: "column" }}>
          <li className="list-style">
            <button
              className="newfolder-style"
              onClick={() => {
                if (type == "create") {
                  setIsPopupActive("create");
                  setIsDropdownActive(null)
                }
                if (type == "rename") {
                  setIsPopupActive("rename");
                  setIsDropdownActive(null)
                }
              }}
            >
              {buttonName1}
            </button>
          </li>
          <hr className="horizontalline-style" />
          <li className="list1-style">
            <button
              onClick={() => {
                if (type == "rename") {
                  handleDelete(folderId)
                  setIsDropdownActive(null)
                }
              }}
              className="newfolder-style"
            >
              {buttonName2}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ModelDropdown;
