var ObjectId = require('mongodb').ObjectID;
const Data = require("../models/Data")

async function getUniqueIpCount(req) {
    const uniqueIpCount = await Data.aggregate([
        { "$match": { user: ObjectId(`${req.user.id}`) } },
        {
            "$group": {
                "_id": { "$toLower": "$userJson.ip" },
                "count": { "$sum": 1 }
            }
        },
        {
            "$group": {
                "_id": null,
                "counts": {
                    "$push": { "k": "$_id", "v": "$count" }
                }
            }
        },
        {
            "$replaceRoot": {
                "newRoot": { "$arrayToObject": "$counts" }
            }
        }
    ])
    return uniqueIpCount;
}
module.exports = getUniqueIpCount;