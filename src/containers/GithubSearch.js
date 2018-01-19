import React from 'react';
import Search from './Search';
import { connect } from 'react-redux';


class GithubSearch extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="GithubSearch">
        <Search />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {users: state.users};
}


export default connect(mapStateToProps)(GithubSearch);
