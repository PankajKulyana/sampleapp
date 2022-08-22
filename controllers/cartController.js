const axios = require('axios');
require('dotenv').config();

const adminRequestHeaders = {
    'X-Auth-Token': process.env.X_AUTH_TOKEN,
    'Accept': "application/json",
    'Content-Type': "application/json"
}
const baseApiUrl = process.env.BASE_API_URL
const store_hash = process.env.STORE_HASH

const createCart = async (req, res) => {
    let requestBody = req.body
    try {
        let response = await axios.post(`${baseApiUrl}/stores/${store_hash}/v3/carts`, requestBody, {
            headers: adminRequestHeaders,
        })
        if (response.data) {
            res.json(response.data)
        } else {
            console.log('Failed to create cart');
        }
    } catch (error) {
        console.log('Error to fetch data')
    }
}

const getCart = async (req, res) => {
    let cartId = req.params.cartId
    try {
        let response = await axios.get(`${baseApiUrl}/stores/${store_hash}/v3/carts/${cartId}`, {
            headers: adminRequestHeaders,
        })
        if (response.data) {
            res.json({ "cart": response.data })
        } else {
            console.log('Failed to get cart');
        }
    } catch (error) {
        console.log('Error to fetch data')
    }
}

const addCartItems = async (req, res) => {
    let cartId = req.params.cartId
    let requestBody = req.body
    try {
        let response = await axios.post(`${baseApiUrl}/stores/${store_hash}/v3/carts/${cartId}/items`, requestBody, {
            headers: adminRequestHeaders,
        })
        if (response.data) {
            res.json(response.data)
        } else {
            console.log('Failed to add items in a cart');
        }
    } catch (error) {
        console.log('Error to fetch data')
    }
}

const updateCartItems = async (req, res) => {
    let cartId = req.params.cartId
    let itemId = req.params.itemId
    let requestBody = req.body
    try {
        let response = await axios.put(`${baseApiUrl}/stores/${store_hash}/v3/carts/${cartId}/items/${itemId}`, requestBody, {
            headers: adminRequestHeaders,
        })
        if (response.data) {
            res.json(response.data)
        } else {
            console.log('Failed to update cart itema');
        }
    } catch (error) {
        console.log('Error to fetch data')
    }
}

const deleteCartItems = async (req, res) => {
    let cartId = req.params.cartId
    let itemId = req.params.itemId
    try {
        let response = await axios.delete(`${baseApiUrl}/stores/${store_hash}/v3/carts/${cartId}/items/${itemId}`, {
            headers: adminRequestHeaders,
        })
        if (response.data) {
            res.json(response.data)
        } else {
            res.json({})
        }
    } catch (error) {
        console.log('Error to fetch data')
    }
}

const deleteCart = async (req, res) => {
    let cartId = req.params.cartId
    try {
        let response = await axios.delete(`${baseApiUrl}/stores/${store_hash}/v3/carts/${cartId}`, {
            headers: adminRequestHeaders,
        })
        res.json({ "message": "cart is deleted" })
    } catch (error) {
        console.log('Error to fetch data')
    }
}

module.exports = {
    createCart,
    getCart,
    addCartItems,
    updateCartItems,
    deleteCartItems,
    deleteCart
}