import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'thumbnail',
  templateUrl: 'thumbnail.html'
})
export class ThumbnailComponent implements OnInit{

  @Input() thumbnailSrc: string;
  @Input() flagSrc: string;
  @Input() width: number;
  @Input() height: number;

  private thumbnailWidth: string;
  private thumbnailHeight: string;

  private flagWidth: string;
  private flagHeight: string;

  constructor() {}

  ngOnInit(): void {

    const { width, height } = this;
    const _flagWidth = Math.floor(width / 3);
    const _flagHeight = Math.floor(height / 3);

    this.thumbnailWidth = `${width}px`;
    this.thumbnailHeight = `${height}px`;

    this.flagWidth = `${_flagWidth}px`;
    this.flagHeight = `${_flagHeight}px`
  }
}
