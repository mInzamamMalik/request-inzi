"use strict";
exports.__esModule = true;
var request = require("request");
var http = /** @class */ (function () {
    function http() {
    }
    http.get = function (url, queryParamsObject) {
        if (queryParamsObject === void 0) { queryParamsObject = {}; }
        return new Promise(function (resolve, reject) {
            try {
                var query_1 = "";
                //converting query onject to query string
                if (Object.keys(queryParamsObject).length) {
                    query_1 = '?';
                    var paramArray = Object.keys(queryParamsObject);
                    paramArray.map(function (eachParam) {
                        query_1 += eachParam + "=" + queryParamsObject[eachParam] + "&";
                    });
                }
                query_1 = query_1.slice(0, -1); // removing & from last
                //making request
                request.get({ url: url + query_1 }, function (error, response, body) {
                    //checking if response was success
                    if (!error && response.statusCode == 200) {
                        var responseBody = JSON.parse(response.body);
                        console.log("http get success, url: ", url, "responseBody: ", responseBody);
                        resolve(responseBody);
                    }
                    else {
                        console.log("http get error, url: ", url, error);
                        reject(response.statusCode);
                    }
                });
            }
            catch (e) {
                console.log("catch error: ", e);
            }
        });
    };
    http.post = function (url, jsonBody) {
        return new Promise(function (resolve, reject) {
            request.post({ url: url, json: jsonBody }, function (error, response, body) {
                //checking if response was success
                if (!error && (response.statusCode == 200 || response.statusCode == 201)) {
                    var responseBody = response.body;
                    console.log("http post success, url: ", url, "request body: ", jsonBody, "responseBody: ", responseBody);
                    resolve(responseBody);
                }
                else {
                    console.log("http post error, url: ", url, "body: ", jsonBody, error, response.statusCode);
                    reject(response.statusCode);
                }
            });
        });
    };
    return http;
}());
exports.http = http;
