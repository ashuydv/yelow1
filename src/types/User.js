export default class User {
  /**
   * @param {string} uuid
   * @param {string} name
   * @param {email} email
   * @param {phone_number} phone_number
   * @param {type} type
   * @param {string?} password
   */
  constructor(uuid, name, email, phone_number, type, password) {
    this.uuid = uuid;
    this.name = name;
    this.email = email;
    this.password = password;
    this.phone_number = phone_number;
    this.type = type;
  }
  static fromJson(json) {
    return new User(
      json.uuid,
      json.name,
      json.email,
      json.phone_number,
      json.type,
      json.password ? json.password : null
    );
  }
}
