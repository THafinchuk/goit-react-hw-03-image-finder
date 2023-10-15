import React, { Component } from 'react';

import {
  Header,
  SearchForm,
  SearchFormBtn,
  SearchFormBtnLabel,
  SearchFormInput,
} from './SearchStyled';

export class Searchbar extends Component {
  state = {
    query: '',
  };

  handleSubmit = evt => {
    evt.preventDefault();
    this.props.onSubmit(this.state.query);
    this.setState({ query: '' });
  };

  handleChange = evt => {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  };


  render() {
    return (
      <Header>
        <SearchForm onSubmit={this.handleSubmit}>
          <SearchFormBtn type="submit" className="SearchForm-button">
            <SearchFormBtnLabel>
              <span>Search</span>
            </SearchFormBtnLabel>
          </SearchFormBtn>

          <SearchFormInput
            onChange={this.handleChange}
            value={this.state.query}
            type="text"
            name="query"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </SearchForm>
      </Header>
    );
  }
}
