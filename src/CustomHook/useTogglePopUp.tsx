import { useState} from "react";
import React from "react";
 function useTogglePopUp():any{
  const [isPopUpOpen, setIsPopUpOpen] = useState<Boolean>(false);

  function togglePopUp(){
    setIsPopUpOpen(!isPopUpOpen);
  }

  return [isPopUpOpen,togglePopUp] ;
}
export default useTogglePopUp;
