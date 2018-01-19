import React from 'react';
import { connect } from 'react-redux';
import { searchUser } from '../actions/searchAction';

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.update = this.update.bind(this);
  }

  update(e) {
    //console.log(e.target.value);
    let input = e.target.value;
    let res = searchUser(input);
    console.log(res);

    //this.props.dispatch(res);
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

function mapStateToProps(state) {
    return {users: state.users};
  }


export default connect(mapStateToProps)(Search);
