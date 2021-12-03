import React, {Fragment,useState ,useEffect} from 'react';
import Editor from './components/Editor/Editor';
import Iframe from './components/Iframe/Iframe';
import NavBar from './components/NavBar/NavBar';

import {defaultValue} from './default';

function App() {
  const [editorText, setEditorText] = useState("");
  const [srcDoc, setSrcDoc] = useState("");
  const [theme, setTheme] = useState("twilight");

  useEffect(()=> {
    setSrcDoc(defaultValue);
    setEditorText(defaultValue);
  },[]);

  function onChangeHandler(val) {
    setEditorText(val);
  }

  function themeHandler(state) {
    if (state === true) {
      setTheme("twilight");
    }
    else
      setTheme("chrome");
  }

  function submitHandler() {
    setSrcDoc(editorText);
  }

  return (
    <Fragment >
      <NavBar themeHandler={themeHandler} onSubmit={submitHandler}/>
      <Editor onChange = {onChangeHandler} theme={theme} />
      <Iframe srcDoc = {srcDoc} />
    </Fragment>
  );
}

export default App;
