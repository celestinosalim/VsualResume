import { logout } from "../../store/actions/LoginActions";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

const handleLogOutClick = props => {
  props.logout();
  props.history.push("/");
  return setTimeout(() => window.location.reload(), 100);
};

export default withRouter(
  connect(
    null,
    { logout }
  )(handleLogOutClick)
);
