import { useState } from "react";

function useTogglePopUp() {
  const [isPopUpOpen, setIsPopUpOpen] = useState<boolean>(false);

  const togglePopUp = (value: boolean) => {
    setIsPopUpOpen(!value);
  };

  return [ isPopUpOpen, togglePopUp ] as const;
}
export default useTogglePopUp;
