const bcrypt = require('bcrypt');
let password = '1234';
const saltRounds = 13;
const salt = bcrypt.genSaltSync(saltRounds);



console.log('Password: ' + password)
console.log('Salt ' + salt);

console.log('****************Hashing*************************')
let hashedPassword = '';

for(let i =0;i<10;i++)
{
    hashedPassword = bcrypt.hashSync(password, salt);
    console.log('Password ' + hashedPassword);
}




const compareValue = bcrypt.compareSync(password, hashedPassword);
console.log(password + ' is the same as ' + hashedPassword + ' ? ' + compareValue);