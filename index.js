let count = 0;/*iniatializing count*/
let saveEl = document.getElementById("save-el");/*defining variable for this
"save-el" id */


function increment(){
    count += 1;
    document.getElementById("count-el").innerHTML=count;
}

/* In increment fn it count the clicks and affect it in html tag<h2>
Then, we save the last updated count variable to save fn and rendering in the
<p> tag using string concatenation. Without modifing innerHtml we concate
the last count(previous entries with that text) */
function save(){
    let entries = " " +count + " - ";
    saveEl.innerText += entries;
    document.getElementById("count-el").innerHTML=0;
   
}

