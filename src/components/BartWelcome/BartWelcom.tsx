import React from 'react';
import classes from './BartWelcom.module.css'

const BartWelcom = () => {
    return (
        <div className={classes.image}>
            <img src={require("../../images/bartHome.png")} alt=""/>
        </div>
    );
};

export default BartWelcom;