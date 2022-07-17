import { Component, OnInit } from '@angular/core';
import { BookserviceService } from '../bookservice.service';
import { BookModel } from './book.model';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  title: String="Books List";
  //Product is the model class for a product item
  books: BookModel[]=[];
  imageWidth: number =50;
  imageMargin: number =2;
  //creating service object for calling getproducts

  constructor(private bookService:BookserviceService) { }

  ngOnInit(): void {
    //calling getbooks() and loading the products to books array
    this.bookService.getBooks().subscribe((data)=>{
      this.books =JSON.parse(JSON.stringify(data));
    })
  }

}
