var token;

OAuth.initialize('fy7hrBW50VLQie5JdFTyjjeLjrw');
OAuth.popup('spotify').done(function(result) {
	
    token = result;


    // do some stuff with result
})
console.log(token);
var spotifyApi = new SpotifyWebApi();
spotifyApi.setAccessToken(token.access_token);

spotifyApi.getUserPlaylists()  // note that we don't pass a user id
  .then(function(data) {
    console.log('User playlists', data);
  }, function(err) {
    console.error(err);
  });
