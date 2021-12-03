import React from 'react';
import AceEditor from "react-ace";
import {defaultValue} from '../../default';

import "ace-builds/src-noconflict/mode-html";
import "ace-builds/src-noconflict/theme-twilight";
import "ace-builds/src-noconflict/theme-chrome";

import classes from './Editor.module.css';


export default function Editor (props) {

    function onChange(newValue) {
        props.onChange(newValue);
      }

    return (
    <div className={classes.editordiv}>
    <AceEditor
        mode="html"
        theme={props.theme}
        onChange={onChange}
        name="EDITOR"
        editorProps={{ $blockScrolling: false }}
        height="100%"
        width="100%"
        fontSize={15}
        showPrintMargin={false}
        defaultValue={defaultValue}
        setOptions={{useWorker: 0}}
      />
      </div>);
}
