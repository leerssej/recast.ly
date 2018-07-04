class Search extends React.Component {
  constructor ({search}) {
    super({search});

    this.state = {
      value: '',
    };

  }
  
  setQueryText(queryText) {
    this.props.search(queryText);
    this.setState({
      value: queryText,
    });
    
    console.log('QueryTextSet: ', this);
  }

  
  render() {
    return (
      <div className="search-bar form-inline">
        <input 
          className="form-control"
          type="text" 
        />
        <button className="btn hidden-sm-down"
          onClick={() => this.setQueryText($('.form-control').val())}
        >
          <span className="glyphicon glyphicon-search"></span>
        </button>
      </div> 
    );
  }
}
// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.Search = Search;
