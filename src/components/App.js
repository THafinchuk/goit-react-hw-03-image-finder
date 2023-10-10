import React, { PureComponent } from 'react';
import './styles.css'
import { fetchImages } from 'api';
import Searchbar from './Searchbar/SearchBar';
import ImageGallery from './ImageGallery/ImageGallery';
import Loader from './Loader/Loader';


export default class App extends PureComponent {
  state = {
    query: '',
    loading: false,
  };

  handleQueryOnSubmit = query => {
    this.setState({ query, loading: true }); 
    fetchImages(query)
      .then(data => {
        this.setState({ images: data }); 
      })
      .catch(error => {
        console.error('Error fetching images:', error);
        this.setState({ images: [] }); 
      })
      .finally(() => {
        this.setState({ loading: false }); 
      });
  };

  render() {
    const { query, loading } = this.state;
    return (
      <div className="App">
        <Searchbar handleQueryOnSubmit={this.handleQueryOnSubmit} />
        {loading ? ( 
          <Loader /> 
        ) : (
          <ImageGallery searchQuery={query} /> 
        )}
      </div>
    );
  }
}
