import React, { Component } from 'react';
import FlatButton from 'material-ui/FlatButton';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profile: props.auth.getProfile()
    };
    this.updateProfile = this.updateProfile.bind(this);
  }
  updateProfile() {
    const { auth } = this.props;
    const { profile } = this.state;
    const data = {
      user_metadata: {
        someData: 'from profile с кириллицей 5'
      }
    };
    auth.updateProfile(profile.user_id, data, profile =>
      this.setState({ profile })
    );
  }
  render() {
    return (
      <div>
        <FlatButton label="TEST" onClick={this.updateProfile} />
        <p>profile</p>
      </div>
    );
  }
}

export default Profile;