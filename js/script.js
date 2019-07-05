const studentListItems = document.querySelectorAll('li.student-item'); //two global variables
const pageNumberLimit = 10;
const studentName = document.querySelectorAll('h3');
const headDiv = document.querySelector('div.page-header.cf');

// this function displays according to the list length on the page, and the page number

function hideAllStudents() {  //this function hides all students
  for (let i = 0; i < studentListItems.length; i += 1) { //this loop hides all student lists
    studentListItems[i].style.display = 'none';
  }
}

function showPage(list, page) {
  const startIndex = (page * pageNumberLimit) - pageNumberLimit;
  const endIndex = page * pageNumberLimit;
  hideAllStudents();
  for(let i = startIndex; i < endIndex; i += 1) {
    if (list[i]) {
      list[i].style.display = 'block';
    }
  }
}



function addSearchBar() {
  const parentDiv = document.querySelector('div.page-header');
  const div = document.createElement('div');
  parentDiv.appendChild(div);
  div.className = 'student-search';
  const input = document.createElement('input');
  div.appendChild(input);
  input.placeholder = 'Search for students...';
  const button = document.createElement('button');
  div.appendChild(button);
  button.textContent = 'Search';
  button.addEventListener('click', (e) => {
    hideAllStudents();
    let searchResults = [];
    for (let i = 0; i < studentListItems.length; i += 1) {
      if (studentName[i].textContent.toUpperCase().includes(input.value.toUpperCase()) ) {
        studentName[i].style.display = 'block';
        searchResults.push(studentListItems[i]);
      }
    }
    const h2 = document.createElement('h2');
    const br = document.createElement('br');
    const br2 = document.createElement('br');
    if (searchResults.length === 0) {
      headDiv.appendChild(br);
      headDiv.appendChild(br2);
      headDiv.appendChild(h2);
      h2.textContent = 'No results were found';
    }
    showPage(searchResults, 1);
    const otherDiv = document.querySelector('div.pagination');
    const otherUl = document.querySelector('ul.pagination');
    otherDiv.removeChild(otherUl);
    appendPageLinks(searchResults);
  });
}

// this function appends the links to the DOM and adds functionality

function appendPageLinks(list) {
  const numberOfPages = (list.length / pageNumberLimit);
  const parentDiv = document.querySelector('div.page');
  const div = document.createElement('div');
  div.className = "pagination";
  parentDiv.appendChild(div);
  const ul = document.createElement('ul');
  div.appendChild(ul);
  ul.className = "pagination";
  for (let i = 0; i < numberOfPages; i += 1) {
    const li = document.createElement('li');
    ul.appendChild(li);
    const a = document.createElement('a');
    li.appendChild(a);
    a.textContent = i + 1;
    a.href = "#";
  }
    ul.addEventListener('click', (e) => {
        const a = ul.querySelectorAll('a');
        for (let i = 0; i < a.length; i += 1) {
          a[i].className = '';
        }
        const activeLink = e.target;
        activeLink.className = "active";
        showPage(list, parseInt(activeLink.textContent));
    });
  }

appendPageLinks(studentListItems);
showPage(studentListItems, 1); //calling the function to display the first page initially
addSearchBar();
