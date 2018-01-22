import React from 'react';
import { connect } from 'react-redux';
import UserList from '../components/UserList';
import { updateInput } from '../actions/actions';


class Search extends React.Component {
  constructor(props) {
    super(props);

    this.update = this.update.bind(this);
  }

  update(e) {
    let input = e.target.value;

    this.props.onInputChange(input);
  }

  render() {
    return (
      <div className="Search">
          <label>Search for users on github</label>
          <input
            type="text"
            onChange={this.update}
            placeholder="search for users"
            required
          />

      </div>
    )
  }
}


export default Search;
