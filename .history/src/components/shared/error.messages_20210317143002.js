import React, { useState, useEffect } from "react";

import { REQUIRED_MESSAGE, INVALID_EMAIL_MESSAGE } from '../constants'

export const ErrorMessage = (props) => {
    const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    const [Message, setMessage] = useState("");

    useEffect(() => {
        switch (props.type) {
            case 'required':
                setMessage(REQUIRED_MESSAGE);
                break;
            case 'pattern':
                switch (props.patternType) {
                    case 'email':
                        setMessage(INVALID_EMAIL_MESSAGE)
                    default:
                        break;
                }
            default:
                setMessage('');
                break;
        }
    }, [props.type])
    return (
        <div><span>{Message}</span></div>
    );
}
