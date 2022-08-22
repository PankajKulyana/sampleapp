const axios = require('axios')
require('dotenv').config();

const adminRequestHeaders = {
    'X-Auth-Token': process.env.X_AUTH_TOKEN,
    'Accept': "application/json",
    'Content-Type': "application/json"
}
const baseApiUrl = process.env.BASE_API_URL
const store_hash = process.env.STORE_HASH

const getAllProducts = async (req, res) => {
    try {
        let response = await axios.get(`${baseApiUrl}/stores/${store_hash}/v3/catalog/products?categories:in=26&include=images`, {
            headers: adminRequestHeaders
        })
        if (response.data) {
            res.json({ "products": response.data })
        } else {
            console.log('Failed to get products!');
        }
    } catch (error) {
        console.log('Error to fetch data' + error)
    }
}

const getAllProductsByCategoryId = async (req, res) => {
    let categoryId = req.params.category_id
    try {
        let response = await axios.get(`${baseApiUrl}/stores/${store_hash}/v3/catalog/products?categories:in=${categoryId}&include=images`, {
            headers: adminRequestHeaders
        })
        if (response.data) {
            res.json({ "products": response.data })
        } else {
            console.log('Failed to get products!');
        }
    } catch (error) {
        console.log('Error to fetch data' + error)
    }
}

const getProductById = async (req, res) => {
    let product_id = req.params.product_id
    try {
        let response = await axios.get(`${baseApiUrl}/stores/${store_hash}/v3/catalog/products/${product_id}?include=images,custom_fields`, {
            headers: adminRequestHeaders
        })
        if (response.data) {
            res.json(response.data)
        } else {
            console.log('Failed to get products!');
        }
    } catch (error) {
        console.log('Error to fetch data' + error)
    }
}

const searchProductByKeyword = async (req, res) => {
    let searchKeyword = req.params.searchKeyword
    try {
        let response = await axios.get(`${baseApiUrl}/stores/${store_hash}/v3/catalog/products?name:like=${searchKeyword}&include=images`, {
            headers: adminRequestHeaders
        })
        if (response.data) {
            res.json({ "products": response.data })
        } else {
            console.log('Failed to get products!');
        }
    } catch (error) {
        console.log('Error to fetch data' + error)
    }
}

module.exports = {
    getAllProducts,
    getAllProductsByCategoryId,
    getProductById,
    searchProductByKeyword
}