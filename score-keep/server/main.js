import someDefault, {greetUser, name} from '../imports/utils.js';
import add from '../imports/math.js';

console.log("log from /server/main.js");
console.log(greetUser());
console.log(name);
console.log(add(5,7));