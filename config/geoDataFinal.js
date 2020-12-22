const { response } = require("express");

function geoDataFinal(geoData) {
    myGeoData = geoData

    let geoDataFinal = []
    myGeoData.forEach(function (data) { delete data.query });
    for (let i = 0; i < myGeoData.length; i++) {
        geoDataFinal.push(Object.values(myGeoData[i]))
    }

    return geoDataFinal;
}

module.exports = geoDataFinal;