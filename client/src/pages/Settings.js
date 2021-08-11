// import React from "react";
// import { useQuery } from "@apollo/client";
// import { ReactComponent as DonateIcon } from "../../assets/donate.svg";

// import { QUERY_USER } from "../utils/queries";

// const Profile = () => {
//   const { data } = useQuery(QUERY_USER);
//   let user;

//   if (data) {
//     user = data.user;
//   }

//   return (
//     <div>
//         {data.user}
//       <span>
//         <DonateIcon className="icon" />
//       </span>
//       <p>Donate</p>
//       <h2>{user.name}</h2>
//     </div>
//   );
// };

// export default Profile;
