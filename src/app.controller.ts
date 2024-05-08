import { Controller, Delete, Post, Put, Get } from "@nestjs/common";
import { BookService } from "./book.service";

@Controller("book")
export class BookController {
    constructor(private bookService: BookService) {}
    // Add Book
    @Post("/add")
    addBook() : string {
        return this.bookService.addBook();
    }
    // Delete Book.
    @Delete("/delete")
    deleteBook() : string {
        return this.bookService.deleteBook();
    }
    // Update Book.
    @Put("/update")
    updateBook() : string {
        return this.bookService.updateBook();
    }
    // Find Book.
    @Get("/findAll")
    findAllBooks() : string {
        return this.bookService.findBooks();
    }
}