import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the StorePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-store',
  templateUrl: 'store.html',
})
export class StorePage {

  private boosts: any[];
  private points: any[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StorePage');
    this.boosts = this._generateBoosts();
    this.points = this._generatePoints();
  }

  _generateBoosts() {
    let boosts;
    boosts = [
      { isAlarm: true },
      { isAlarm: false, label: '+10% for an hr', cost: '1.99', info: ''}
    ];
    return boosts;
  }

  _generatePoints() {
    let points;
    points = [
      { label: '1000 + 200 G', cost: 0.99, info: ''},
      { label: '1000 + 200 G', cost: 2.99, info: ''},
      { label: '1000 + 200 G', cost: 4.99, info: ''},
      { label: '1000 + 200 G', cost: 9.99, info: ''},
      { label: '1000 + 200 G', cost: 99.99, info: ''},

    ];
    return points;
  }

  buy(e: Event) {
    console.log('buy', e);
  }

}
