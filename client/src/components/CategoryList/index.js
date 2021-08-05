import React from "react";

export default function CategoryList({ items }) {
  return (
          items.map(item => (<div className="box-section">{item}</div>))                        
  );
}