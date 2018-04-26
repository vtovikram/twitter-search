const express = require('express');
var request = require("request");
var twitter_api = 'https://api.twitter.com/1.1/search/tweets.json';
var bearer_token = 'AAAAAAAAAAAAAAAAAAAAAMcV5wAAAAAA11QbosHCb9ShFbV1b6UVw26Ue8k%3D4mnY34jm98Zk0R8T4WFRZPZacFRUonjUZ2mCsbwVVJJKmNZDRA'; // the token you got in the last step


const app = express();
const port = process.env.PORT || 5000;

var options = {
    method: 'GET',
    json: true,
    headers: {
        "Authorization": "Bearer " + bearer_token
    }
};

app.get('/api/hello', (req, res) => {
  options.url = `${twitter_api}?q=${req.query.test}&result_type=popular&tweet_mode=extended`
  request(options, function(error, response, body) {
    debugger;
    res.send({ express: body });
    });

});

app.listen(port, () => console.log(`Listening on port ${port}`));
