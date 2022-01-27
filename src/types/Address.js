class Address {
    /**
     * @param {string} uuid
     * @param {string} address_type
     * @param {string} address_line_1
     * @param {string} area
     * @param {number} pincode
     * @param {string} city
     * @param {string} state
     * @param {string} landmark
     * @param {string} country
     */
    constructor (uuid, address_type, address_line_1, area, pincode, city, state, landmark, country) {
        this.uuid = uuid;
        this.address_type = address_type;
        this.address_line_1 = address_line_1;
        this.area = area;
        this.pincode = pincode;
        this.city = city;
        this.state = state;
        this.landmark = landmark;
        this.country = country;
    }
}