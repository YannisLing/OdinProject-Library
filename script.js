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




const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, true);
console.log(theHobbit.info());