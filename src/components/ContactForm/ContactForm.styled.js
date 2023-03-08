import styled from "styled-components";
import { Form as FormikForm, ErrorMessage as FormikMessage } from 'formik';

export const Form = styled(FormikForm)`
    border: 1.5px solid black;
    width: 480px;
    padding: 15px;
    display: flex;
    flex-direction: column;
    gap: 15px;
    font-weight: 500;

    input {
        display: block;
        margin-top: 6px;
        outline: none;
        border: 1.5px solid #c8c9cc;
        border-radius: 2px;
    }

    input:focus {
        border: 2px solid #72a1ed;
        border-radius: 2px;
    }

    button {
        display: inline-block;
        width: 120px;
        
        background-color: #fff;
        border: 1.5px solid #c8c9cc;
        border-radius: 4px;
        box-shadow: rgb(0 0 0 / 8%) 0px 3px 3px -2px, rgb(0 0 0 / 7%) 0px 3px 4px 0px,
    rgb(0 0 0 / 4%) 0px 1px 4px 0px;
        font-size: 16px;
    }

    button:active {
        background-color: #72a1ed;
        border: none;
    }
`
export const ErrorMessage = styled(FormikMessage)`
    display: inline-block;
    margin: 0;
    padding: 0;
    font-size: 12px;
    font-weight: normal;
    color: red;
`
