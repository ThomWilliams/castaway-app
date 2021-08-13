import React from "react";
import SearchBar from "../components/SearchByWord";

export default function Search() {
  return (
    <div>
      <section>
        <div className="title">
          <h1>Search</h1>
        </div>
        <div>
          <SearchBar />
        </div>
      </section>
    </div>
  );
}
