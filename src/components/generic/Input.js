import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";


const HiddenLabel = styled.label`display:none;`;


class Input extends React.Component {
  render() {
    const { type, name, onChange, disabled, placeholder, value } = this.props;
    return (
        <React.Fragment>
            <HiddenLabel {...{ name }} ></HiddenLabel>
            <input {...{ name, type, onChange, disabled, placeholder, value }} />
        </React.Fragment>
    );
  }
}
Input.propTypes = {
    type: PropTypes.oneOf(["text", "number", "submit"]),
    placeholder: PropTypes.string,
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    disabled: PropTypes.bool,
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ])
}
Input.defaultProps = {
    type: "text",
    disabled: false,
    value: "",
    placeholder: "Enter text here..."
}

export default Input;
