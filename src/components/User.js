import React from "react";
import UserList from "./UserList";
import UserForm from "./UserForm";
import UserEdit from "./UserEdit";
import { connect } from "react-redux";
import { addUserBtnClicked } from "../actions/userActions";

class User extends React.Component {
  constructor(props) {
    super(props);

    this.state = { isSaveBtnClicked: false };

    this.onClick = this.onClick.bind(this);

    this.Add = this.Add.bind(this);
  }

  Add() {
    this.setState({ isSaveBtnClicked: false });
  }

  onClick(e) {
    const isSaveBtnClicked = true;
    this.setState({ isSaveBtnClicked });
    this.props.addUserBtnClicked();
  }
  render() {
    return (
      <div>
        <h2>Demo - React, Redux and Redux-Saga</h2>
        {this.props.edit === true && (
          <h3 className="alert alert-success">Data Edited Successfully</h3>
        )}

        {this.state.isSaveBtnClicked === false &&
          this.props.isEditBtnClicked === false && (
            <button className="btn btn-primary" onClick={this.onClick}>
              Add
            </button>
          )}
        <br />
        <br />
        {this.state.isSaveBtnClicked === true && (
          <UserForm AddClicked={this.Add} />
        )}
        {this.state.isSaveBtnClicked === false &&
          this.props.isEditBtnClicked === false && (
            <UserList EditClicked={this.editBtn} />
          )}
        {this.props.isEditBtnClicked && <UserEdit />}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isEditBtnClicked: state.userReducer.isEditBtnClicked,
  edit: state.userReducer.edit
});

export default connect(
  mapStateToProps,
  { addUserBtnClicked }
)(User);
