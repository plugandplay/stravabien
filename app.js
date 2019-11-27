const strava = require('strava-v3');

// Follow the strava-v3 documentation here:
// https://www.npmjs.com/package/strava-v3

strava.config({
  access_token: 'Your apps access token (Required for Quickstart)',
  client_id: 'Your apps Client ID (Required for oauth)',
  client_secret: 'Your apps Client Secret (Required for oauth)',
  redirect_uri: 'Your apps Authorization Redirection URI (Required for oauth)'
});

strava.athletes.get({ id: 12345 }, function(err, payload, limits) {
  //do something with your payload, track rate limits
});
