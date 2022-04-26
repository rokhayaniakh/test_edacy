import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient,} from '@angular/common/http';
import { Post } from "../models/post"
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

getPost() {
  return this.http.get<Post[]>(environment.apiUrl);
}

detail(id: number): Observable<any> {
  return this.http.get(`${environment.apiUrl}/${id}`);
}

}
