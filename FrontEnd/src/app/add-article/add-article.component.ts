import { Component, OnInit } from '@angular/core';
import { BlogDataService } from '../blog-data.service'
import { BlogModel } from '../home/BlogModel';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.css']
})
export class AddArticleComponent implements OnInit {

  title:string = "Add Your thought"
  // null:string='';
  // content:string=''

  BlogDataitem = new BlogModel("", "", "", "", "");

  constructor(private blogDataService:BlogDataService, public router:Router) { }

  


  ngOnInit(): void {
  }

  NewBlog(){
    console.log("form submitted to function");
    this.blogDataService.addBlogData(this.BlogDataitem);
    console.log("called")
    alert("new data added");
    this.router.navigate(['/']);
  }


}
