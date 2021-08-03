import React from "react";
import { Link } from "react-router-dom";

import { ReactComponent as Logo } from "../../assets/logo.svg";

export default function Header() {
  return (
    <header>
      <div className="logo">
      <Link to="/"><Logo className="icon" /></Link>
      </div>
    </header>
  );
}
