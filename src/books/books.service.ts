import { Injectable, HttpException } from '@nestjs/common';
import { BOOKS } from '../mock/books.mock';

@Injectable()
export class BooksService {
  books = BOOKS;
  getBooks(): Promise<any> {
    return new Promise(resolve => {
      resolve(this.books);
    });
  }
  getBook(bookID): Promise<any> {
    const id = Number(bookID);
    return new Promise(resolve => {
      const book = this.books.find(book => book.id === id);
      if (!book) {
        throw new HttpException('Book does not exist!', 404);
      }
      resolve(book);
    });
  }
  addBook(book): Promise<any> {
    return new Promise(resolve => {
      this.books.push(book);
      resolve(this.books);
    });
  }
}
