import { Meteor } from 'meteor/meteor';
import { Stuffs } from '../../api/stuff/Stuff.js';
import { Jobs } from '../../api/job/Job';
import { Profiles } from '../../api/profile/Profile';

/* eslint-disable no-console */

// Initialize the database with a default data document.
const addData = (data) => {
  console.log(`  Adding: ${data.name} (${data.owner})`);
  Stuffs.collection.insert(data);
};

const addJobs = (data) => {
  console.log(` Adding: ${data.title} from ${data.company}`);
  Jobs.collection.insert(data);
};

const addProfiles = (data) => {
  console.log(` Adding: ${data.firstName}'s Profile`);
  Profiles.collection.insert(data);
};

// Initialize the StuffsCollection if empty.
if (Stuffs.collection.find().count() === 0) {
  if (Meteor.settings.defaultData) {
    console.log('Creating default data.');
    Meteor.settings.defaultData.forEach(data => addData(data));
  }
}

if (Jobs.collection.find().count() === 0) {
  if (Meteor.settings.defaultJobs) {
    console.log('Creating default Jobs');
    Meteor.settings.defaultJobs.forEach(data => addJobs(data));
  }
}

if (Profiles.collection.find().count() === 0) {
  if (Meteor.settings.defaultProfiles) {
    console.log('Creating default Profiles');
    Meteor.settings.defaultProfiles.forEach(data => addProfiles(data));
  }
}
