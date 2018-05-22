import {Injectable} from "@angular/core";
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Injectable()
export class UserDetail{

  data;
  load() {
    // Dont have the data yet
    return new Promise((resolve,reject) => {
      this.http.post('http://localhost/RestApi/details.php',JSON.stringify(this.data), {
        headers: new HttpHeaders().set('Authorization', 'my-auth-token')})
        .subscribe(data => {
          this.data = data;
          resolve(this.data);
        });
    });
  }  
  constructor(public http: HttpClient) {
      
  }


}