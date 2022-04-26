import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { first, map } from 'rxjs';
import { Post } from '..//models/post';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css'],
})
export class AccueilComponent implements OnInit {
  listpost: Post[] =[];
  curPage!: number;
  pageSize!: number;
  id!: number;
  constructor(private postService: PostService, private router: Router) {}

  ngOnInit() {
    this.getPost();
    this.curPage = 1;
    this.pageSize = 20;
  }
  getPost() {
    this.postService
      .getPost()
      .pipe(first())
      .subscribe((listpost) => {
        // if(listpost && listpost.length > 0) {
          this.listpost= listpost
          console.log('listePost',this.listpost);
        // } else {
        //   this.listpost = [];
        // }
      });
  }


  numberOfPages() {
    return Math.ceil(this.listpost.slice(0 , 50).length / this.pageSize);
  }

  
  search() {
    if (this.id != null) {
      this.postService.getPost().pipe(map(listpost => listpost.filter((post :Post) => post.id == this.id))).subscribe(data => {
          this.listpost = data
          for(let i of this.listpost){
            if(i.id == this.id){
              this.router.navigate(['/posts', i.id]);
            }
          }
        });
    } 
  }
}
