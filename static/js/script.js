/*jslint esversion: 8 */
/*jslint devel: true */
/*jslint node: true */
/*jslint for: true */
/*jshint: -W109 */
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

const getVideogames = document.getElementById("getVideogames");
const Videogames_Videogames_Get_content = document.getElementById("Videogames_Videogames_Get_content");

getVideogames.addEventListener("click", function() {
    if (Videogames_Videogames_Get_content.style.display === "block") {
        Videogames_Videogames_Get_content.style.display = "none";
    } else {
        Videogames_Videogames_Get_content.style.display = "block";
    }
});