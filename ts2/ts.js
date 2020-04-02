/**
* How to Use
* npm install -g typescript
* cmd tsc ts.ts
*/

function greeter(person) {
    console.log('hello' + person.firstName + '&' + person.lastName);
}
greeter({ firstName: 'Jayant', lastName: 'Xu' });
