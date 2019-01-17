import { GithubServiceProvider } from './../../providers/github-service/github-service';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {

  public repo:any;
  public name:any;

  constructor(public navCtrl: NavController, private navParams: NavParams, public githubService: GithubServiceProvider) {

  }

  ngOnInit(){
    this.repo = this.navParams.data.passData;
    this.name = this.navParams.data.userName;
  }
  
}
