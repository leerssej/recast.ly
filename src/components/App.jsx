class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      query: '',
      videos: [],
      currentVideo: window.exampleVideoData[0],
    };
  }

  loadNewVideos(data) {
    this.setState({
      videos: data.items,
      currentVideo: data.items[0],
    });
  }  

  select(video) {
    this.setState({
      currentVideo: video,
    });
  }
 
  search(newQuery, e) {
    this.setState({
      query: newQuery,
    });
    var options = {
      part: 'snippet',
      type: 'video',
      q: newQuery,
      maxResults: 5,
      key: window.YOUTUBE_API_KEY,
    };

    if (e.keyCode === 13) {
      $('.form-control').val('');
    }
    searchYouTube(options, this.loadNewVideos.bind(this));
  }

  componentDidMount() {
    var options = {
      part: 'snippet',
      type: 'video',
      q: 'kittens',
      maxResults: 5,
      key: window.YOUTUBE_API_KEY,
    };
    searchYouTube(options, this.loadNewVideos.bind(this));
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search searchMethod={this.search.bind(this)}/>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video={this.state.currentVideo}/>
          </div>
          <div className="col-md-5">
            <VideoList videos={this.state.videos} selectMethod={this.select.bind(this)}/>
          </div>
        </div>
      </div>
    );
  } // closes render method 
} // closes App class

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
