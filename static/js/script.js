/*jslint esversion: 8 */
/*jslint devel: true */
/*jslint node: true */
/*jslint for: true */
/*jshint: -W109 -W085*/
/*jslint: white:true; */
/*eslint semi: "error" */
/*eslint quotes: ["Error","double"] */
/*eslint no-var:"error" */
/*eslint-env es6 */
/*eslint spaced-comment: ["error","never"] */
/*eslint indent: "off" */
/*eslint space-before-function-paren: ["error","never"] */
/*eslint eol-last: ["error","never"] */
/*eslint prefer-const: "error"*/
/*eslint camelcase: "off"*/
/// <reference path="jquery-3.6.0.js" />

const getVideogames = document.getElementById("getVideogames");
const Videogames_Videogames_Get_content = document.getElementById("Videogames_Videogames_Get_content");
const model = document.getElementById("model");
const example = document.getElementById("example");
const snippet = document.getElementById("snippet");
const description = document.getElementById("description");
//const code = document.getElementById("code");
const input = document.getElementById("input");
const videoGameId = document.getElementById("videoGameId");
const form = document.getElementById("form");
const error_form = document.getElementById("error-form");

fetch("http://127.0.0.1:5000/jeux.json")
    .then(response => response.json())
    .then(data => {
        videoGameId.max = Object.keys(data).length;
    });

getVideogames.addEventListener("click", function() {
    if (Videogames_Videogames_Get_content.style.display === "block") {
        Videogames_Videogames_Get_content.style.display = "none";
    } else {
        Videogames_Videogames_Get_content.style.display = "block";
    }
});

model.addEventListener("click", function() {
    if (description.style.display === "none") {
        snippet.style.display = "none";
        description.style.display = "block";
        model.style.color = "black";
        example.style.color = "#AAA";
    }
});

example.addEventListener("click", function() {
    if (snippet.style.display === "none") {
        description.style.display = "none";
        snippet.style.display = "block";
        example.style.color = "black";
        model.style.color = "#AAA";
    }
});

input.addEventListener("click", function() {
    const id = videoGameId.value;
    fetch("http://127.0.0.1:5000/jeux.json")
        .then(response => response.json())
        .then(data => {
            console.log(data);
            const keyCount = Object.keys(data).length;
            if (id < 0) {
                error_form.textContent = "ERROR l'id est supérieur à 0";
            } else if (id > keyCount) {
                error_form.textContent = "ERROR l'id est inféérieur à " + keyCount;
            } else {
                const url = "http://127.0.0.1:5000/id=" + id;
                form.action = url;
                form.submit();
            }
        });
    //getVideogameById(id);
    //On crée une fonction pour récupérer le texte que l'on veut mettre
});