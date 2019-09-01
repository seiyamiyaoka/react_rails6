import React from "react"
import PropTypes from "prop-types"

class Users extends React.Component {
  render () {
    return (
      <React.Fragment>
        <ul>
          {
          this.props.users.map((user) => (
            <li>{`${user.name}`}</li>
          ))
        }
        </ul>
      </React.Fragment>
    );
  }
}

Users.propTypes = {
  users: PropTypes.array
};
export default Users
