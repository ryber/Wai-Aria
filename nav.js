$(document).ready(function() {
    addNav("Alert.html", "Alerts")
    addNav("Hide.html", "Hidden")
})

function addNav(page, label){
    $("#nav").append("<a href='"+ page + "'>" + label + "</a> | ")
}