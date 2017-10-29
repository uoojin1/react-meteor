import {Meteor} from 'meteor/meteor';
import {Players} from '../imports/api/players'; // import players variable from the mongoDB

Meteor.startup(()=>{
  let obj = {
      name: 'Eugene',
      printName() {
          console.log(`Name: ${this.name}`);

      }
  };
  setTimeout(obj.printName.bind(obj), 1000); // functions in callback loses the binding. thus we need to keep the binding of this inside the function
  //bind(obj) is like saying use obj as this
  obj.printName();
});