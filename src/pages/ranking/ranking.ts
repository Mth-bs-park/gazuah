import {Component, ElementRef, ViewChild} from '@angular/core';
import { IonicPage, NavController, NavParams, Content } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-ranking',
  templateUrl: 'ranking.html',
})
export class RankingPage {

  standard: string = 'weekly';

  items = [];

  @ViewChild(Content) content: Content;
  @ViewChild('rankWrap') rankWrap: ElementRef;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.items = [
      'Pokémon Yellow',
      'Super Metroid',
      'Mega Man X',
      'The Legend of Zelda',
      'Pac-Man',
      'Super Mario World',
      'Street Fighter II',
      'Half Life',
      'Final Fantasy VII',
      'Star Fox',
      'Tetris',
      'Donkey Kong III',
      'GoldenEye 007',
      'Doom',
      'Fallout',
      'GTA',
      'Halo'
    ];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Rank2Page');
    // scroll height 가 생길때, style 에 height 값 적용될때 해당부분이 풀리지 않아 이렇게 변경
    setTimeout(()=>{
      this.rankWrap.nativeElement.classList.add('my-rank-wrap');
    },100);
  }

  doInfinite(infiniteScroll) {
    console.log('Begin async operation');

    setTimeout(() => {
      for (let i = 0; i < 30; i++) {
        this.items.push( this.items[i] );
      }

      console.log('Async operation has ended');
      infiniteScroll.complete();
    }, 500);
  }

}
