import { useState } from "react";

function useTogglePopUp() {
  const [isPopUpOpen, setIsPopUpOpen] = useState<boolean>(false);

  const togglePopUp = (value: boolean) => {
    setIsPopUpOpen(!isPopUpOpen);
  };

  return { isPopUpOpen, togglePopUp };
}
export default useTogglePopUp;
