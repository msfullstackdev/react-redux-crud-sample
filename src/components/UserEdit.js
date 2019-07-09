import React from "react";
import { connect } from "react-redux";
import { editUser } from "../actions/userActions";
import User from "./User";

class UserEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      firstName: "",
      lastName: "",
      email: ""
    };
  }

  componentDidMount() {
    let user = this.props.user;
    this.setState({
      id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email
    });
  }

  onSubmit = e => {
    e.preventDefault();

    const id = this.state.id;
    const firstName = this.state.firstName;
    const lastName = this.state.lastName;

    const email = this.state.email;

    const user = {
      id,
      firstName,
      lastName,
      email
    };
    this.props.editUser(user);
  };

  render() {
    return (
      <div className="container">
        <h3>Edit </h3>
        <form onSubmit={this.onSubmit} className="form">
          <div className="form-group">
            <label> First Name </label>
            <input
              required
              type="text"
              className="form-control"
              value={this.state.firstName}
              onChange={e => {
                this.setState({ firstName: e.target.value });
              }}
            />
          </div>

          <div className="form-group">
            <label> Last Name </label>
            <input
              required
              type="text"
              className="form-control"
              value={this.state.lastName}
              onChange={e => {
                this.setState({ lastName: e.target.value });
              }}
            />
          </div>
          <div className="form-group">
            <label> Email </label>
            <input
              required
              type="text"
              className="form-control"
              value={this.state.email}
              onChange={e => {
                this.setState({ email: e.target.value });
              }}
            />
          </div>

          <button className="btn btn-primary">Edit</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.userReducer.user
});

export default connect(
  mapStateToProps,
  { editUser }
)(UserEdit);
