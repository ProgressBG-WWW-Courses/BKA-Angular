"use strict";

var hours_per_day = 4;
var themesNodes = document.querySelectorAll('.themes>article>section');
themesNodes.shown = true;
var subThemesNodes = document.getElementsByClassName('sub_themes');
subThemesNodes.shown = true;


window.onload = function(){
    init();
}
function init(){
    attachEvents();
    setHours();
    calcTotalHours();
    calcTotalDays();
    calcSectionHours();
}
function attachEvents(){
    // onclick to themes/sub-themes titles:
    var titleNodes = document.querySelectorAll('.themes>article>h2, .themes>article h3');
    // console.log("titleNodes:", titleNodes);
    for (let i = 0; i < titleNodes.length; i++) {
        let element = titleNodes[i];
        element.addEventListener( "click", function(){
            // showHideNodes(this.nextElementSibling)
            // console.log("THIS:", this);
            showHideNodes(getNextSiblings(this));
        });
    };


    // onclick to toggleThemes
    var toggleThemesNodes = document.querySelectorAll('.toggleThemes');
    // console.log("toggleThemesNodes:", toggleThemesNodes);
    for (let i = 0; i < toggleThemesNodes.length; i++) {
        let element = toggleThemesNodes[i];
        element.addEventListener( "click", function(){
            // showHideNodes(this.nextElementSibling)
            // console.log("themesNodes type", typeof themesNodes);
            showHideAll( element, themesNodes );
            // alert("Clicked");
        });
    };

    // onclick to toggleThemes
    var toggleSubThemesNodes = document.querySelectorAll('.toggleSubThemes');
    // console.log("toggleSubThemesNodes:", toggleSubThemesNodes);
    for (let i = 0; i < toggleSubThemesNodes.length; i++) {
        let element = toggleSubThemesNodes[i];
        element.addEventListener( "click", function(){
            // showHideNodes(this.nextElementSibling)
            // console.log("THIS:", this);
            showHideAll( element, subThemesNodes );
            // alert("Clicked");
        });
    };
}
function setHours(){
    // get sections:
    var sections = document.querySelectorAll(".themes>article");

    // insert <span class=hours> after each h3
    for (let i = 0, len = sections.length; i < len ; i++) {
        console.log(`section: ${sections[i]}`);
        // create output node:
        var outNode = document.createElement('span');
        outNode.className = 'Hours';
        sections[i].children[0].appendChild(outNode);
    }

}
function calcSectionHours(){
    // get sections:
    var sections = document.querySelectorAll(".themes>article");

    var currentSectionHours = 0;
    for (let i = 0, len = sections.length; i < len ; i++) {
        let sectionHours = 0;

        // create output node:
        var outNode = document.createElement('span');
        outNode.className = 'sectionHours';
        sections[i].children[0].appendChild(outNode);

        // calculate hours per section:
        var topicHoursNodes = sections[i].querySelectorAll(".hours");
        for (let i = 0, len = topicHoursNodes.length; i < len; i++) {
            sectionHours += topicHoursNodes[i].childNodes[0].nodeValue*1;
        }

        currentSectionHours += sectionHours;

        // output
        outNode.title = "hours:" + currentSectionHours;
        outNode.title += "\n"+"day:" + currentSectionHours/hours_per_day;

        outNode.innerHTML = "Total Section Hours: " + sectionHours;
    };
}
function calcTotalHours(){
    var out_node = document.getElementById("total_hours");
    var hours_nodes = document.getElementsByClassName("hours");
    var total = 0;
    for (var i = 0; i < hours_nodes.length; i++) {
        var theme_hours = hours_nodes[i].innerHTML*1 || 0; // cause of NaN
        total += theme_hours;
        // console.log("total hours=", total);
    };
    out_node.innerHTML = total;
}
function calcTotalDays(){
    var hours_nodes = document.getElementsByClassName("hours");
    var out_node = document.getElementById("total_days");
    var current_hours = 0;
    var total_days = 0;
    for (var i = 0; i < hours_nodes.length; i++) {
        var theme_hours = hours_nodes[i].innerHTML*1 || 0; // cause of NaN
        current_hours += theme_hours;

        // calculate current days and show it as tooltip
        var current_days;
        // if ( current_hours % hours_per_day > 0){
        //     current_days = Math.floor( current_hours / hours_per_day) + 1;
        // }else{
        //     current_days = Math.floor( current_hours / hours_per_day);
        // }

        // do not round:
        current_days = current_hours / hours_per_day;

        // output
        hours_nodes[i].title = "hours:" + current_hours;
        hours_nodes[i].title += "\n"+"day:" + current_days;

        total_days = current_days;
    };
    // calculate total days
    out_node.innerHTML = total_days;
}

function showHideAll( clicked_node, effected_nodes ){
    // console.log("BEFORE: effected_nodes.shown: ", effected_nodes.shown);
    // console.log("clicked_node: ", clicked_node);
    // console.log("effected_nodes: ", effected_nodes);
    // init static flag to show or hide all
    // showHideAll.show = (typeof showHideAll.show == 'undefined' ) ? false : showHideAll.show;
    if (effected_nodes.shown) {
        hideAllNodes(effected_nodes);
        effected_nodes.shown = false;
        clicked_node.title = 'Hide Subtopics';
    }else{
        showAllNodes(effected_nodes);
        effected_nodes.shown = true;
        clicked_node.title = 'Show Subtopics';
    }
    // console.log("effected_nodes.shown: ", effected_nodes.shown);
}
function showAllNodes ( effected_nodes){
    for (var i = 0; i < effected_nodes.length; i++) {
        showNode(effected_nodes[i]);
    };
}
function hideAllNodes ( effected_nodes){
    for (var i = 0; i < effected_nodes.length; i++) {
        hideNode(effected_nodes[i]);
    };
}
function showHideNodes(effected_nodes){
    // console.log('showHideNode - effected_nodes:'+effected_nodes);
    effected_nodes.forEach( function(effected_node){
        if ( effected_node.classList.contains("hidden") ){
            showNode(effected_node);
            effected_node.previousElementSibling.title = 'Hide Subtopics';
        }else {
            hideNode(effected_node);
            effected_node.previousElementSibling.title = 'Show Subtopics';
        }
    });
}
function showNode(effected_node){
    // console.log("showNode IN: effected_node", effected_node);
    // show node
    // effected_node.style.display = 'block';
    effected_node.classList.remove("hidden");

    // change title of the H3 element
    effected_node.parentElement.getElementsByTagName("h3")[0].title = 'Hide Subtopics';
    // change arrow
    var arr_node = effected_node.parentElement.getElementsByTagName("h3")[0];
    // console.log("arr_node:", arr_node);
    changeArrow( arr_node, 'up');
};
function hideNode (effected_node) {
    // console.log("hideNode IN: effected_node", effected_node);
    // hide node
    // effected_node.style.display = 'none';
    effected_node.classList.add("hidden");

    // change title of the H3 element
    effected_node.parentElement.getElementsByTagName("h3")[0].title = 'Show Subtopics';
    // change arrow
    var arr_node = effected_node.parentElement.getElementsByTagName("h3")[0];
    // console.log("arr_node:", arr_node);
    changeArrow( arr_node, 'down');
}
function changeArrow ( node, direction ) {
    if ( direction == 'up' ){
        node.classList.remove("arrow_down");
        node.classList.add("arrow_up");
    }else{
        node.classList.remove("arrow_up");
        node.classList.add("arrow_down");
    }
}



