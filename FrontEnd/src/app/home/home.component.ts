import { Component, OnInit } from '@angular/core';
import {BlogDataService} from '../blog-data.service'
import { BlogModel } from './BlogModel';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title: String = "Product List";
  Blogs: BlogModel[] | any;



  constructor(private blogDataService: BlogDataService, public router:Router) { }

  ngOnInit(): void {
    this.blogDataService.getBlogDatas().subscribe((data)=>{
      this.Blogs = JSON.parse(JSON.stringify(data));
    })



  }

  deleteBlogData(id:any){
    this.blogDataService.deleteBlogData(id)
    .subscribe(data =>{
      this.Blogs = this.Blogs.filter(p => p !== id);
      // alert("data deleted successfully...")
      // this.router.navigate(['/']);
    })

  }

  editBlogData(i:any)
  {
    localStorage.setItem("editBlogId", i._id.toString());
    this.router.navigate(['blog']);
  }

  Like(){
    
  }


}

