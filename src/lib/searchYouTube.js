var searchYouTube = (options, callback) => {
  // // Use jQuery to send a GET request to the search endpoint. This is the only time you should use jQuery in this sprint
  // $.ajax({
  // // Accept a callback function that is invoked with the videos array that is returned from hitting the endpoint
  //   part: 'snippet',
  // // Accept an options object with the following properties:
  //   type: 'video',
  // // query - the string to search for
  //   q: query,
  // // max - the maximum number of videos to get, which should default to 5
  //   maxResults: 5,
  // // key - an authorized YouTube Browser API key
  //   key: YOUTUBE_API_KEY,
  //   success: callback
  //   })
  // // Only GET embeddable videos
  // $.(ajax) {
  //   options: options,
  //   success: callback
  // }
};

// fetch(`https://www.youtube.com/embed/${video.id.videoId}`)
//       .then(res => res.json())
//       .then(
//         (result) => {
//           this.setState({
//             isLoaded: true,
//             items: result.items
//           });
//         },
//         // Note: it's important to handle errors here
//         // instead of a catch() block so that we don't swallow
//         // exceptions from actual bugs in components.
//         (error) => {
//           this.setState({
//             isLoaded: true,
//             error
//           });
//         }
//       )

window.searchYouTube = searchYouTube;


// off of https://developers.google.com/youtube/v3/docs/search/list#request-body

// buildApiRequest('GET',
//                 '/youtube/v3/search',
//                 {'maxResults': '5',
//                  'part': 'snippet',
//                  'q': 'query',
//                  'type': 'video'});

