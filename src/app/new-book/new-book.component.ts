import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BookserviceService } from '../bookservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-book',
  templateUrl: './new-book.component.html',
  styleUrls: ['./new-book.component.css']
})
export class NewBookComponent implements OnInit {

  constructor(private bookService: BookserviceService, private router: Router) { }
  bookItem={
    bookId:'',
    bookName:'',
    Author:'',
    description:'',
    imageUrl:''
  }
  ngOnInit(): void {
  }
  AddBook(){
    this.bookService.newBook(this.bookItem);
    console.log("called");
    alert("Book addition Success");
    this.router.navigate(['books']);
  }

}
