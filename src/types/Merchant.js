// {
//     "uuid": "b707eb30-d831-45a0-8bb0-55058f7e16f2",
//     "name": "test_merchant",
//     "email": "test_email@abc.com",
//     "phone_number": "123456789",
//     "is_kyc_verified": false,
//     "banner_url": "logo_test",
//     "logo_url": "",
//     "address": "",
//     "yelow_vpa": "",
//     "is_brand": false,
//     "rating": 1.5
// }
class Merchant {
    constructor(uuid, name, email, phone_number, is_kyc_verified, banner_url, logo_url, address, yelow_vpa, is_brand, rating) {
        this.uuid = uuid;
        this.name = name;
        this.email = email;
        this.phone_number = phone_number;
        this.is_kyc_verified = is_kyc_verified;
        this.banner_url = banner_url;
        this.logo_url = logo_url;
        this.address = address;
        this.yelow_vpa = yelow_vpa;
        this.is_brand = is_brand;
        this.rating = rating;
    }
    static fromJson(json) {
        this.uuid = json.uuid;
        this.name = json.name;
        this.email = json.email;
        this.phone_number = json.phone_number;
        this.is_kyc_verified = json.is_kyc_verified;
        this.banner_url = json.banner_url;
        this.logo_url = json.logo_url;
        this.address = json.address;
        this.yelow_vpa = json.yelow_vpa;
        this.is_brand = json.is_brand;
        this.rating = json.rating;
        return this;
    }
}