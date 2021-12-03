import React, { useState, useEffect } from 'react';
import classes from './NavBar.module.css';
import Switch from '@material-ui/core/Switch';
import Button from '@material-ui/core/Button';


export default function NavBar({ themeHandler, onSubmit }) {
    const [checked, setChecked] = useState(true);
    const [navColor, setNavColor] = useState("#161515");
    const handleChange = (event) => {
        setChecked(event.target.checked);
    };

    useEffect(() => {
        themeHandler(checked);
        if (checked === true)
            setNavColor("#161515");
        else
            setNavColor("#707070");
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [checked]);

    return (
        <div className={classes.navbar} style={{ backgroundColor: navColor }}>
            <label className={classes.label} htmlFor="lightordark"> Light </label>
            <Switch
                checked={checked}
                onChange={handleChange}
                color="primary"
                name="lightordark"
                inputProps={{ 'aria-label': 'primary checkbox' }}
            />
            <label className={classes.label} style={{paddingRight:"2vw"}} htmlFor="lightordark"> Dark </label>

            <Button variant="contained" color="primary" onClick={onSubmit}>
                Run Code
            </Button>
        </div>
    );
}