import React from 'react';
import classes from './Iframe.module.css';

export default function Iframe ({srcDoc}) {

    return (
        <div className={classes.iframediv} >
        <iframe 
        className={classes.iframe}
        title="EDITOR_OUTPUT" 
        sandbox="allow-scripts" 
        srcDoc={srcDoc}
        />
      </div>
    );
}