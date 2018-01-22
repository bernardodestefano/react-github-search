import React from 'react';
import { connect } from 'react-redux';
import { itemsFetchData } from '../actions/actions';
import User from './User';
import '../style.scss';

class UserList extends React.Component {
  constructor(props) {
    super(props);
  }


  componentWillReceiveProps(nextProps) {
    if(this.props.username !== nextProps.username && this.props.username.length > 1) {

      this.props.fetchData(`https://api.github.com/search/users?q=${this.props.username}`);

    }
  }

  render() {

    return (
      <div>
        <ul className="UserList">
          {this.props.items.map( user => (
            <li key={user.id} className="UserList__item">
              <User user={user}/>
            </li>
            ))}
        </ul>
      </div>
    );
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
