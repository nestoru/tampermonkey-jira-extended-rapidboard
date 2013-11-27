// ==UserScript==
// @name       JIRA Extended Kanban Board
// @require    http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js
// @include    */secure/RapidBoard*
// @namespace  http://sample.com/
// @version    0.1
// @description  JIRA Extended Kanban Board
// @copyright  2013+, Public
// ==/UserScript==

setTimeout(function() {
   var clone = $("#ghx-column-header-group").clone();
   clone.attr("id", "newHeader").css("background", "#FFF").css("position",     "absolute").css("width", "1465px").css("margin-top", "-90px");

   $("#ghx-column-header-group").remove();
   $("#ghx-rabid").append(clone);
   $("#ghx-pool").css("width", "1500px");
   $("body").removeClass("ghx-scroll-columns").css("overflow-y", "hidden !important");
   $("#ghx-work").attr("id", "ghx-work1").css("overflow-x", "scroll").css("overflow-y", "hidden").width("4000px");
}, 1000);
