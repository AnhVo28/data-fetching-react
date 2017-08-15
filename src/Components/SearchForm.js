import React, { Component } from 'react';

export default class SearchForm extends Component {


  handleSubmit = e => {
    this.props.onSearch(this.input.value)
    e.preventDefault();
    e.currentTarget.reset();
  }

  render() {
    return (
      <form className="search-form" onSubmit={this.handleSubmit} >
        <label className="is-hidden" htmlFor="search">Search</label>
        <input type="search"
               ref={input=>this.input = input}
               name="search"
               placeholder="Search..." />
        <button type="submit" id="submit" className="search-button"><i className="material-icons icn-search">search</i></button>
      </form>
    );
  }
}
