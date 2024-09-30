import React, {useState, useEffect, lazy, Suspense} from "react";
import {openSource} from "../../portfolio";
import Loading from "../loading/Loading";
import axios from 'axios'; 

const renderLoader = () => <Loading />;
const GithubProfileCard = lazy(() =>
  import("../../components/githubProfileCard/GithubProfileCard")
);
export default function Profile() {
  if (
    openSource.display &&
    openSource.showGithubProfile === "true" 
  ) {
    return (
      <Suspense fallback={renderLoader()}>
        <GithubProfileCard />
      </Suspense>
    );
  } else {
    return <GithubProfileCard />;
  }
}
