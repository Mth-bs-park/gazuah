import {Component, Input, OnInit} from '@angular/core';

/**
 * Generated class for the ThumbnailComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'thumbnail',
  templateUrl: 'thumbnail.html'
})
export class ThumbnailComponent implements OnInit{

  @Input() thumbnailSrc: string;
  @Input() flagSrc: string;

  constructor() {}

  ngOnInit(): void {}

}
