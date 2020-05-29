import axios from "axios";

window.fetchRepos = () => {
    axios('https://api.github.com/search/repositories?q=language:javascript')
        .then(({ data }) => {
            console.log(data.items);
        })
        .catch(error => {
            console.log(error);
        })
}

const VanillaComponent = "<h1>This is a vanilla app</h1><button onClick='window.fetchRepos()'>FETCH GITHUB REPOS</button>";

export default VanillaComponent;
