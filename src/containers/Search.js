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
    //console.log(e.target.value);
    let input = e.target.value;

    if(input.length < 2 )
      return;
    //let res = searchUser(input);
    //console.log(res);
    this.props.itemsInput(input);
    //this.props.dispatch(searchUser(input));
    //console.log(this.props.getState());

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
        <UserList list={this.props.input} />
      </div>
    )
  }
}


const mapStateToProps = (state) => {
    return {
        input: state.input
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        itemsInput: (input) => dispatch(updateInput(input))
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(Search);
