const asyncHandler = require("express-async-handler");
const fetch = require('node-fetch');
const Registration = require("../models/userModel")
var randomstring = require("randomstring");

const paymentController = asyncHandler(async (req, res) => {
  try {
    const { fullName, phoneNo, email, age ,selectedPrice} = req.body;

    // ***************
    const url = 'https://sandbox.cashfree.com/pg/links';
    const randomString=randomstring.generate()
    const options = {
      method: 'POST',
      headers: {
        accept: 'application/json',
        'x-client-id': 'TEST389294cdf9b1ab1ea97489f075492983',
        'x-client-secret': 'TESTd32dc6efcb0ac4185db16e2848be9b09fa768a1b',
        'x-api-version': '2022-09-01',
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        customer_details: {
          customer_name: fullName,
          customer_phone: phoneNo,
          customer_email: email
        },
        link_notify: { send_sms: false, send_email: true },
        link_notes: { key_1: 'value_1', key_2: 'value_2' },
        link_meta: {
          notify_url: 'https://ee08e626ecd88c61c85f5c69c0418cb5.m.pipedream.net',
          upi_intent: false,
          return_url: `https://b8af79f41056.eu.ngrok.io?link_id={link_id}`
        },
        link_amount: selectedPrice,
        link_currency: 'INR',
        link_minimum_partial_amount: 20,
        link_id: randomString,
        link_partial_payments: false,
        link_purpose: 'Payment for PlayStation 11',
        link_auto_reminders: true
      })
    };

    fetch(url, options)
      .then(res => res.json())
      .then(async (json) => {
        console.log(json)
        if (json.cf_link_id) {
          const user = await Registration.create({
            fullName,
            phoneNo,
            email,
            age,
            payment: {
              properties: {
                success: true
              },
              amount: json.link_amount
            }
          });
        }
        res.send(json);
      })
      .catch(err => console.error('error:' + err));
    // *************
  } catch (e) {
    res.status(400);
    throw new Error("Server error");
  }
});

module.exports = { paymentController };
