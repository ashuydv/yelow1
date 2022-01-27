/**
* @class Transaction
* @description Stores the transaction details
* @property {string} uuid - Transaction UUID
* @property {number} loyalty_point_used - Loyalty point used for the transaction
* @property {number} amount - Amount of the transaction
* @property {number} loyalty_point_rewarded
* @property {string} transaction_date
* @property {number} created_on
* @property {PaymentMethod} payment_method
*/
export default class Transaction {
  /**
   * @param {string} uuid
   * @param {number} loyalty_point_used
   * @param {number} loyalty_point_rewarded
   * @param {number} amount
   * @param {string} transaction_date
   * @param {number} created_on
   * @param {PaymentMethod} payment_method
   */
  constructor(
    uuid,
    loyalty_point_used,
    loyalty_point_rewarded,
    amount,
    transaction_date,
    created_on,
    payment_method
  ) {
    this.uuid = uuid;
    this.loyalty_point_used = loyalty_point_used;
    this.loyalty_point_rewarded = loyalty_point_rewarded;
    this.amount = amount;
    this.transaction_date = transaction_date;
    this.created_on = created_on;
    this.payment_method = payment_method;
  }

  static fromJson(json) {
    return new Transaction(
      json.uuid,
      json.loyalty_point_used,
      json.loyalty_point_rewarded,
      json.amount,
      json.transaction_date,
      json.created_on,
      new PaymentMethod().fromJson(json.payment_method)
    );
  }
}

/**
 * @class PaymentMethod
 * @description Stores the payment method details
 * @property {string} uuid - Payment method UUID
 * @property {string} type - Payment method type
 * @property {object} data - Payment method data
 */
export class PaymentMethod {
  /**
   * @param {string} uuid
   * @param {string} type
   * @param {object} data
   */
  constructor(uuid, type, data) {
    this.uuid = uuid;
    this.type = type;
    this.data = data;
  }

  static fromJson(json) {
    return new PaymentMethod(
      json.uuid,
      json.type,
      json.data
    );
  }
}
