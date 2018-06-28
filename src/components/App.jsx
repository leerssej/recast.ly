var App = () => (
  <div>
    <nav className="navbar">
      <div className="col-md-6 offset-md-3">
        <Search/>
      </div>
    </nav>
    <div className="row">
      <div className="col-md-7">
        <VideoPlayer currentVideo={exampleVideoData}/>
      </div>
      <div className="col-md-5">
        <VideoList videos={exampleVideoData}/>
      </div>
    </div>
  </div>
);

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;

// class App extends ReactComponent {
//   constructor(props) {
//     super(props);
//   } // closes constructor
 
//   render() {
//     return (
//       <div>
//         <nav className="navbar">
//           <div className="col-md-6 offset-md-3">
//             <Search/>
//           </div>
//         </nav>
//         <div className="row">
//           <div className="col-md-7">
//             <VideoPlayer/>
//           </div>
//           <div className="col-md-5">
//             <VideoList videos={exampleVideoData}/>
//           </div>
//         </div>
//       </div>
//     );
//   } // closes render method 

// } // closes App class