import React, { useEffect, useState } from "react";
import eventManager from "../../utils/eventManager";

const RepoList = () => {
  const [repos, setRepos] = useState([]);
  useEffect(() => {
    eventManager.addEvent("GET_REPOS", (payload) => {
      setRepos(payload);
    });
  }, []);
  return repos.map((repo) => (
    <div style={{ padding: 0, margin: 0, border: "none" }}>
      <a key={repo.html_url} href={repo.html_url} target="_blank">
        {repo.html_url}
      </a>
    </div>
  ));
};

export default RepoList;
