import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';

/*
  Generated class for the GithubServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GithubServiceProvider {

  constructor(public http: HttpClient) {
    console.log('Hello GithubServiceProvider Provider');
  }

  public getUsers(): Observable<any>{
    return this.http.get("https://api.github.com/users")
    .map(response  => response);
  }

  public getUserByLoginName(name:string){
    return this.http.get("https://api.github.com/search/users?q=" + name + "+in:login")
    .map(response  => response);
  }

  public getUserDetails(url:string){
    return this.http.get(url)
    .map(response  => response);
  }

  public getAllRepos(url:string){
    return this.http.get(url)
    .map(response  => response);
  }
  
}
