(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
let Phrase = require("ozemmouri-palindrome");
let string = prompt("Please enter a string for palindrome testing.");


let phrase = new Phrase(string);
if (phrase.palindrome()) {
  alert(`"${phrase.content}" is a palindrome`);
} else {
  alert(`"${phrase.content}" is not a palindrome`);
}
},{"ozemmouri-palindrome":2}],2:[function(require,module,exports){
module.exports = Phrase;

//Add `reverse`to all string
String.prototype.reverse = function() {
  return Array.from(this).reverse().join("");
}

//Defines a Phrase object
function Phrase(content) {
  this.content = content;

  this.processor = function(string) {
    return string.toLowerCase();
  }

  //Return content processed for palindrome
  this.processedContent = function processedContent() {
    return this.processor(this.letters());
  }
  
  //Return only the letters in the content
  this.letters = function letters() {
    return (this.content.match(/[a-z]/gi) || []).join("");
  }


  //Return true for a palindrome, false otherwise
  this.palindrome = function palindrome() {
    return this.processedContent() === this.processedContent().reverse();
  }

  //Make the phrase Lounder
  this.louder = function() {
    return this.content.toUpperCase();
  }
}

//Defines a TranslatedPhrase object
function TranslatedPhrase(content, translation) {
  this.content = content;
  this.translation = translation;

  //Returns translation processed for palindrome testing
  this.processedContent = function processedContent() {
    return this.processor(this.translation);
  }
}

TranslatedPhrase.prototype = new Phrase ();

//Add a Blank method
String.prototype.blank = function() {
  return !!this.match(/^\s+$/g);
}

//Add `last`method that gives us the last element of an Array
Array.prototype.last = function() {
  return this[this.length - 1];
}

Array.prototype.lastUsingSlicing = function() {
  return this.slice(-1)[0];
}
},{}]},{},[1]);
