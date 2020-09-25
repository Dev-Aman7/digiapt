import React, { useState } from "react";
import Select from "react-select";
import classes from "../styles/question.module.scss";
// import RadioButtonUncheckedIcon from "@material-ui/icons/RadioButtonUnchecked";
// import ShortTextIcon from "@material-ui/icons/ShortText";
const options = [
    {
        value: "Short Answer",
        label: "Short Answer",
    },
    {
        value: "Multiple choice",
        label: "Multiple choice",
    },
    {
        value: "Checkboxes",
        label: "Checkboxes",
    },
];

const Question = () => {
    // const [optionType, setOptionType] = useState("Short Answer");
    const [allOptions, setAllOptions] = useState([{ type: "text", value: "" }]);
    const handleChange = (elem) => {
        console.log(elem.value);
        // setOptionType(elem.value);
        if (elem.value === "Short Answer")
            setAllOptions([{ type: "text", value: "" }]);
        else if (elem.value === "Multiple choice") {
            setAllOptions([{ type: "radio", value: "" }]);
        } else {
            setAllOptions([{ type: "checkbox", value: "" }]);
        }
    };
    let option = allOptions.map((elem) => {
        switch (elem.type) {
            case "text":
                return (
                    <input
                        type="text"
                        value={elem.value}
                        className={classes.short}
                        placeholder="Short answer text"
                    />
                );

            case "radio":
                return (
                    <div>
                        <input type="radio" id="rad" value={elem} />
                        <input
                            type="text"
                            placeholder="write something"
                            className={classes.option_text}
                        />
                    </div>
                );

            case "checkbox":
                return (
                    <div>
                        <input type="checkbox" id="rad" value={elem} />
                        <input
                            type="text"
                            placeholder="write something"
                            className={classes.option_text}
                        />
                    </div>
                );

            default:
                return null;
        }
    });

    const addSameOption = () => {
        console.log(allOptions);

        setAllOptions([...allOptions, { type: allOptions[0].type, value: "" }]);
    };
    const addTextOption = () => {
        setAllOptions([...allOptions, { type: "text", value: "" }]);
    };
    let addOther =
        allOptions[allOptions.length - 1].type !== "text" &&
        allOptions.length < 5 ? (
            <div className={classes.option}>
                <input type={allOptions[0].type} />
                <span
                    className={classes.option_item}
                    onClick={addSameOption}
                    tabIndex={-1}
                    role="button"
                >
                    Add option or
                </span>
                <span
                    className={classes.blue}
                    onClick={addTextOption}
                    tabIndex={-2}
                    role="button"
                >
                    {" "}
                    add &quot;Other&quot;
                </span>
            </div>
        ) : null;

    return (
        <div className={classes.root}>
            <div className={classes.title_wrapper}>
                <input
                    id="form-title"
                    placeholder="Question title"
                    className={classes.title}
                />
                {option}
                {addOther}
            </div>

            <div>
                <Select
                    defaultValue={options[0]}
                    options={options}
                    className={classes.select_wrapper}
                    isSearchable={false}
                    isClearable={false}
                    onChange={handleChange}

                    /*styles={ selectCustomStyles }*/
                    /*onChange={ changeSelectHandler }*/
                />
            </div>
        </div>
    );
};

export default Question;
