// import React from "react";
// import Select from "react-select";
// import CategoryList from "../CategoryList";
// import { Client } from "podcast-api";


// const filterPodcasts = Client({ apiKey: "ffd40c4878f547648e7bf10c4351a68f" });

// const searchPodcasts = Client({ apiKey: "ffd40c4878f547648e7bf10c4351a68f" });
//   searchPodcasts
//     .search({
//       q: `${searchInput}`,
//     })
//     .then((response) => {
//       // Get response json data here
//       console.log(response.data);
//     })
//     .catch((error) => {
//       console.log(error);
//     });

// const customStyles = {
//   option: (provided, state) => ({
//     ...provided,
//     borderBottom: "1px dotted black",
//     color: state.isSelected ? "black" : "black",
//   }),
//   singleValue: (provided, state) => {
//     const opacity = state.isDisabled ? 0.5 : 1;
//     const transition = "opacity 300ms";

//     return { ...provided, opacity, transition };
//   },
// };

// const genreOptions = [
//   { value: "sports", label: "Sports" },
//   { value: "comedy", label: "Comedy" },
//   { value: "culture", label: "Culture" },
// ];

// const languageOptions = [
//   { value: "english", label: "English" },
//   { value: "spanish", label: "Spanish" },
//   { value: "portuguese", label: "Portuguese" },
// ];

// const countryOptions = [
//   { value: "uk", label: "UK" },
//   { value: "usa", label: "United States" },
//   { value: "spain", label: "Spain" },
// ];

// const CustomSelectProps = (props) => {
//   return (
//     <form>
//       <label className="label">Select a Genre:</label>
//       <Select
//         className="selector"
//         styles={customStyles}
//         {...props}
//         isSearchable
//         options={genreOptions}
//       />

//       <label className="label">Select a Language:</label>
//       <Select
//         className="selector"
//         styles={customStyles}
//         {...props}
//         isSearchable
//         options={languageOptions}
//       />

//       <label className="label">Select a Country:</label>
//       <Select
//         className="selector"
//         styles={customStyles}
//         {...props}
//         isSearchable
//         options={countryOptions}
//       />
//       <button type="submit">Find Podcasts</button>
//     </form>
//   );
// };

// export default CustomSelectProps;
