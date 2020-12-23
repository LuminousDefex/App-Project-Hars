const mongoose = require("mongoose");

const GeoDataSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    geoData: {
        type: String
    }
});

const GeoData = mongoose.model("GeoData", GeoDataSchema);

module.exports = GeoData;