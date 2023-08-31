import { createContext } from 'react';


interface contextProps{
    sidemenuOpen: boolean;
    isAddingEntry: boolean;
    isDragging: boolean;

    //methods
    openSideMenu: () => void

    closeSideMenu: () => void

    setIsAddingEntry: (isAdding: boolean) => void

    endDragging: () => void
    startDragging: () => void
}


export const UIContext = createContext({} as contextProps)