import { Meteor } from 'meteor/meteor';
import { Roles } from 'meteor/alanning:roles';
import { Stuffs } from '../../api/stuff/Stuff';
import { Jobs } from '../../api/job/Job';
import { Profiles } from '../../api/profile/Profile';
import { SavedList } from '../../api/cart/Cart';

// User-level publication.
// If logged in, then publish documents owned by this user. Otherwise, publish nothing.
Meteor.publish(Stuffs.userPublicationName, function () {
  if (this.userId) {
    const username = Meteor.users.findOne(this.userId).username;
    return Stuffs.collection.find({ owner: username });
  }
  return this.ready();
});

// Job Publications
Meteor.publish(Jobs.studentPublicationName, function () {
  if (this.userId && Roles.userIsInRole(this.userId, 'student')) {
    return Jobs.collection.find();
  }
  return this.ready();
});

Meteor.publish(Jobs.companyPublicationName, function () {
  if (this.userId && Roles.userIsInRole(this.userId, 'company')) {
    const username = Meteor.users.findOne(this.userId).username;
    return Jobs.collection.find({ owner: username });
  }
  return this.ready();
});

// Profile Publications
Meteor.publish(Profiles.companyPublicationName, function () {
  if (this.userId && Roles.userIsInRole(this.userId, 'company')) {
    return Profiles.collection.find();
  }
  return this.ready();
});

Meteor.publish(Profiles.studentPublicationName, function () {
  if (this.userId && Roles.userIsInRole(this.userId, 'student')) {
    const username = Meteor.users.findOne(this.userId, 'student').username;
    return Profiles.collection.find({ owner: username });
  }
  return this.ready();
});

// Cart Publications
Meteor.publish(SavedList.userPublicationName, function () {
  if (this.userId) {
    const username = Meteor.users.findOne(this.userId, 'student').username;
    return SavedList.collection.find({ owner: username });
  }
  return this.ready();
});

// Admin-level publication.
// If logged in and with admin role, then publish all documents from all users. Otherwise, publish nothing.
Meteor.publish(Stuffs.adminPublicationName, function () {
  if (this.userId && Roles.userIsInRole(this.userId, 'admin')) {
    return Stuffs.collection.find();
  }
  return this.ready();
});

Meteor.publish(Jobs.adminPublicationName, function () {
  if (this.userId) {
    return Jobs.collection.find();
  }
  return this.ready();
});

// alanning:roles publication
// Recommended code to publish roles for each user.
Meteor.publish(null, function () {
  if (this.userId) {
    return Meteor.roleAssignment.find({ 'user._id': this.userId });
  }
  return this.ready();
});
