const Humanoid = require("humanoid-js");
const config = require("./config");

let humanoid = new Humanoid();

humanoid.get(config.settings.url)
    .then(res => {
        let body = res.body;
    	if (body.includes(config.settings.text)){
    	    console.log("success - expected text found");
        } else {
        	console.log("failure - expected text not found")
        }
    })
    .catch(err => {
    	console.error(err)
    })
