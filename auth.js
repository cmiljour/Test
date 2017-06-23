

OAuth.initialize('fy7hrBW50VLQie5JdFTyjjeLjrw');
OAuth.popup('spotify').done(function(result) {
    console.log(result);
});


// var spotify = OAuth.create('spotify');
// var spotifyApi = new SpotifyWebApi();
// spotifyApi.setAccessToken('BQBXnIYrCI1BgeqZon1SgMex-qjsLLXKu0PrCNRjQdhNHY3zlE…Csb2jxEC_7iQb-IuZo8NvbjRsC5wzG2kvBmQL_gZLEmz6WDpG');

// spotifyApi.getUserPlaylists('jmperezperez')
//   .then(function(data) {
//     console.log('User playlists', data);
//   }, function(err) {
//     console.error(err);
//   });
