import React from "react";
import { connect } from "react-redux";
import { addUser } from "../actions/userActions";
import "bootstrap/dist/css/bootstrap.css";

class UserForm extends React.Component {
  onSubmit = e => {
    e.preventDefault();
    const firstName = this.getFirstName.value;
    const lastName = this.getLastName.value;

    const email = this.getEmail.value;

    const user = { firstName:firstName, lastName:lastName, email:email };

    this.props.addUser(user);
    this.props.AddClicked();
  };

  render() {
    return (
      <div>
        <h3>Add</h3>
        <br />
        <div className="container">
          <form onSubmit={this.onSubmit} className="form">
            <div className="form-group">
              <label>First Name</label>
              <br />
              <input
                required
                className="form-control-sm"
                id="firstName"
                type="text"
                ref={input => (this.getFirstName = input)}
              />
            </div>
            <div className="form-group">
              <label>Last Name</label>
              <br />
              <input
                required
                className="form-control-sm"
                id="lastName"
                type="text"
                ref={input => (this.getLastName = input)}
              />
            </div>
            <div className="form-group">
              <label>Email</label>
              <br />
              <input
                required
                className="form-control-sm"
                id="email"
                type="text"
                ref={input => (this.getEmail = input)}
              />
            </div>
            <button className="btn btn-primary">Add</button>
          </form>
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  { addUser }
)(UserForm);
