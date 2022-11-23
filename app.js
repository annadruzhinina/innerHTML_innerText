/*
 * You Do: Work through the following prompts. Write your code below each
 * comment.
 */

// 1. Get the element with an ID of "first" and save it to a variable called
//    first (use any method you'd like!).
const idFirst = document.getElementById("first");

console.log(idFirst);
// 2. Print just the text of `first`.
console.log(idFirst.textContent);
// 3. Print the HTML of `first`.
console.log(idFirst.innerHTML);
// 4. Change in textContent of first
console.log((idFirst.textContent = "This text is different"));
//<div id=​"first">​This text is different​</div>​
console.log(idFirst);
// 5. Get the section tag from the page and save it to a variable.
const sectionTag = document.querySelector("section");
console.log(sectionTag);
// 6. Print the text content of the section tag
console.log(sectionTag.textContent);
// 7. Print the HTML content of the section tag
console.log(sectionTag.innerHTML);
// 8. (Stretch) Add a new <a>Content</a> to the innerHTML of the selected section
const newa = (sectionTag.innerHTML = "<a>Content</a>");
console.log(newa);
console.log(sectionTag);

///test
