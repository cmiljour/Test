

OAuth.initialize('fy7hrBW50VLQie5JdFTyjjeLjrw');
OAuth.popup('spotify').done(function(result) {
    console.log(result);
});


// var spotify = OAuth.create('spotify');
// var spotifyApi = new SpotifyWebApi();
// spotifyApi.setAccessToken('BQCZ8XCeRbWnQVM750AT-us_sRd924BGYVXzN-oKS5PWtc0Odn…n41IBInNOUfnl8SWMHBPG6vX_uqb27cu7M-Rmf9KWaTg9jM8g');

// spotifyApi.getUserPlaylists()  // note that we don't pass a user id
//   .then(function(data) {
//     console.log('User playlists', data);
//   }, function(err) {
//     console.error(err);
//   });
