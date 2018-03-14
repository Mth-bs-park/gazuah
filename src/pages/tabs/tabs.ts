import { Component } from '@angular/core';

import { RankingPage } from '../ranking/ranking';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab0Root = RankingPage;

  constructor() {

  }
}
