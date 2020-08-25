import { Controller, Get, Param, Body, Post } from '@nestjs/common';
import { BooksService } from './books.service';
import { CreateBookDTO } from './dto/create-book.dto';

@Controller('books')
export class BooksController {
  constructor(private booksService: BooksService) {}
  @Get()
  async getBooks() {
    const books = await this.booksService.getBooks();
    return books;
  }
  @Get(':bookID')
  async getBook(@Param('bookID') bookID) {
    const book = await this.booksService.getBook(bookID);
    return book;
  }
  @Post()
  async addBook(@Body() createBookDTO: CreateBookDTO) {
    console.log(createBookDTO);
    const book = await this.booksService.addBook(createBookDTO);
    return book;
  }
}
