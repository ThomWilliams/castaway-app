import React from "react";
import CategoryList from "../components/CategoryList";
import { Link } from 'react-router-dom';

export default function Categories() { 
  return (
    <div>
      <section>
        <div className="title">
          <h1>Categories</h1>
          <Link to="/">
          <h2>← Home</h2>
        </Link>
        </div>
        <div className="boxes-section-categories">
          <CategoryList displayAll = {true} />
        </div>
      </section>
    </div>
  );
}
