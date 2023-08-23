

import './App.css';
import { Test } from './Test';
import { Modal } from './Modal/Modal';
import { Content } from './Modal/Content';
import { useEffect, useState } from 'react';
import Example from './Modal/Example';
import { PrintButton } from './PrintButton';
import { LoaderPage } from './Loader/LoaderPage';
import { Alert } from './Alert';
import { Formspree } from './Formspree';
import { MaterialUi } from './MaterialUi';
import { useTranslation } from 'react-i18next';
import { Button } from '@mui/material';




function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [stateLoader, setStateLoader] = useState(true);

useEffect( () => {
  const timer = setTimeout( () => 
  setStateLoader(false), 3000);
  return () => clearTimeout(timer)
}, [] )

const { i18n, t }  = useTranslation();

const toggleLang = () => {
  i18n.changeLanguage(i18n.language === 'en' ? 'ru' : 'en')
}


  return (
    <div className='App'>

      <div className='i18nStyle'>
        <h1>{ t ('Welcome to React') }</h1>
        <h3>{ t ('description') }</h3>
        <Button variant="contained" onClick={toggleLang}>{i18n.language === 'en' ? 'ru' : 'en'}</Button>
      </div>

    <MaterialUi/>
    <Formspree/>
    <Alert/>
    {stateLoader && <LoaderPage/>}

<button onClick={ () => setIsOpen(true) } className='styleBorderModal'>OPEN MODAL</button>
    {
      isOpen && 
      <Modal setIsOpen={setIsOpen}>
        <Content setIsOpen={setIsOpen}/>
      </Modal>
    }
    <Test/>

    <Example/>
    <PrintButton/>



    </div>
  );
}

export default App;
