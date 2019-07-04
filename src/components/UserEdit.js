import React from "react";
import { connect } from "react-redux";
import { editUser } from "../actions/userActions";
import User from "./User";

class UserEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Id: "",
      FirstName: "",
      LastName: "",
      DOB: "",
      Phone: "",
      Email: "",
      City: "",
      State: ""
    };
  }

  componentDidMount() {
    let user = this.props.User;
    this.setState({
      Id: user.Id,
      FirstName: user.FirstName,
      LastName: user.LastName,
      DOB: user.DOB,
      Phone: user.Phone,
      Email: user.Email,
      City: user.City,
      State: user.State
    });
  }

  onSubmit = e => {
    e.preventDefault();

    const Id = this.state.Id;
    const FirstName = this.state.FirstName;
    const LastName = this.state.LastName;
    const DOB = this.state.DOB;
    const Phone = this.state.Phone;
    const Email = this.state.Email;
    const City = this.state.City;
    const State = this.state.State;

    const user = {
      Id,
      FirstName,
      LastName,
      DOB,
      Phone,
      Email,
      City,
      State
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
              value={this.state.FirstName}
              onChange={e => {
                this.setState({ FirstName: e.target.value });
              }}
            />
          </div>

          <div className="form-group">
            <label> Last Name </label>
            <input
              required
              type="text"
              className="form-control"
              value={this.state.LastName}
              onChange={e => {
                this.setState({ LastName: e.target.value });
              }}
            />
          </div>
          <div className="form-group">
            <label> DOB </label>
            <input
              required
              type="text"
              className="form-control"
              value={this.state.DOB}
              onChange={e => {
                this.setState({ DOB: e.target.value });
              }}
            />
          </div>

          <div className="form-group">
            <label> Email </label>
            <input
              required
              type="text"
              className="form-control"
              value={this.state.Email}
              onChange={e => {
                this.setState({ Email: e.target.value });
              }}
            />
          </div>

          <div className="form-group">
            <label> Phone </label>
            <input
              required
              type="text"
              className="form-control"
              value={this.state.Phone}
              onChange={e => {
                this.setState({ Phone: e.target.value });
              }}
            />
          </div>
          <div className="form-group">
            <label> City </label>
            <input
              required
              type="text"
              className="form-control"
              value={this.state.City}
              onChange={e => {
                this.setState({ City: e.target.value });
              }}
            />
          </div>
          <div className="form-group">
            <label> State </label>
            <input
              required
              type="text"
              className="form-control"
              value={this.state.State}
              onChange={e => {
                this.setState({ State: e.target.value });
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
  user: this.state.employee
});

export default connect(
  mapStateToProps,
  { editUser }
)(UserEdit);
