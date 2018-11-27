import React from 'react';
import {connect} from 'react-redux';
import Sidebar from "../components/sidebar";
import {Redirect, Route} from 'react-router-dom';


const PrivateRoute = ({component: Component, ...rest}) => {
  const { translate } = rest;
  return (
    <Route {...rest} render={props => (
      !!rest.isAuthenticated ? (
        <div className="wrapper">
          <Sidebar translate={translate} />
          <Component {...props} />
        </div>
      ) : (
        <Redirect to={{
          pathname: '/auth/login',
          state: {from: props.location}
        }}/>
      )
    )}/>
  )
};

function mapStateToProps(state) {
  return {
    isAuthenticated: state.authReducer.isAuthenticated,
    translate: state.langReducer.allLang[state.langReducer.currentLang],
  };
}

export default connect(mapStateToProps)(PrivateRoute);
