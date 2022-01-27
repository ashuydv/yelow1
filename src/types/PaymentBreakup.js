class PaymentBreakup {
    constructor(uuid, cost_type, cost_amount, order_id) {
        this.uuid = uuid;
        this.cost_type = cost_type;
        this.cost_amount = cost_amount;
        this.order_id = order_id;
    }
    static fromJson(json) {
        return new PaymentBreakup(
            json.uuid,
            json.cost_type,
            json.cost_amount,
            json.order_id
        );
    }
}