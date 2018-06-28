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

    // this.loadNewVideos.bind(this);

    this.state = {
      query: '',
      videos: window.exampleVideoData,
      currentVideo: window.exampleVideoData[0],
      options: {
        part: 'snippet',
        type: 'video',
        q: 'cats',
        maxResults: 5,
        key: window.YOUTUBE_API_KEY,
      },
    }; // closes state

  } // closes constructor

  loadNewVideos(data) {
    console.log(this);
    this.setState({
      videos: data.items,
    });
  }  

  select(video) {
    this.setState({
      currentVideo: video,
    });
  }
 
  search(newQuery) {
    this.setState({
      query: newQuery,
    });
    $('.form-control').val('');
    searchYouTube(this.state.options, this.loadNewVideos.bind(this));
  }

  // componentDidMount(this.state.options) {
  //   searchYouTube(options);
  // }


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
