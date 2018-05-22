import {Injectable} from "@angular/core";
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Injectable()
export class UserService{

  data;
  load() {
    if (this.data) {
      return Promise.resolve(this.data);
    }
    // Dont have the data yet
    return new Promise(resolve => {
      this.http.post('http://localhost/RestApi/index.php',JSON.stringify(this.data), {
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