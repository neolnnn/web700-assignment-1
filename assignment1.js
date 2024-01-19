/*********************************************************************************
*  WEB700 – Assignment 1
*  I declare that this assignment is my own work in accordance with Seneca  Academic Policy. 
*  No part of this assignment has been copied manually or electronically from any other source
*  (including web sites) or distributed to other students.
*
*  Name: Nathanael Joshua Student ID: njoshua2 Date: 1/18/2024
*
*********************************************************************************/

// array of verbs, paths and responses to simulate an http request
var serverVerbs = ["GET", "GET", "GET", "POST", "GET", "POST"]
var serverPaths = ["/", "/about", "/contact", "/login", "/panel", "/logout"]
var serverResponses = ["Welcome to WEB700 Assignment 1", "This assignment was prepared by Nathanael Joshua", "Nathanael Joshua: njoshua2@myseneca.ca", "User Logged In", "Main Panel", "Logout Complete"]
// array of verbs and paths to test our functions with
var testVerbs = ["GET", "POST"]
var testPaths = ["/", "/about", "/contact", "/login", "/panel", "/logout", "/randomPath1", "/randomPath2"]

function getRandomInt(max) {
    return Math.floor(Math.random() * max)
}

function httpRequest(verb, path) {
    // compares verbs and paths entered and returns the appropriate response
    for (var i = 0; i < serverPaths.length; i++) {
        if (serverVerbs[i] == verb && serverPaths[i] == path) {
            return `200: ${serverResponses[i]}`
        }
    }
    return `404: Unable to process ${verb} request for ${path}`
}

function automateTests() {
    // automates testing using randomized verbs and paths
    function randomRequest() {
        var randVerb = testVerbs[getRandomInt(2)]
        var randPath = testPaths[getRandomInt(8)]
        console.log(httpRequest(randVerb, randPath))
    }
    setInterval(randomRequest, 1000)
}

automateTests() // starts running the code