export default class User {
  constructor({
    username = 'None', firstName = 'None', lastName = 'None', email = 'None', dateOfBirth = 'None', id,
  }) {
    if (id === undefined) throw new Error('No User ID was specified');
    this.id = id;
    this.username = username;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.dateOfBirth = dateOfBirth;
  }
}
