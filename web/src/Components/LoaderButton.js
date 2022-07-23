import React from "react";
import Button from "react-bootstrap/Button";
import Spinner from 'react-bootstrap/Spinner';

import "./LoaderButton.css";

const LoaderButton = ({
  isLoading,
  text,
  loadingText,
  className = "",
  disabled = false,
  ...props
}) =>
  <Button
    className={`LoaderButton ${className}`}
    disabled={disabled || isLoading}
    {...props}
  >
    {isLoading && <Spinner />}
    {!isLoading ? text : loadingText}
  </Button>;

export default LoaderButton;
