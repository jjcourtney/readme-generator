const fetchUrl = require("fetch").fetchUrl;

fetchUrl("https://api.github.com/repos/jjcourtney/portfolio", (error, meta, body) => {
    obj = JSON.parse(body)
    const {name, description, url,  language, deployments_url, license} = obj;
    console.log(name);
    console.log(description);
    console.log(url);
    console.log(deployments_url);
    console.log(language);
    console.log(license);

})


// https://api.github.com/licenses