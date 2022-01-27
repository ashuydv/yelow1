class Product {
    /**
     * @param {string} uuid
     * @param {string} title
     * @param {string} description
     * @param {number} price
     * @param {string} image_url
     * @param {string} redirect_url
     * @param {string} remarks
     * @param {string} status
     * @param {string} category
     * @param {string} sub_category
     */
    constructor (uuid, title, description, price, image_url, redirect_url, remarks, status, category, sub_category) {
        this.uuid = uuid;
        this.title = title;
        this.description = description;
        this.price = price;
        this.image_url = image_url;
        this.redirect_url = redirect_url;
        this.remarks = remarks;
        this.status = status;
        this.category = category;
        this.sub_category = sub_category;
    }

    static fromJson(json) {
        return new Product(
            json.uuid,
            json.title,
            json.description,
            json.price,
            json.image_url,
            json.redirect_url,
            json.remarks,
            json.status,
            json.category,
            json.sub_category
        );
    }
}