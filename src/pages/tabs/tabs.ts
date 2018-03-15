import { Component } from '@angular/core';

import { RankingPage } from '../ranking/ranking';
import { StorePage } from "../store/store";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  private items: any[];

  constructor() {
    this.items = [
      {
        page: StorePage,
        title: 'Store',
        icon: 'appstore'
      },
      {
        page: RankingPage,
        title: 'Ranking',
        icon: 'home'
      },
      {
        page: RankingPage,
        title: 'Ranking',
        icon: 'home'
      },
      {
        page: RankingPage,
        title: 'Ranking',
        icon: 'home'
      }
    ];
  }
}
