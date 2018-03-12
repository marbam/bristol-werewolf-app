import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
// import { IntroPage } from '../intro/intro';
import { IndexPage } from '../index/index';
import { ConceptsPage } from '../concepts/concepts';
import { EtiquettePage } from '../etiquette/etiquette';


/**
 * Generated class for the MenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuPage');
  }

  goToEtiquette() {
  	this.navCtrl.push(EtiquettePage);
  }

  goToIndex() {
  	this.navCtrl.push(IndexPage);
  }

  goToConcepts() {
  	this.navCtrl.push(ConceptsPage);
  }
}

