import React from "react";
import { connect } from "react-redux";
import {
  fetchUsers,
  deleteUser,
  editMode,
  fetchUserById
} from "../actions/userActions";
import "../../src/App.css";

class UserList extends React.Component {
  componentDidMount() {
    this.props.fetchUsers();
  }

  onEdit = userId => {
    this.props.editMode();
    this.props.fetchUserById(userId);
  };

  onDelete = userId => {
    this.props.deleteUser(userId);
  };

  render() {
    let users = this.props.Users;
    return (
      <div className="App">
        <table className="table table-dark">
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>DOB</th>
              <th>Email</th>
              <th>Phone</th>
              <th>City</th>
              <th>State</th>
            </tr>
          </thead>
          <tbody>
            {this.props.Users.map(u => (
              <tr key={u.Id}>
                <td>{u.FirstName}</td>
                <td>{u.LastName}</td>
                <td>{u.DOB}</td>
                <td>{u.Email}</td>
                <td>{u.Phone}</td>
                <td>{u.City}</td>
                <td>{u.State}</td>
                <td>
                  <button onClick={() => this.onEdit(u.Id)}>Edit</button>
                </td>
                <td>
                  <button onClick={() => this.onDelete(u.Id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  Users: state.userReducer.users,
  error: state.userReducer.error
});

export default connect(
  mapStateToProps,
  { fetchUsers, deleteUser, editMode, fetchUserById }
)(UserList);
