import Product from './Product';
import Address from './Address';
import Merchant from './Merchant';
import User from './User';
import Transaction from './Transaction';

export default class Order {
  /**
   * @param {string} uuid
   * @param {Product} product
   * @param {Address} billing_address
   * @param {Address} shipping_address
   * @param {User} user
   * @param {number} total_amount
   * @param {string} identifier
   * @param {string} shipping_url
   * @param {string} current_tracking_status
   * @param {string} status
   * @param {Date} created_on
   * @param {PaymentBreakup[]} payment_breakup
   * @param {Transaction} transaction
   * @param {Merchant} merchant
   */
  constructor(
    uuid,
    product,
    billing_address,
    shipping_address,
    user,
    total_amount,
    identifier,
    shipping_url,
    current_tracking_status,
    status,
    created_on,
    payment_breakup,
    transaction,
    merchant
  ) {
    this.uuid = uuid;
    this.product = product;
    this.billing_address = billing_address;
    this.shipping_address = shipping_address;
    this.user = user;
    this.total_amount = total_amount;
    this.identifier = identifier;
    this.shipping_url = shipping_url;
    this.current_tracking_status = current_tracking_status;
    this.status = status;
    this.created_on = created_on;
    this.payment_breakup = payment_breakup;
    this.transaction = transaction;
    this.merchant = merchant;
  }

  fromJson(json) {
    this.uuid = json.uuid;
    this.product = new Product().fromJson(json.product);
    this.billing_address = new Address().fromJson(json.billing_address);
    this.shipping_address = new Address().fromJson(json.shipping_address);
    this.user = new User().fromJson(json.user);
    this.total_amount = json.total_amount;
    this.identifier = json.identifier;
    this.shipping_url = json.shipping_url;
    this.current_tracking_status = json.current_tracking_status;
    this.status = json.status;
    this.created_on = json.created_on;
    this.payment_breakup = json.payment_breakup;
    this.transaction = new Transaction().fromJson(json.transaction);
    this.merchant = new Merchant().fromJson(json.merchant);
    return this;
  }
}
