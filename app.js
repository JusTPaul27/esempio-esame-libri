fetch('https://gutendex.com/books/')
.then(resp => resp.json()).then(res => displayBooks(res));




function displayBooks(books) {
    const container = document.getElementById('container');
    
    console.log(books.results);

    for (const book of books.results) {
        // console.log(book);
        const bookDiv = document.createElement('div');
        bookDiv.classList.add('book-div');

        const bookName = document.createElement('h2');
        bookName.innerText = book.title;
        bookDiv.appendChild(bookName);

        const cover = document.createElement('img');
        cover.src = book.formats['image/jpeg'];
        cover.classList.add('image');
        bookDiv.appendChild(cover);

        const authorsTitle = document.createElement('div');
        authorsTitle.innerText = 'Autori: ';
        bookDiv.appendChild(authorsTitle);

        const authorDiv = document.createElement('div');
        for (const author of book.authors) {
            const authorLi = document.createElement('div')
            authorLi.innerText = author.name  + ' ' + '(' + author.birth_year + '/' + author.death_year + ')';
            authorDiv.appendChild(authorLi);
            bookDiv.appendChild(authorDiv);

        }

        const subjectTitle = document.createElement('div');
        subjectTitle.innerText = 'Subject: ';
        bookDiv.appendChild(subjectTitle);

        const subjectDiv = document.createElement('ul');
        for (const subject of book.subjects) {
            const subjectLi = document.createElement('li');
            subjectLi.innerText = subject;
            subjectDiv.appendChild(subjectLi);
            bookDiv.appendChild(subjectDiv);
        }

        container.appendChild(bookDiv);

    }
}