$(document).ready(function() {
    addNav("Example1.html", "Alerts")
    addNav("Example2.html", "Hidden")
})

function addNav(page, label){
    $("#nav").append("<a href='"+ page + "'>" + label + "</a> | ")
}