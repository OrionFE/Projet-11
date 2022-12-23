import React from "react";
import { useNavigate } from "react-router-dom";
import "./Error404.css"

const Error404 = () => {

  const navigate = useNavigate()

  return (
    <div className="error">
      <div className="error-message">
        <h2 className="title">404</h2>
        <p>Oups! La page que vous demandez n'existe pas.</p>
      </div>

    <p className="back" onClick={() => navigate('./')}>Retourner sur la page d’accueil</p>
    </div>
  );
};

export default Error404;
