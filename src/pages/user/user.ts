import { ProfilePage } from './../profile/profile';
import { GithubServiceProvider } from './../../providers/github-service/github-service';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-user',
  templateUrl: 'user.html',
})
export class UserPage {

  public userDetail:any;
  public repos:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public githubService: GithubServiceProvider) {
  }

  ngOnInit(){
    this.userDetail = this.navParams.data;
  }
  
  viewProfile(repoUrl:string,name:string){
    this.githubService.getAllRepos(repoUrl).subscribe(
          data =>{
            this.repos = data;
            console.log('name:string', name);
            this.navCtrl.push(ProfilePage,{"passData" :this.repos, "userName" : name});
          },
          error => {
            console.log("from error");
          }
        );
  }

}
