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

    if(input.length > 1 )
      this.props.itemsInput(input);
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
