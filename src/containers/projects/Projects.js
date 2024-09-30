import React, {useState, useEffect, useContext, Suspense, lazy} from "react";
import "./Project.scss";
import Button from "../../components/button/Button";
import {openSource, socialMediaLinks} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";
import Loading from "../../containers/loading/Loading";
import axios from 'axios'; // Make sure to import axios


export default function Projects() {
  const GithubRepoCard = lazy(() =>
    import("../../components/githubRepoCard/GithubRepoCard")
  );
  const FailedLoading = () => null;
  const renderLoader = () => <Loading />;
  const [repo, setrepo] = useState([]);
  // todo: remove useContex because is not supported
  const {isDark} = useContext(StyleContext);

  useEffect(() => {
    console.log("debug");
    console.log(openSource.showGithubProfile);
  
    const getRepoData = async () => {
      try {
        const response = await axios.get("/profile.json"); // Fetch the JSON data using axios
        console.log("Data fetched with axios:", response.data.data.user.pinnedItems.edges); // Log the fetched data
        setrepoFunction(response.data.data.user.pinnedItems.edges); // Set the fetched data to state
      } catch (error) {
        console.error(
          `${error} (because of this error, nothing is shown in place of Projects section. Also check if Projects section has been configured)`
        );
        setrepoFunction("Error"); // Handle the error gracefully
      }
    };
  
    getRepoData(); // Call the function to fetch data
  }, []);

  function setrepoFunction(array) {
    setrepo(array);
  }
  if (
    !(typeof repo === "string" || repo instanceof String) &&
    openSource.display
  ) {
    return (
      <Suspense fallback={renderLoader()}>
        <div className="main" id="opensource">
          <h1 className="project-title">Open Source Projects</h1>
          <div className="repo-cards-div-main">
            {repo.map((v, i) => {
              if (!v) {
                console.error(
                  `Github Object for repository number : ${i} is undefined`
                );
              }
              return (
                <GithubRepoCard repo={v} key={v.node.id} isDark={isDark} />
              );
            })}
          </div>
          <Button
            text={"More Projects"}
            className="project-button"
            href={socialMediaLinks.github}
            newTab={true}
          />
        </div>
      </Suspense>
    );
  } else {
    return <FailedLoading />;
  }
}
