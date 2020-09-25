import React from "react";
import Header from "../components/Header";
import Question from "../components/Question";

import classes from "../styles/page.module.scss";
const Form = () => {
    return (
        <div className={classes.root}>
            <Header />
            <Question />
        </div>
    );
};

export default Form;
