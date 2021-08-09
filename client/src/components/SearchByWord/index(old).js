// import React, { useState, useEffect } from "react";
// import { useMutation } from "@apollo/client";
// import Auth from "../../utils/auth";
// // import { searchPodcasts } from "../../utils/api";
// // import { savePodcastIds, getSavedPodcastIds } from "../utils/localStorage";
// import { Client } from 'podcast-api';

// const SearchBar = () => {
//   // create state for holding returned google api data
//   const [searchedPodcasts, setSearchedPodcasts] = useState([]);
//   // create state for holding our search field data
//   const [searchInput, setSearchInput] = useState("");

//   const searchPodcasts = Client({ apiKey: 'ffd40c4878f547648e7bf10c4351a68f' });
//   searchPodcasts.search({
//     q: `${searchInput}`,
//   }).then((response) => {
//     // Get response json data here
//     console.log(response.data);
//   }).catch((error) => {
//     console.log(error)
//   });

//   // create state to hold saved PodcastId values
//   // const [savedPodcastIds, setSavedPodcastIds] = useState(getSavedPodcastIds());

//   // const [podcastToSave, { error }] = useMutation(SAVE_PODCAST);

//   // set up useEffect hook to save `savedPodcastIds` list to localStorage on component unmount
//   // learn more here: https://reactjs.org/docs/hooks-effect.html#effects-with-cleanup
//   // useEffect(() => {
//   //   return () => savePodcastIds(savedPodcastIds);
//   // });

//   // create method to search for Podcasts and set state on form submit
//   const handleFormSubmit = async (event) => {
//     event.preventDefault();

//     if (!searchInput) {
//       return false;
//     }

//     try {
//       const response = await searchPodcasts(searchInput);

//       if (!response.ok) {
//         throw new Error("something went wrong!");
//       }

//       const { items } = await response.json();

//       const podcastData = items.map((podcast) => ({
//         podcastId: podcast.id,
//         // authors: book.volumeInfo.authors || ["No author to display"],
//         // title: book.volumeInfo.title,
//         // description: book.volumeInfo.description,
//         // image: book.volumeInfo.imageLinks?.thumbnail || "",
//       }));

//       setSearchedPodcasts(podcastData);
//       setSearchInput("");
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   // // create function to handle saving a podcast to our database
//   // const handleSavePodcast = async (podcastId) => {
//   //   // find the podcast in `searchedPodcasts` state by the matching id
//   //   const podcastToSave = searchedPodcasts.find(
//   //     (podcast) => podcast.podcastId === podcastId
//   //   );

//   //   // get token
//   //   const token = Auth.loggedIn() ? Auth.getToken() : null;

//   //   if (!token) {
//   //     return false;
//   //   }

//   //   try {
//   //     // Podcast To Save for Apollo
//   //     const { data } = await podcastToSave({
//   //       variables: { podcastData: { ...podcastToSave } },
//   //     });

//   //     // if podcast successfully saves to user's account, save podcast id to state
//   //     setSavedPodcastIds([...savedPodcastIds, podcastToSave.podcastId]);
//   //   } catch (err) {
//   //     console.error(err);
//   //   }
//   // };

//   return (
//     <>
//       <section className="text-light bg-dark">
//         <div>
//           <h1>Podcast Results</h1>
//           <form onSubmit={handleFormSubmit}>
//             <div>
//               <div xs={12} md={8}>
//                 <input
//                   name="searchInput"
//                   value={searchInput}
//                   onChange={(e) => setSearchInput(e.target.value)}
//                   type="text"
//                   size="lg"
//                   placeholder="Search for a podcast"
//                 />
//               </div>
//               <div xs={12} md={4}>
//                 <button type="submit" variant="success" size="lg">
//                   Submit Search
//                 </button>
//               </div>
//             </div>
//           </form>
//         </div>
//       </section>

//       <div>
//         <h2>
//           {searchedPodcasts.length
//             ? `Viewing ${searchedPodcasts.length} results:`
//             : "Search for a podcast"}
//         </h2>

//         <div>
//           {searchedPodcasts.map((podcast) => {
//             return (
//               <div key={podcast.podcastId} border="dark">
//                 {podcast.image ? (
//                   <image
//                     src={podcast.image}
//                     alt={`The cover for ${podcast.title}`}
//                     variant="top"
//                   />
//                 ) : null}
//                 <div>
//                   <title>{podcast.title}</title>
//                   <p className="small">publisher: {podcast.publisher}</p>
//                   <text>{podcast.description}</text>

//                   {/* {Auth.loggedIn() && (
//                     <button
//                       disabled={savedPodcastIds?.some(
//                         (savedPodcastId) => savedPodcastId === podcast.podcastId
//                       )}
//                       className="btn-block btn-info"
//                       onClick={() => handleSavePodcast(podcast.podcastId)}
//                     >
//                       {savedPodcastIds?.some(
//                         (savedPodcastId) => savedPodcastId === podcast.podcastId
//                       )
//                         ? "This Podcast has already been saved!"
//                         : "Save this Podcast!"}
//                     </button>
//                   )}
//                   {error && (
//                     <div className="col-12 my-3 bg-danger text-white p-3">
//                       {error.message}
//                     </div>
//                   )} */}
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </>
//   );
// };
// // };

// export default SearchBar;

import React, { useState } from "react";
import { Client } from "../../PodcastApiClient";

const SearchBar = ({ setSearchData, setWrapperHeader }) => {
  const [searchKeyword, setSearchKeyword] = useState("");
  const [searchKeywordError, setSearchKeywordError] = useState("");

  const handleSubmit = async (event) => {
    if (event) event.preventDefault();
    let results = [];
    if (searchKeyword !== "") {
      try {
        results = await Client(searchKeyword);
      } catch (e) {
        setSearchKeywordError(e);
      } finally {
        if (results.length > 0) {
          setWrapperHeader(searchKeyword);
          setSearchData(results);
        } else {
          setSearchKeywordError("No podcasts found...:(");
        }
      }
    } else {
      setSearchKeywordError("Please enter a keyword.");
    }
  };

  const onBlurHandler = () => {
    handleSubmit();
  };

  const BarStyling = { background: "white", border: "none", width: "75vh" };

  return (
    <div className="search-container">
      <form className="form" onSubmit={handleSubmit}>
        <input
          style={BarStyling}
          key="random1"
          // value={keyword}
          error={searchKeywordError !== "" ? true : false}
          helperText={searchKeywordError}
          placeholder={"Search by word"}
          onBlur={() => onBlurHandler()}
          onChange={(text) => setSearchKeyword(text.target.value.trim())}
        />
      </form>
      <div>
        {searchData.length > 0 ? (
          <React.Fragment>
            <Podcast podcasts={searchData} />
            <footer className="wrapper_footer">
              <img
                src={ListenNotesLogo}
                alt="Logo for LISTEN NOTES API that says Powered by LISTEN NOTES"
                height="100%"
                width="100%"
              />
            </footer>
          </React.Fragment>
        ) : (
          <Search
            setSearchData={setSearchData}
            setWrapperHeader={setWrapperHeader}
          />
        )}
      </div>
    </div>
  );
};

export default SearchBar;
