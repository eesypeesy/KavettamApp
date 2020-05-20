let id,part;
function ruleIt(id) {
    if(document.getElementById(id).style.display == "none"){
        showRules(id);
    }else{
        hideRules(id);
    }
}
function showRules(id){
    document.getElementById(id).style.display = "block";
}
function hideRules(id) {
    document.getElementById(id).style.display = "none";
}
function show(part){
    if(document.getElementById(part).style.display == "none") {
        document.getElementById(part).style.transition = "display 1s ease";
        document.getElementById(part).style.display = "block"; 
    }else{
        document.getElementById(part).style.display = "none";
    }
}