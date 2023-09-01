var express = require('express')
var router = express.Router()
const emailSender = new (require('../class/EmailSender'))()

router.post('/send/email', async function (req, res, next) {
    const {phoneNumber, storeName, type, region, tableCount, content} = req.body;
    await emailSender.send({
      phoneNumber,
      storeName,
      type,
      region,
      tableCount,
      content,
      // to: ["theorder01@naver.com", "jaking@naver.com"],
      to: ["devchoi1213@gmail.com"],
    });

module.exports = router
