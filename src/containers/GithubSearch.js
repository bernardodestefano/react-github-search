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




export default connect()(GithubSearch);
