import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { login } from "../../../redux/actions/authentication/authenticationActions";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "../../shared-components/error-messages/error.messages";

const LoginComponent = (props) => {
    const { register, handleSubmit, errors, formState } = useForm({ mode: 'onChange' });
    const onSubmit = data => {
        props.login(data);
    };
    const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            
            <input name="email" placeholder="Enter Email here!" ref={register({ required: true, pattern: emailRegex })} />
            <ErrorMessage type={errors.email?.type} patternType={'email'} />
            
            <input type="password" name="password" placeholder="Enter Password here!" ref={register({ required: true })} />
            <ErrorMessage type={errors.password?.type}/>
            
            <input disabled={!formState.isValid} type="submit" />
        </form>
    );
}

export default connect(null, { login })(LoginComponent);
