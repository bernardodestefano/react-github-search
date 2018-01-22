import React from 'react';
import { connect } from 'react-redux';
import { itemsFetchData } from '../actions/actions';

class UserList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    //this.props.fetchData(`https://api.github.com/search/users?q=${this.props.input}`);
  }

  render() {
    if (this.props.hasError) {
      return <p>Sorry! There was an error loading the items</p>;
    }

    if (this.props.isLoading) {
      return <p>Loading…</p>;
    }

    return (
      <div>
        ciao
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

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (url) => dispatch(itemsFetchData(url))
    };
};


export default connect(mapStateToProps,mapDispatchToProps)(UserList);
