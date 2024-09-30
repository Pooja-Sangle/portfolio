import React, {useState, useEffect, lazy, Suspense} from "react";
import {openSource} from "../../portfolio";
import Contact from "../contact/Contact";
import Loading from "../loading/Loading";
import axios from 'axios'; 

const renderLoader = () => <Loading />;
const GithubProfileCard = lazy(() =>
  import("../../components/githubProfileCard/GithubProfileCard")
);
export default function Profile() {
  const [prof, setrepo] = useState([]);
  function setProfileFunction(array) {
    setrepo(array);
  }

  useEffect(() => {
    if (openSource.showGithubProfile === "true") {
      const getProfileData = async () => {
        try {
          const response = await axios.get("/profile.json");
          
          console.log("Fetched data:", response.data); // Log the response to see its structure
  
          // Safely access pinnedItems with optional chaining
          const pinnedItems = response.data.data.user.pinnedItems.edges; // Access edges directly
  
          // Check if pinnedItems is defined and is an array
          if (Array.isArray(pinnedItems)) {
            setProfileFunction(pinnedItems); // Set the fetched data to state
          } else {
            console.warn("Pinned items are not available or undefined.");
            setProfileFunction("No pinned items available");
          }
        } catch (error) {
          console.error(
            `${error} (because of this error GitHub contact section could not be displayed. Contact section has reverted to default)`
          );
          setProfileFunction("Error"); // Handle the error gracefully
          openSource.showGithubProfile = "false"; // Update the visibility flag
        }
      };
  
      getProfileData(); // Call the function to fetch data
    }
  }, []);
  if (
    openSource.display &&
    openSource.showGithubProfile === "true" &&
    !(typeof prof === "string" || prof instanceof String)
  ) {
    return (
      <Suspense fallback={renderLoader()}>
        <GithubProfileCard prof={prof} key={prof.id} />
      </Suspense>
    );
  } else {
    return <Contact />;
  }
}
