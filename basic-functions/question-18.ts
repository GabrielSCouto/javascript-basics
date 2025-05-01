function booksAuthor(books: any[], author: string): any[] {
    let result: any[] = []
    for (let i = 0; i < books.length; i++) {
        if (books[i].author === author) {
            result.push(books[i])
        }
    }
    return result
}

let books = [
    { title: "Book 1", author: "João", year: 2001 },
    { title: "Book 2", author: "Maria", year: 2004 }
]

console.log(booksAuthor(books, "João"))
