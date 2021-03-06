import React from "react";
import "./Header.css";
import PersonIcon from "@material-ui/icons/Person";
import QuestionAnswerIcon from "@material-ui/icons/QuestionAnswer";
import IconButton from "@material-ui/core/IconButton";
import { Link, useHistory } from "react-router-dom";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

function Header({ backButton }) {
  const history = useHistory();
  return (
    <div className="header">
      {backButton ? (
        <IconButton onClick={() => history.replace(backButton)}>
          <ArrowBackIcon fontSize="large" className="header__icon" />
        </IconButton>
      ) : (
        <IconButton>
          <PersonIcon className="header__icon" fontSize="large" />
        </IconButton>
      )}

      <Link to="/">
        <img
          className="header__logo"
          src="https://logodix.com/logo/15275.png"
          alt="tinder logo"
        />
      </Link>
      <Link to="/chat">
        <IconButton>
          <QuestionAnswerIcon className="header__icon" fontSize="large" />
        </IconButton>
      </Link>
    </div>
  );
}

export default Header;
