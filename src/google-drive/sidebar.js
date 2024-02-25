import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faComputer,
  faUser,
  faClock,
  faStar,
  faCircleExclamation,
  faTrashCan,
  faCloud,
} from "@fortawesome/free-solid-svg-icons";
import { faGoogleDrive } from "@fortawesome/free-brands-svg-icons";
import { useNavigate } from "react-router-dom";
import Elements from "./elements";
import Container from "./container";
import styles from "../css-files/style.css";

export default function Sidebar({ setIsDropdownActive, setIsPopupActive }) {
  const navigate = useNavigate();

  return (
    <>
      <div className="leftSlidebar">
        <div className="alignment">
          <img src="./logo.png" alt="logo" className="logo" />
          <p className="para-element">Drive</p>
        </div>

        <button
          className="design"
          onClick={() => {
            setIsDropdownActive("create");
            setIsPopupActive(null);
          }}
        >
          + New
        </button>

        <Container>
          <Elements icon={<FontAwesomeIcon icon={faHome} />} name="Home" />
          <Elements
            icon={<FontAwesomeIcon icon={faGoogleDrive} />}
            name="My Drive"
          />
          <Elements
            icon={<FontAwesomeIcon icon={faComputer} />}
            name="Computers"
          />
        </Container>

        <Container>
          <Elements
            icon={<FontAwesomeIcon icon={faUser} />}
            name="shared with me"
          />
          <Elements icon={<FontAwesomeIcon icon={faClock} />} name="Recent" />
          <Elements icon={<FontAwesomeIcon icon={faStar} />} name="Starred" />
        </Container>

        <Container>
          <Elements
            icon={<FontAwesomeIcon icon={faCircleExclamation} />}
            name="Spam"
          />
          <Elements icon={<FontAwesomeIcon icon={faTrashCan} />} name="Bin" />
          <Elements icon={<FontAwesomeIcon icon={faCloud} />} name="Storage" />
        </Container>

        <button className="storage-button">Get more storage</button>
      </div>
    </>
  );
}
