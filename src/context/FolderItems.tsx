import FolderData from "../StaticData/FolderData";
import { createContext, useState } from "react";
export type TFolderItems = {
  id: string;
  name: string;
};
export type TContext = {
  folderItems: TFolderItems[];
  setFolderItems: React.Dispatch<React.SetStateAction<TFolderItems[]>>;
};

export const FolderItemsContext = createContext<TContext>({
  folderItems: FolderData,
  setFolderItems: () => {},
});
export default function ContextProvider({ children }: any) {
  const folders: TFolderItems[] =
    JSON.parse(localStorage.getItem("folderItems")!) || FolderData;
  const [folderItems, setFolderItems] = useState<TFolderItems[]>(folders);
  return (
    <FolderItemsContext.Provider value={{ folderItems, setFolderItems }}>
      {children}
    </FolderItemsContext.Provider>
  );
}
