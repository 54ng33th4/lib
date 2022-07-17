import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BlogModel } from './home/BlogModel';

var Blogs = BlogModel;
@Injectable({
  providedIn: 'root'
})
export class BlogDataService {

  constructor(public http: HttpClient) { }
  getBlogDatas() {
    return this.http.get('http://localhost:3000/Blogs');
  }


  
  addBlogData(item){
    console.log("added");
    return this.http.post('http://localhost:3000/add',{'item':item})
    .subscribe((data)=>{
      console.log(data);
    console.log(item)

    })
    
  }

  
  deleteBlogData(id:any)
  {

    return this.http.delete("http://localhost:3000/remove/"+id)

  }

  singleData(id:any) {
    return this.http.get("http://localhost:3000/Blog/"+id);
  }
  editBlogData(i:any){
    console.log("updated")
    return this.http.put("http://localhost:3000/edit",i)
    .subscribe(data =>{console.log(data)})
  }

}
