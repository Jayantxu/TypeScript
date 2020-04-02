interface Person {
	firstName: String;
	lastName: String;
}
function greeter (person: Person) {
	console.log('hello' + person.firstName + '&' + person.lastName);
}
greeter({firstName: 'Jayant', lastName: 'Xu'});
