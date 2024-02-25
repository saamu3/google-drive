import { useNavigate } from "react-router-dom";
import styles from "../css-files/style.css";

export default function Elements({ icon, name }) {
  const navigate = useNavigate();
  return (
    <>
      <div className="elements-alignement">
        {icon}
        <p onMouseOver={() => navigate("/home")}> {name}</p>
      </div>
    </>
  );
}
