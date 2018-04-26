"use strict";

var hours_per_day = 6;

// DOM cache
var articles = document.querySelectorAll(".themes>article")
var themes = document.querySelectorAll('.themes>article>section');
var subThemes = document.querySelectorAll('.themes>article>section>ol');

themes.shown = true;
subThemes.shown = true;


window.onload = function(){
    init();
}
function init(){
    attachEvents();
    setThemeURL();
    setThemeHours();
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
            // console.log("themes type", typeof themes);
            showHideAll( element, themes );
            // alert("Clicked");
        });
    };

    // onclick to toggleThemes
    var togglesubThemes = document.querySelectorAll('.toggleSubThemes');
    // console.log("togglesubThemes:", togglesubThemes);
    for (let i = 0; i < togglesubThemes.length; i++) {
        let element = togglesubThemes[i];
        element.addEventListener( "click", function(){
            // showHideNodes(this.nextElementSibling)
            // console.log("THIS:", this);
            showHideAll( element, subThemes );
            // alert("Clicked");
        });
    };
}

function setThemeURL(){
    // wrap H3 text into link, with href == section.id path
        // <h3 data-wip>__themeTitle__</h3> =>
        // <h3><a title="slides" href="/BKA-Angular/pages/themes/__themeTitle__/__themeTitle__.html">__themeTitle__</a></h3>

    for (let i = 0, len = themes.length; i < len ; i++){
        // do not set link for elements in WIP mode:
        if( themes[i].hasAttribute("data-wip") ){
            continue
        }

        let h3Node = themes[i].querySelector("h3");
        let h3_content = h3Node.innerHTML;

        // get section.id
        let themeTitle = themes[i].id;

        // create link node:
        let aNode = document.createElement('a');
        aNode.setAttribute("title", "slides");
        aNode.href = `/BKA-Angular/pages/themes/${themeTitle}/${themeTitle}.html`;
        aNode.innerHTML = h3_content;

        // append it into h3 node
        h3Node.innerHTML = "";
        h3Node.appendChild(aNode);
    }
}

function setThemeHours(){
    // insert <span class=hours> after each h3 in each section:
    for(let i=0, len=themes.length; i<len; i++){
        // get themes hours from "data-hours" attribute:
        let hours = themes[i].getAttribute("data-hours");

        // create output node:
        var outNode = document.createElement('span');
        outNode.className = 'hours';
        outNode.innerHTML = hours;
        themes[i].children[0].appendChild(outNode);
    }

}
function calcSectionHours(){
    var currentSectionHours = 0;
    for (let i = 0, len = articles.length; i < len ; i++) {
        let sectionHours = 0;

        // create output node:
        var outNode = document.createElement('span');
        outNode.className = 'sectionHours';
        articles[i].children[0].appendChild(outNode);

        // calculate hours per section:
        var topicHoursNodes = articles[i].querySelectorAll(".hours");

        for (let i = 0, len = topicHoursNodes.length; i < len; i++) {
            sectionHours += topicHoursNodes[i].innerHTML*1;
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



