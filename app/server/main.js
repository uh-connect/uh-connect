import { Meteor } from 'meteor/meteor';
import { Roles } from 'meteor/alanning:roles';
import { check } from 'meteor/check';
import '/imports/startup/server/Accounts';
import '/imports/startup/server/Publications';
import '/imports/startup/server/Mongo';

Meteor.methods({
  roleAssigner({ role }) {
    check(role, String);
    if (!Roles.userIsInRole(this.userId, 'admin')) {
      Roles.removeUsersFromRoles(this.userId, Roles.getRolesForUser(this.userId));
      Roles.addUsersToRoles(this.userId, role);
    } else {
      throw new Meteor.Error('ADMIN SHOULD NOT CHANGE ROLES');
    }
    return Roles.userIsInRole(this.userId, role);
  },
});
