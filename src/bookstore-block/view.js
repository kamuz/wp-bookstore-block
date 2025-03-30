document.addEventListener("DOMContentLoaded", function () {
    const bookstoreBlock = document.querySelectorAll(".bookstore-block");

    bookstoreBlock.forEach((block) => {
        fetch('/wp-json/wp/v2/books')
            .then(response => response.json())
            .then(books => {
                if (!books) return;

                block.innerHTML = books
                    .map(book => `<li><a href="${book.link}">${book.title.rendered}</a></li>`)
                    .join('');
            })
            .catch(error => {
                console.error('Error fetching books:', error);
                block.innerHTML = '<li>Error loading books.</li>';
            });
    });
});