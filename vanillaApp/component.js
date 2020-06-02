import axios from "axios";
import eventManager from "../utils/eventManager";

window.fetchRepos = () => {
  const searchTerm =
    document.getElementById("githubSearchLanguage").value || "javascript";
  axios(`https://api.github.com/search/repositories?q=language:${searchTerm}`)
    .then(({ data }) => {
      eventManager.triggerEvent("UPDATE_REACT_REPOS", data.items);
    })
    .catch((error) => {
      console.log(error);
    });
};

const VanillaComponent = `
  <h1>This is a vanilla app</h1>
  <input id="githubSearchLanguage"/>
  <button onClick='window.fetchRepos()' style="background: white; border: 1px solid black; color: black; border-radius: 2px; height: 21px;">FETCH GITHUB REPOS</button>
`;

export default VanillaComponent;
