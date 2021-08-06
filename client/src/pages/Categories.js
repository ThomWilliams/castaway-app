import React from "react";
//import a function which gets all the categoeies from the api
export default function Categories() {

  const [allCategories, setAllCategories] = useState([]);

// const categories = function call to the api

// use set all categories and that would set those in state

const handleCategorySelection = (categoryId) => {
  // second function from the api.js which will get podcasts using the api id
}

  return (
    <div>
      <section>
        <div className="title">
          <h1>Categories</h1>
        </div>
        <div className="boxes-section">
          <div className="box-section">Sports</div>
          <button onClick={handleCategorySelection(category[i].id)}>Classical</button>
          <div className="box-section">Comedy</div>
          <div className="box-section">Culture</div>
          <div className="box-section">News</div>
          <div className="box-section">Music</div>
          <div className="box-section">Games</div>
          <div className="box-section">Sports</div>
          <div className="box-section">Comedy</div>
          <div className="box-section">Culture</div>
          <div className="box-section">News</div>
          <div className="box-section">Music</div>
          <div className="box-section">Games</div>
        </div>
      </section>
    </div>
  );
}