import React from 'react';
import classes from './BartSay.module.css'

interface BartWelcomProps {
    error: number | null;
}

const BartSay: React.FC<BartWelcomProps> = ({error}) => {
    const image = error? 404 : 'bartHome'
    return (
        <div className={classes.image}>
            <img src={require(`../../images/${image}.png`)} alt=""/>
        </div>
    );
};

export default BartSay;
