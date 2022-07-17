import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BlogDataService } from '../blog-data.service';


@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  BlogData = {
    BlogAuth : '',
    BlogImg  : '',
    BlogHead : '',
    BlogDesc : '',
    BlogCont : ''
  }

  constructor(private router:Router, private blogDataService:BlogDataService) { }

  title:string='update form'
  ngOnInit(): void {
    let blogid = localStorage.getItem("editBlogId");
    console.log('1-data got');
    this.blogDataService.singleData(blogid).subscribe((data)=>{
      this.BlogData=JSON.parse(JSON.stringify(data));
    })
  }

  editBlogData(){
    this.blogDataService.editBlogData(this.BlogData);
    alert("success");
    this.router.navigate(['/']);
    
  }


}
