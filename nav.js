$(document).ready(function() {
    addNav("Alert.html")
    addNav("Expand.html")
    addNav("Ajax.html")
    addNav("Tree.html")
})

function addNav(page){
    $("#nav").append("<a href='"+ page + "'>" + page.replace(".html","") + "</a> | ")
}