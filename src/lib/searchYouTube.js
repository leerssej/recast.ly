var searchYouTube = ({key, query, max}, callback) => {
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search', 
    contentType: 'application/json',
    data: {
      'key': key,
      'q': query,
      'maxResults': max,
      'part': 'snippet',
    },
    success: function(data) {
      callback(data);
    },
  });
};

window.searchYouTube = searchYouTube;
