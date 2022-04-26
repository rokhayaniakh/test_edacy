import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { environment } from 'src/environments/environment';
import { Post } from '../models/post';

import { PostService } from './post.service';

describe('PostService', () => {
  let service: PostService;
  let http :HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, HttpClientModule],
      providers: [PostService],
    });
    service = TestBed.inject(PostService);
    http =TestBed.inject(HttpTestingController);
  });

  
  afterEach(()=>{
    http.verify();
  })

  
});
