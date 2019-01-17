import { ContactPage } from './../contact/contact';
import { AboutPage } from './../about/about';
import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;

  redirectHome(){
    this.navCtrl.push(HomePage);
  }
  redirectAbout(){
    this.navCtrl.push(AboutPage);
  }
  redirectContact(){
    this.navCtrl.push(ContactPage);
  }

}
