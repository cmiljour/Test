

OAuth.initialize('fy7hrBW50VLQie5JdFTyjjeLjrw');
OAuth.popup('spotify').done(function(result) {
    console.log(result)
    // do some stuff with result
})

var spotifyApi = new SpotifyWebApi();
spotifyApi.setAccessToken('<BQDFPdekt3csmqzIUhOFrfHKiVDiZ7CrY173e89SVaFOAPBEASSl7n_otDK_yotZglTPEcpprId0S87l9bRAKD6TL1wUM8vEfcJUkZ6TGCV5oGc8x-ZN45A2ZS4ZAdDCOluUPd26mAKv>');

spotifyApi.searchTracks('Love')
  .then(function(data) {
    console.log('Search by "Love"', data);
  }, function(err) {
    console.error(err);
  });
