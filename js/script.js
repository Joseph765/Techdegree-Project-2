const studentListItems = document.querySelectorAll('li.student-item'); //two global variables
const pageNumberLimit = 10;

//this loop hides all student lists
for (let i = 0; i < studentListItems.length; i += 1) {
  studentListItems[i].style.display = 'none';
}

// this function displays according to the list length on the page, and the page number

function showPage(list, page) {
  const startIndex = (page * list) - list;
  const endIndex = page * list;
  for(let i = startIndex; i < endIndex; i += 1) {
    studentListItems[i].style.display = 'block';
  }
}

// this function appends the links to the DOM and adds functionality

function appendPageLinks(list) {
  const numberOfPages = list.length / pageNumberLimit;
  const parentDiv = document.querySelector('div.page');
  const div = document.createElement('div');
  div.className = "pagination";
  parentDiv.appendChild(div);
  const ul = document.createElement('ul');
  div.appendChild(ul);
  for (let i = 1; i < numberOfPages; i += 1) {
    const li = document.createElement('li');
    ul.appendChild(li);
    const a = document.createElement('a');
    li.appendChild(a);
    a.textContent = i;
    a.href = "#";
    ul.addEventListener('click', (e) => {
      if (e.target.tagName === 'a') {
        const activeLink = e.target;
        activeLink.className = "active";
      }
    });
  }
}

appendPageLinks(studentListItems);




/***
   Create the `appendPageLinks function` to generate, append, and add
   functionality to the pagination buttons.
***/
