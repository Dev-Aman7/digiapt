import React from "react";

import classes from "../styles/header.module.scss";
const Header = () => {
    return (
        <div className={classes.root}>
            <input
                id="Form-title"
                placeholder="Form title"
                className={classes.title}
            />
            <input
                id="Form-Description"
                label="Form description"
                className={classes.description}
                placeholder="Form description"
            />
        </div>
    );
};

export default Header;
