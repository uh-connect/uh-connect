import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

/**
 * The StuffsCollection. It encapsulates state and variable values for stuff.
 */
class ProfilesCollection {
  constructor() {
    // The name of this collection.
    this.name = 'ProfilesCollection';
    // Define the Mongo collection.
    this.collection = new Mongo.Collection(this.name);
    // Define the structure of each document in the collection.
    this.schema = new SimpleSchema({
      firstname: String,
      lastname: String,
      about: String,
      skills: String,
      interests: String,
      owner: String,
    });
    // Attach the schema to the collection, so all attempts to insert a document are checked against schema.
    this.collection.attachSchema(this.schema);
    // Define names for publications and subscriptions
    this.studentPublicationName = `${this.name}.publication.student`;
    this.companyPublicationName = `${this.name}.publication.company`;
    this.adminPublicationName = `${this.name}.publication.admin`;
  }
}

/**
 * The singleton instance of the StuffsCollection.
 * @type {ProfilesCollection}
 */
export const Profiles = new ProfilesCollection();
