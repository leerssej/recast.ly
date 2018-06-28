// var App = () => (
//   <div>
//     <nav className="navbar">
//       <div className="col-md-6 offset-md-3">
//         <Search/>
//       </div>
//     </nav>
//     <div className="row">
//       <div className="col-md-7">
//         <VideoPlayer currentVideo={exampleVideoData[0]}/>
//       </div>
//       <div className="col-md-5">
//         <VideoList videos={exampleVideoData}/>
//       </div>
//     </div>
//   </div>
// );

// // In the ES6 spec, files are "modules" and do not share a top-level scope
// // `var` declarations will only exist globally where explicitly defined
// window.App = App;


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentVideo: exampleVideoData[0],
    }; // closes state

  } // closes constructor

  select(video) {
    this.setState({
      currentVideo: video
    });
  }
 
  componentDidMount() {
    var options = {
      part: 'snippet',
      type: 'video',
      q: query,
      maxResults: 5,
      key: YOUTUBE_API_KEY,
    };

    // var callback = function() {
    // }

    searchYouTube(options, callback);

  }


  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search/>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video={this.state.currentVideo}/>
          </div>
          <div className="col-md-5">
            <VideoList videos={exampleVideoData} selectMethod={this.select.bind(this)}/>
          </div>
        </div>
      </div>
    );
  } // closes render method 
} // closes App class

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
