import React, { useState } from 'react';
import { CurrentUserContextType } from '../../interfaces/Interfaces';




const AppContext = React.createContext<CurrentUserContextType>({} as CurrentUserContextType);

const AppContextProvider = ({children}: {children: React.ReactNode}) => {
  const example = 'example telemeter';

  const verifyData = (data: string) => {
    console.log('Data:', data);
  }

  const [openModal, setOpenModal] = useState<boolean>(false);

  const currentUserContextType: CurrentUserContextType = { example, verifyData, openModal, setOpenModal: setOpenModal };
  return (
  <AppContext.Provider value={currentUserContextType}>
    {children}
  </AppContext.Provider>
  );

}


export { AppContext, AppContextProvider };