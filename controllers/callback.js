
// var main = function(title){
//     var tagBody = document.querySelector('body');
//     tagBody.innerHTML = `<h1>${title}</h1>`
// }
// main('Trung');



// --------------------


var renderTitleH1 = function(title){
    var tagBody = document.querySelector('body');
    tagBody.innerHTML = `<h1>${title}</h1>`
}
var main = function(callback){
    callback('Trung');
}
main(renderTitleH1);

// ----------------------
