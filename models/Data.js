const mongoose = require("mongoose");

const DataSchema = new mongoose.Schema({
    host: {
        type: String,
    },
    pragma: {
        type: String,
    },
    contentType: {
        type: String,
    },
    cacheControl: {
        type: String,
    },
    age: {
        type: String,
    },
    lastModified: {
        type: Date,
    },
    ip: {
        type: String,
    },
    url: {
        type: String,
    },
    timming: {
        type: String,
    },
    date: {
        type: Date,
    },
    method: {
        type: String,
    },
    status: {
        type: String,
    },
    statusText: {
        type: String,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    uploadedAt: {
        type: Date,
        default: Date.now,
    }

});

const Data = mongoose.model("Data", DataSchema);

module.exports = Data;