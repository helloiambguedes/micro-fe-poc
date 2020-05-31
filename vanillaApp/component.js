import axios from "axios";
import eventManager from "../utils/eventManager";

window.fetchRepos = () => {
  axios("https://api.github.com/search/repositories?q=language:javascript")
    .then(({ data }) => {
      eventManager.triggerEvent("GET_REPOS", data.items);
    })
    .catch((error) => {
      console.log(error);
    });
};

const VanillaComponent =
  "<h1>This is a vanilla app</h1><button onClick='window.fetchRepos()'>FETCH GITHUB REPOS</button>";

export default VanillaComponent;
