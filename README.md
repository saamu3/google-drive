# Title:  Google-drive application

##  **Description**: 
```
1> this application will create an user interfacte of google-drive,which enables us to create new folders,renaming the existing folders and deleting the folders.

2> first I divided the UserInterface into three components Home,SideBar and DriveContent,
I have rendered the Home component in the main App component,in that I have used Routing for navigation.

3> then after I have rendered the Sidebar and Drive components in the Home Component.

4> **HOME COMPONENT** --> I have imported useState hook from the react and created folderItems state in the component,I have rendered the sidebar,drive content inside the home component,and also I had created createContext for sending state variables to child components(sidebar,drivecontent),it will become easy rather than sending as props.

5> **SIDEBAR COMPONENT** --> I have rendered the ModelPopUp component in the sidebar,and also used the useContext hook,previously I had created the context in the home component, now I'm using that hook inside the sidebar by importing it into the component,and I kept the drivelogo,"DRIVE heading" and New Button in sidebar,and I have also define the handleCreate function when I click the new button.

6> **DRIVECONTENT COMPONENT** ---> I have render the folders in this component,and I have used the useContext hook here,and again I have rendering the folders component inside the drivecontent component.

7> **FOLDER COMPONENT** ---> I wrote logic for creation of folder,I have rendered modeldropdown and modelpopup components,when I click the folder it will display one dropdown having rename folder,delete folder options,so when I click the rename folder,it will display modelPopup for rename folder ,when I click the rename button,then the name of the folder will be changed.if I click the delete button then the folder will be removed from the DriveContent.

8> when I click the specific folder ,then it will navigate into another page,for this I have created folderContent component,so when I click the folder then it will navigate into different routes but renders the same component with different files,I have used useParams hook to get the id from the Route,so by comparing the route id with  the folderid of file,if it matches,then specific file will be displayed inside the folder.

8>here,I have also used the localstorage to store the folderItems and fileItems,what I meant to say is when I refresh the page,the folder which I have created will be on the page only,they won't be removed,even after applying delete,rename functionalities,here I have used useEffect hook for storing items in localstorage by keeping dependencies as folder,folders will be stored whenever folders state get updated using setState function.

9> I have created one css file for one component,I kept all css files inside css-files folder,and all components inside the components folder.
```


## Technologies : HTML,CSS,JS,REACT
              I have used above mentioned technologies in this application.

## Imported hooks:
 useState,useEffect,useContext and create Context
 
## installed packages : 
                        1> npm install react-router-dom,
                        2> install node to run the application.

download the drive image and kept inside of public folder.                    


        