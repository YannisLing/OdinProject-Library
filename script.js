const myLibrary = [];

function Book(title, author, pages, isreade) {
    if (!new.target) {
        throw Error("你必须使用new调用这个对象构造函数")
    }
    this.title = title;
    this.author = author;
    this.numberOfPages = pages;
    this.isreade = isreade;
    this.id = crypto.randomUUID();
    this.info = function () {
        if (this.isreade) {
            return (`id:${this.id} ${title} by ${author}, ${pages} pages, have been readed`);
        } else {
            return (`id:${this.id} ${title} by ${author}, ${pages} pages, not read yet`);
        }

    }
}

function addBookToLibrary(title, author, pages, isreade) {
    const newBook = new Book (title, author,pages,isreade);
    myLibrary.push(newBook);
}

addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 295, true);
addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 295, true);
addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 295, true);
addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 295, true);


function showBooks(myLibrary){
    const parent = document.querySelector('.box2');
    const parent2 = document.querySelector('ul')
    for(item of myLibrary){
        
        const newElement = document.createElement('div');
        const newElement2 = document.createElement('li');
        newElement.className='card'
        newElement.innerHTML = 
        `
        <div>titie: ${item.title}</div>
        <div>author: ${item.author}</div>
        <div>number of pages: ${item.numberOfPages}</div>
        <div>isreade: ${item.isreade}</div>
        <div>id: ${item.id}</div>
        `;
        newElement2.innerHTML=`<a href="#">⭐${item.title}</a>`
        parent.appendChild(newElement);
        parent2.appendChild(newElement2);
    }
}
showBooks(myLibrary);

const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, true);
console.log(theHobbit.info());