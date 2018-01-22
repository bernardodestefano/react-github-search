import React from 'react';
import '../style.scss';

const User = props => {
  return (
    <div className="User">
      <img className="User__img" alt="avatar" src={props.user.avatar_url} />
      <div className="User__name">{props.user.login}</div>
    </div>
  );
}

export default User;
