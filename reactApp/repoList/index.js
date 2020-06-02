import React, { useEffect, useState } from "react";
import eventManager from "../../utils/eventManager";

const RepoList = () => {
  const [repos, setRepos] = useState([]);
  useEffect(() => {
    eventManager.addEvent("UPDATE_REACT_REPOS", (payload) => {
      setRepos(payload);
    });
  }, []);
  return repos.map((repo) => (
    <div key={repo.html_url} style={{ padding: 0, margin: 0, border: "none" }}>
      <a href={repo.html_url} target="_blank">
        {repo.html_url}
      </a>
    </div>
  ));
};

export default RepoList;
