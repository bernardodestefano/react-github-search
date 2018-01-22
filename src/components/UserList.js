import React from 'react';
import { connect } from 'react-redux';
import { itemsFetchData } from '../actions/actions';

class UserList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillReceiveProps(nextProps) {
    if(this.props.input !== nextProps.input && this.props.input.length > 1) {

      this.props.fetchData(`https://api.github.com/search/users?q=${this.props.input}`);
      console.log("MAMMT "+this.props.items);
    }
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
        <ul>
          {this.props.items.map( user => <li key={user.id}>{user.login}</li> )}
        </ul>
      </div>
    );
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
        fetchData: (url) => dispatch(itemsFetchData(url))
    };
};


export default connect(mapStateToProps,mapDispatchToProps)(UserList);
