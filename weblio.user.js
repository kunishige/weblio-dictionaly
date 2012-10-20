// ==UserScript==
// @name dictionaly
// @namespace local
// @description 
// @include http://ejje.weblio.jp/content/*
// ==/UserScript==

function getword(){
	var url  = location.href.split("/");
	return url[(url.length)-1];
}

localStorage.setItem(getword(),JSON.parse(localStorage.getItem(getword()))+1);
document.getElementById("logoBarR").innerHTML=(JSON.parse(localStorage.getItem(getword())))+"回目の検索";

