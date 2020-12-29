var ObjectId = require('mongodb').ObjectID;
const Data = require("../models/Data")

async function getUniqueIpCount(myJson) {

    // const uniqueIpCount = await Data.aggregate([
    //     { "$match": { user: ObjectId(`${req.user.id}`) } },
    //     {
    //         "$group": {
    //             "_id": { "$toLower": "$userJson.ip" },
    //             "count": { "$sum": 1 }
    //         }
    //     },
    //     {
    //         "$group": {
    //             "_id": null,
    //             "counts": {
    //                 "$push": { "k": "$_id", "v": "$count" }
    //             }
    //         }
    //     },
    //     {
    //         "$replaceRoot": {
    //             "newRoot": { "$arrayToObject": "$counts" }
    //         }
    //     }
    // ])

    obj = {};
    for (let i = 0; i < myJson.length; i++) {
        if (!obj[myJson[i].ip]) {
            obj[myJson[i].ip] = 1;
        } else if (obj[myJson[i].ip]) {
            obj[myJson[i].ip] += 1;
        }
    }

    return obj;
}
module.exports = getUniqueIpCount;