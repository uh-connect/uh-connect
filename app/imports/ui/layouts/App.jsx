import React from 'react';
import PropTypes from 'prop-types';
import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';
import { Roles } from 'meteor/alanning:roles';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Footer from '../components/Footer';
import Landing from '../pages/Landing';
import ListStuffAdmin from '../pages/ListStuffAdmin';
import AddStuff from '../pages/AddStuff';
import NotFound from '../pages/NotFound';
import SignUp from '../pages/SignUp';
import SignOut from '../pages/SignOut';
import NavBar from '../components/NavBar';
import SignIn from '../pages/SignIn';
import NotAuthorized from '../pages/NotAuthorized';
import LoadingSpinner from '../components/LoadingSpinner';
import AddJob from '../pages/AddJob';
import ListJobStudent from '../pages/ListJobStudent';
import ListJobCompany from '../pages/ListJobCompany';
import ListJobAdmin from '../pages/ListJobAdmin';
import EditJob from '../pages/EditJob';
import RoleAssign from '../pages/RoleAssign';
import AddProfile from '../pages/AddProfile';
import EditProfile from '../pages/EditProfile';
import PreviewProfile from '../pages/PreviewProfile';
import FAQ from '../pages/FAQ';
import About from '../pages/About';
import Terms from '../pages/Terms';

/** Top-level layout component for this application. Called in imports/startup/client/startup.jsx. */
const App = () => {
  const { ready } = useTracker(() => {
    const rdy = Roles.subscription.ready();
    return {
      ready: rdy,
    };
  });
  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signout" element={<SignOut />} />
          <Route path="/role" element={<ProtectedRoute><RoleAssign /></ProtectedRoute>} />
          <Route path="/home" element={<ProtectedRoute><Landing /></ProtectedRoute>} />
          <Route path="/faq" element={<ProtectedRoute><FAQ /></ProtectedRoute>} />
          <Route path="/about" element={<ProtectedRoute><About /></ProtectedRoute>} />
          <Route path="/terms" element={<ProtectedRoute><Terms /></ProtectedRoute>} />
          <Route path="/addjob" element={<CompanyProtectedRoute><AddJob /></CompanyProtectedRoute>} />
          <Route path="/listjob" element={<StudentProtectedRoute><ListJobStudent /></StudentProtectedRoute>} />
          <Route path="/listjobcompany" element={<CompanyProtectedRoute><ListJobCompany /></CompanyProtectedRoute>} />
          <Route path="/listjobadmin" element={<AdminProtectedRoute ready={ready}><ListJobAdmin /></AdminProtectedRoute>} />
          <Route path="/profile" element={<StudentProtectedRoute><AddProfile /></StudentProtectedRoute>} />,
          <Route path="/previewprofile" element={<StudentProtectedRoute><PreviewProfile /></StudentProtectedRoute>} />
          <Route path="/editprofile/:_id" element={<StudentProtectedRoute><EditProfile /></StudentProtectedRoute>} />,
          <Route path="/add" element={<ProtectedRoute><AddStuff /></ProtectedRoute>} />
          <Route path="/edit/:_id" element={<ProtectedRoute><EditJob /></ProtectedRoute>} />
          <Route path="/admin" element={<AdminProtectedRoute ready={ready}><ListStuffAdmin /></AdminProtectedRoute>} />
          <Route path="/notauthorized" element={<NotAuthorized />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

/*
 * ProtectedRoute (see React Router v6 sample)
 * Checks for Meteor login before routing to the requested page, otherwise goes to signin page.
 * @param {any} { component: Component, ...rest }
 */
const ProtectedRoute = ({ children }) => {
  const isLogged = Meteor.userId() !== null;
  return isLogged ? children : <Navigate to="/signin" />;
};

const CompanyProtectedRoute = ({ children }) => {
  const isLogged = Meteor.userId() !== null;
  if (Roles.userIsInRole(Meteor.userId(), ['company', 'admin'])) {
    return isLogged ? children : <Navigate to="/home" />;
  }
  return <Navigate to="/home" />;
};

const StudentProtectedRoute = ({ children }) => {
  const isLogged = Meteor.userId() !== null;
  return isLogged ? children : <Navigate to="/home" />;
};

/**
 * AdminProtectedRoute (see React Router v6 sample)
 * Checks for Meteor login and admin role before routing to the requested page, otherwise goes to signin page.
 * @param {any} { component: Component, ...rest }
 */
const AdminProtectedRoute = ({ ready, children }) => {
  const isLogged = Meteor.userId() !== null;
  if (!isLogged) {
    return <Navigate to="/signin" />;
  }
  if (!ready) {
    return <LoadingSpinner />;
  }
  const isAdmin = Roles.userIsInRole(Meteor.userId(), 'admin');
  return (isLogged && isAdmin) ? children : <Navigate to="/notauthorized" />;
};

// Require a component and location to be passed to each ProtectedRoute.
ProtectedRoute.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
};

ProtectedRoute.defaultProps = {
  children: <Landing />,
};

CompanyProtectedRoute.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
};

CompanyProtectedRoute.defaultProps = {
  children: <Landing />,
};

StudentProtectedRoute.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
};

StudentProtectedRoute.defaultProps = {
  children: <Landing />,
};

// Require a component and location to be passed to each AdminProtectedRoute.
AdminProtectedRoute.propTypes = {
  ready: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
};

AdminProtectedRoute.defaultProps = {
  ready: false,
  children: <Landing />,
};

export default App;
