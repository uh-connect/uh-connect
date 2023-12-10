import { Meteor } from 'meteor/meteor';
import { Roles } from 'meteor/alanning:roles';
import { check } from 'meteor/check';

Meteor.methods({
  async roleAssigner({ role }) {
    check(role, String);
    if (!Roles.userIsInRole(this.userId, 'admin')) {
      await Roles.removeUsersFromRoles(this.userId, Roles.getRolesForUser(this.userId));
      await Roles.addUsersToRoles(this.userId, role);
    } else {
      throw new Meteor.Error('ADMIN SHOULD NOT CHANGE ROLES');
    }
    return Roles.userIsInRole(this.userId, role);
  },
});
