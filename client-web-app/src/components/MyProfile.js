import PropTypes from "prop-types";
import { Navigate, Link } from "react-router-dom";
import { connect } from "react-redux";

const MyProfile = ({ profile }) => {
  if (profile === null) {
    return <Navigate to="create" />;
  }

  return (
    <div>
      <Link to="update">Update Profile</Link>
    </div>
  );
};

MyProfile.propTypes = {
  profile: PropTypes.object,
};

const mapStateToProps = (state) => ({
  profile: state.auth.profile,
});

export default connect(mapStateToProps)(MyProfile);
