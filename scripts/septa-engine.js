"use strict";
function init(content) {
    console.log("init load");
    console.log(content)
    $(".content").empty();
    $(".content").append(content);
}
let mainContent = "Main Content Loaded";

$(document).ready(function() {
    init(mainContent);
});

