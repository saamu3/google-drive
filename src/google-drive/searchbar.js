import styles from "../css-files/style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faCircleQuestion,
  faGear,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
export default function Searchbar() {
  return (
    <>
      <div className="searchBarTop">
        <div className="inner-container">
          <FontAwesomeIcon className="searchIcon" icon={faSearch} />
          <input
            className="input-element"
            type="search"
            placeholder="Search in Drive"
          ></input>
        </div>
        <div className="align-icons">
          <FontAwesomeIcon icon={faCircleQuestion} />
          <FontAwesomeIcon icon={faGear} />
          <FontAwesomeIcon icon={faUser} />
        </div>
      </div>
    </>
  );
}
