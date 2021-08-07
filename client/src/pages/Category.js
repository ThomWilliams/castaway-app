import React from "react";
import Category from "../components/OneCategory";

export default function Categories() { 
  return (
    <div>
      <section>
        <div className="boxes-section">
          <Category displayAll = {true} />
        </div>
      </section>
    </div>
  );
}
