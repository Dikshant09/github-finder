import React, { useContext } from "react";
import GithubContext from "../../../contex/github/GithubContext";
import RepoItem from "./RepoItem";

const RepoList = () => {
  const { repos } = useContext(GithubContext);

  return (
    <div className="rounded-lg shadow-lg card bg-base-100">
      <div className="card-body">
        <h2 className="text-3xl my-4 font-bold card-title">Latest Repositories</h2>
      </div>
      {
        repos.map((repo) => (
            <RepoItem key={repo.id} repo={repo}/>
        ))
      }
    </div>
  );
};

export default RepoList;
