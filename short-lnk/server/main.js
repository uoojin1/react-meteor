import { Meteor } from 'meteor/meteor';
import '../imports/api/users'; // this will execute the file - has account.validate
import '../imports/api/links';

Meteor.startup(() => {
  // code to run on server at startup

});
