import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-ranking',
  templateUrl: 'ranking.html',
})
export class RankingPage {

  private items: any[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RankingPage');

    this.items = this._generateItems();
  }

  getRankText(index: number): string {

    let result = '';

    switch (index) {
      case 1:
        result = 'st'; break;
      case 2:
        result = 'nd'; break;
      case 3:
        result = 'rd'; break;
      default:
        result = 'th'; break;
    }

    return result;
  }

  _generateItems(): any[] {
    const items = [];

    const names = ['actysp', 'Grindhouse', 'Next', 'Ghost Rider', 'Kick-Ass', 'City of Angels'];

    for (let i = 0; i < 30; i++) {
      const random = Math.floor(Math.random() * names.length);
      items.push({
        name: names[random],
        change: Math.floor(Math.random() * 1000000)
      });
    }

    return items;
  }

}
