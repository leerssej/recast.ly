class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: exampleVideoData,
      currentVideo: exampleVideoData[0],
    };
  }

  setCurrentVideo(videoSelected) {
    console.log(videoSelected);
    this.setState({
      currentVideo: videoSelected,
    });
  }

  search(queryText) {
    console.log(queryText);
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search search={(queryText) => this.search(queryText)}/>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video={this.state.currentVideo} />
          </div>
          <div className="col-md-5">
            <VideoList 
              videos={this.state.videos}
              setCurrentVideo={(videoSelected) => this.setCurrentVideo(videoSelected)}
            />
          </div>
        </div>
      </div>
    );
  } // closes render
} // closes app
// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
