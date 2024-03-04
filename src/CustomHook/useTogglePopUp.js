import { useState} from "react";
function useTogglePopUp() {
  const [isPopUpOpen, setIsPopUpOpen] = useState(false);

  function togglePopUp() {
    setIsPopUpOpen(!isPopUpOpen);
  }

  return [isPopUpOpen,togglePopUp];
}
export default useTogglePopUp;
