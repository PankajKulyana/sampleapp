const axios = require('axios');
require('dotenv').config();

const adminRequestHeaders = {
    'X-Auth-Token': process.env.X_AUTH_TOKEN,
    'Accept': "application/json",
    'Content-Type': "application/json"
}
const baseApiUrl = process.env.BASE_API_URL
const store_hash = process.env.STORE_HASH

const getCheckout = async (req,res) => {
    let checkoutId = req.params.checkoutId
    try {
        let response = await axios.get(`${baseApiUrl}/stores/${store_hash}/v3/checkouts/${checkoutId}`, {
            headers: adminRequestHeaders
        })
        if(response.data){
            res.json({"checkout": response.data})
        }else{
            console.log('Failed to get checkout details')
        }
    } catch (error) {
        console.log('Error : ' + error)
    }
}

const addCheckoutBillingAddress = async (req,res) => {
    let checkoutId = req.params.checkoutId
    let requestBody = req.body
    try {
        let response = await axios.post(`${baseApiUrl}/stores/${store_hash}/v3/checkouts/${checkoutId}/billing-address`, requestBody, {
            headers: adminRequestHeaders
        })
        if(response.data){
            res.json(response.data)
        }else{
            console.log('Failed to add billing address')
        }
    } catch (error) {
        console.log('Error : ' + error)
    }
}

module.exports = {
    getCheckout,
    addCheckoutBillingAddress
}