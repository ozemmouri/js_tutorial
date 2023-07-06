let states = ["Kansas", "Nebraska","North Dakota", "South Dakota"];

// Returns a URL-friendly version of a string.
//  Example: "North Dakota" -> "north-dakota"
function urlify(string) {
  return string.toLowerCase().split(/\s+/).join("-");
}

// urls: Imperative version
function imperativesUrls (elements) {
  urls = [];
  elements.forEach(function(element) {
    urls.push(urlify(element));
  });
  return urls;
}
console.log(imperativesUrls(states));


//urls: Functional version
function functionalUrls(elements) {
  return elements.map(element => urlify(element));
}
console.log(functionalUrls(states));

//return Urls of the form https://example.com/<urlified form>
function newUrlsform(elements) {
  return elements.map(element => "https://example.com/"+urlify(element));
}
console.log(newUrlsform(states));

//singles: Imperative version
function imperativeSingles(elements) {
  let singles = [];
  elements.forEach(function(element) {
    if (element.split(/\s+/).length === 1) {
      singles.push(element);
    } 
  });
  return singles;
}
console.log(imperativeSingles(states));

//singles: Functional version
function functionalSingles(elements) {
  return elements.filter(element => element.split(/\s+/).length === 1);
}
console.log(functionalSingles(states));

//filtering with presence of Dakota v1
function usingIncludes(elements) {
  return elements.filter(element => element.includes('Dakota'));
}
console.log(usingIncludes(states));

//filtering with length of array being 2
function withLengthOfArray(elements) {
  return elements.filter(element => element.split(/\s+/).length === 2);
}
console.log(withLengthOfArray(states));

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//sum: Imperative Solution
function imperativeSum (elements) {
  let total = 0;
  elements.forEach(function(n){
    total += n;
  });
  return total;
}
console.log(imperativeSum(numbers));

//sum: Functional Solution
function functionalSum(elements) {
  return elements.reduce((total, n) => {
    return total += n;
  });
}
console.log(functionalSum(numbers));

//lengths: Imperative method
function imperativeLengths(elements) {
  let lengths = [];
  elements.forEach(function(element) {
    lengths[element] = element.length;
  });
  return lengths;
}
console.log(imperativeLengths(states));

//lengths: Functional method
function functionalLengths(elements) {
  return elements.reduce((lengths, element) => {lengths[element] = element.length; return lengths;}, {})
}
console.log(functionalLengths(states));

//Product of all the element of an array
let toCalcul = [1, 2, 3, 4];
function productOfAnArray(elements) {
  return elements.reduce((product, n) => {
    return product *= n;
  }, 1); 
}
console.log(productOfAnArray(toCalcul));