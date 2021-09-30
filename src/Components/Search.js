import React from "react";
import "./Search.css";
import axios from "axios";

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      query: "",
      results: {},
      loading: false,
      message: "",
    };
    this.cancel = "";
  }

  fetchSearchResults = (query) => {
    const searchURL = `https://makeup-api.herokuapp.com/api/v1/products.json?brand=${query}`;

    if (this.cancel) {
      this.cancel.cancel();
    }
    this.cancel = axios.CancelToken.source();

    axios
      .get(searchURL, {
        cancelToken: this.cancel.token,
      })

      .then((res) => {
        // const total = res.data.total;
        // const totalPagesCount = this.getPageCount( total, 20 );
        const resultNotFoundMsg = !res.data.length
          ? "There are no more search results. Please try a new search"
          : "";

        this.setState({
          results: res.data,
          message: resultNotFoundMsg,
        //   totalResults: total,
          loading: false,
        });
      })

      .catch((error) => {
        if (axios.isCancel(error) || error) {
          this.setState({
            loading: false,
            message: "Failed to fetch the data. Please check network",
          });
        }
      });
  };

  handleOnInputChange = (event) => {
    const query = event.target.value;
    this.setState({ query: query, loading: true, message: "" }, () => {
      this.fetchSearchResults(query);
    });
  };

  renderSearchResults = () => {
const { results } = this.state;
if ( Object.keys( results ).length && results.length ) {
    return (
        <div className="results-container">
            { results.map( result => {
                return (
                    <a key={ result.id } href={ result.product_link } className="result-item">
                        <h6 className="product-name">{result.name}</h6>
                        <div className="image-wrapper">
                            <img className="image" src={ result.image_link } alt={`${result.name} image`}/>
                        </div>
                    </a>
                )
            } ) }

        </div>

)
}
  };

  render() {
    const { query } = this.state;
    // console.warn(this.state)

    return (
      <div className="container">
        <h2 className="heading">Makeup Connect</h2>
        <label className="search-label" htmlFor="search-input">
          <input
            type="text"
            name="query"
            value={query}
            id="search-input"
            placeholder="search..."
            onChange={this.handleOnInputChange}
          />
          <i class="fas fa-search search-icon"></i>
        </label>
        { this.renderSearchResults() }

      </div>
    );
  }
}


export default Search;

