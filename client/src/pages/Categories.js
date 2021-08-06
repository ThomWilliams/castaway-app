import React from "react";
import CategoryList from "../components/CategoryList";

export default function Categories() { 
  return (
    <div>
      <section>
        <div className="title">
          <h1>Categories</h1>
        </div>
        <div className="boxes-section">
          <CategoryList displayAll = {true} />
        </div>
      </section>
    </div>
  );
}
