import React from 'react';
import Search from './Search';
import { connect } from 'react-redux';
import { updateInput } from '../actions/actions';
import UserList from '../components/UserList';


class GithubSearch extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(input) {
    this.props.onInpChange(input);
  }

  render() {
    return (
      <div className="GithubSearch">
        <Search onInputChange={this.handleChange} />
        <UserList username={this.props.input} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
    return {
        input: state.input,
        items: state.items,
        hasError: state.itemsHaveError,
        isLoading: state.itemsAreLoading
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onInpChange: (input) => dispatch(updateInput(input))
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(GithubSearch);
