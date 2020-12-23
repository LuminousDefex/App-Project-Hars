const mongoose = require("mongoose");

const GeoDataSchema = new mongoose.Schema({
    geoData: {
        type: String
    }
});

const GeoData = mongoose.model("GeoData", GeoDataSchema);

module.exports = GeoData;