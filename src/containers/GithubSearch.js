import React from 'react';
import Search from './Search';
import { connect } from 'react-redux';
import { itemsFetchData } from '../actions/actions';
import UserList from '../components/UserList';


class GithubSearch extends React.Component {
  constructor(props) {
    super(props);

    this.state = {input: ''};

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(input) {
    this.setState({input: input});
  }

  render() {
    return (
      <div className="GithubSearch">
        <Search onInputChange={this.handleChange}/>
        <UserList username={this.state.input} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
    return {
        items: state.items,
        hasError: state.itemsHaveError,
        isLoading: state.itemsAreLoading
    };
};

export default connect(mapStateToProps)(GithubSearch);
