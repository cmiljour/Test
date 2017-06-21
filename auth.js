var token;

OAuth.initialize('fy7hrBW50VLQie5JdFTyjjeLjrw');
OAuth.popup('spotify').done(function(result) {
    console.log(result);
    token = result;

    // do some stuff with result
})
console.log(token);
var spotifyApi = new SpotifyWebApi();
spotifyApi.setAccessToken('<BQBkEMVJFFRepWhbN-EDyhMymUNp4vbPudE1BJMaPq0TGG9orFo2S0BT3LQymLeCp4-xL-_YicMbHuvX929ATS88-EGoq9ZIrZCb5hcJMzjmzn7a-WduhKWbhGwNrA90w0zS2lorm939MnqF5QcoNdYFwK_QBnfflppTNYLo2wVbImTSqyLpMzcvIxNMMWmJW7IG-MmvrpPs7-qJ3FQSMfO3A8rl11FbHLFojm4iqzKKfOwHJO-7orzr_rQdmooNMmoUAZ5NH85_ucTxdE2Qsy1hd19j9Gy3>');

spotifyApi.getUserPlaylists()  // note that we don't pass a user id
  .then(function(data) {
    console.log('User playlists', data);
  }, function(err) {
    console.error(err);
  });
