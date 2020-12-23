const { response } = require("express");

function geoDataFinal(geoData) {
    let myGeoData = geoData
    myGeoData.forEach(function (data) { delete data.query });

    //let geoDataFinal = []
    //     for (let i = 0; i < myGeoData.length; i++) {
    //         geoDataFinal.push(Object.values(myGeoData[i]))
    //     }
    //     return geoDataFinal;
    return myGeoData;
}

module.exports = geoDataFinal;