import React from 'react'
import Modal from '../components/Modal';
import { AppContext } from '../components/AppContext/AppContext';

const GetRegister = () => {

  const { verifyData, openModal, setOpenModal }  = React.useContext(AppContext) ;

  const handleVerifyData = () => {
    setOpenModal(openModal => !openModal);
    verifyData("Sopa de caracol")
  }





  return (
    <>
    openModal----    { `${openModal} --`}
    <div onClick={handleVerifyData}>GetRegister</div>
    {
      openModal && (
        <Modal>
          <div>Modal</div>
          <div onClick={() => setOpenModal(false)}>Cerrar</div>
        </Modal>
      )
    }
    </>
  )
}

export default GetRegister