var searchYouTube = (options, callback) => {
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    type: 'GET',
    contentType: 'application/json',
    data: options,
    success: function(data) {
      callback(data);
    }
  });
};

window.searchYouTube = searchYouTube;
