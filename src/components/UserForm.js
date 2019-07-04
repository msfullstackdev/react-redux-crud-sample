import React from "react";
import { connect } from "react-redux";
import { addUser } from "../actions/userActions";
import "bootstrap/dist/css/bootstrap.css";

class UserForm extends React.Component {
  onSubmit = e => 
  {
      e.preventDefault();
      const FirstName = this.getFirstName.value;
      const LastName = this.getLastName.value;
      const DOB = this.getDateOfbirth.value;
      const Phone = this.getPhoneNumber.value;
      const Email = this.getEmail.value;
      const City = this.getCity.value;
      const State = this.getState.value;
      
      const user = {FirstName,LastName,DOB,Phone,Email,City,State};

      this.props.addUser(user);
      this.props.AddClicked();

  }

  render() {
    return (
      <div>
        <h3> Add User </h3>
        <br />
        <div className="container">
          <form onSubmit={this.onSubmit} className="form">
            <div className="form-group">
              <label>First Name</label>
              <br />
              <input
                required
                className="form-control-sm"
                id="FirstName"
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
                id="LastName"
                type="text"
                ref={input => (this.getLastName = input)}
              />
            </div>
            <div className="form-group">
              <label>Date of Birth</label>
              <br />
              <input
                required
                className="form-control-sm"
                id="DOB"
                type="text"
                ref={input => (this.getDateOfbirth = input)}
              />
            </div>
            <div className="form-group">
              <label>Email</label>
              <br />
              <input
                required
                className="form-control-sm"
                id="Email"
                type="text"
                ref={input => (this.getEmail = input)}
              />
            </div>
            <div className="form-group">
              <label>Phone</label>
              <br />
              <input
                required
                className="form-control-sm"
                id="Phone"
                type="text"
                ref={input => (this.getPhoneNumber = input)}
              />
            </div>
            <div className="form-group">
              <label>City</label>
              <br />
              <input
                required
                className="form-control-sm"
                id="City"
                type="text"
                ref={input => (this.getCity = input)}
              />
            </div>
            <div className="form-group">
              <label>State</label>
              <br />
              <input
                required
                className="form-control-sm"
                id="State"
                type="text"
                ref={input => (this.getState = input)}
              />
            </div>
            <button className="btn btn-primary">Add</button>
          </form>
        </div>
      </div>
    );
  }
}


export default connect(null,{addUser})(UserForm);