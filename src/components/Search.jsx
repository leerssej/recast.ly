var Search = (props) => (
  <div className="search-bar form-inline">
    <input className="form-control" type="text" onChange={(e) => { props.searchMethod($('.form-control').val(), e); } }/>
    <button className="btn hidden-sm-down" onClick={() => { props.searchMethod($('.form-control').val(), 13); } }>
      <span className="glyphicon glyphicon-search"></span>
    </button>
  </div> 
);

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.Search = Search;
