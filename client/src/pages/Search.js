import React from "react";
import SearchBar from "../components/SearchByWord"
import SearchFilters from "../components/SearchByFilters"

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

      <section>
        <div className="title">
          <h1>Find a Podcast</h1>
        </div>
        <div className="form">
          <SearchFilters />
        </div>
      </section>
    </div>
  );
}
