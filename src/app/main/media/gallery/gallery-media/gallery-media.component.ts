import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSelect, MatSelectChange } from '@angular/material';
import { GalleryComponent, GalleryImage, GalleryOptions } from 'ontimize-web-ngx-gallery';

const HTML_DATA = `
<o-gallery #demoGaleria [gallery-images]="galleryImages" [gallery-options]="galleryOptions"></o-gallery>
`;


const TYPESCRIPT_DATA = `
...
ngOnInit(): void {

  this.galleryOptions = [
    {
        height: "600px",
        width: "600px",
        thumbnailsColumns: {{thumbnailsColumns}},
        thumbnailsRows: {{thumbnailsRows}},
        layout:"{{layout}}"
      }
  ];

  this.galleryImages = [
    {
      small: 'https://picsum.photos/id/237/150/100.jpg',
      medium: 'https://picsum.photos/id/237/600/450.jpg',
      big: 'https://picsum.photos/id/237/600/450.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ac nisi nunc. Donec hendrerit lorem nisi, tincidunt maximus purus facilisis ac.'
    },
    {
      small: 'https://picsum.photos/id/1062/150/100.jpg',
      medium: 'https://picsum.photos/id/1062/600/450.jpg',
      big: 'https://picsum.photos/id/1062/600/450.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ullamcorper rhoncus urna id pretium. Donec rhoncus nisl nulla, eu fermentum ligula rutrum ut.'
    },
    {
      small: 'https://picsum.photos/id/1012/150/100.jpg',
      medium: 'https://picsum.photos/id/1012/600/450.jpg',
      big: 'https://picsum.photos/id/1012/600/450.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Ut ac massa semper, facilisis turpis porta, dapibus elit.Integer vestibulum ipsum quis ultricies efficitur.'
    },
    {
      small: 'https://picsum.photos/id/1025/150/100.jpg',
      medium: 'https://picsum.photos/id/1025/600/450.jpg',
      big: 'https://picsum.photos/id/1025/600/450.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vestibulum ex nulla, quis imperdiet ex interdum vel. Duis sit amet placerat purus, quis sodales ante.'
    }
  ];
}
...
`;

@Component({
  selector: 'gallery-media',
  templateUrl: './gallery-media.component.html',
  styleUrls: ['./gallery-media.component.scss']
})
export class GalleryMediaComponent implements OnInit {

  galleryOptions: GalleryOptions[];
  galleryImages: GalleryImage[];

  @ViewChild('layout', { static: true }) layout: MatSelect;
  files = {
    'html': {
      'data': HTML_DATA
    },
    'scss': {
      'data': undefined
    },
    'typescript': {
      'data': TYPESCRIPT_DATA
    }
  };

  @ViewChild('demoGaleria') demoGaleria: GalleryComponent;

  public static getHtml(data: any) {
    let tpl = HTML_DATA;
    return tpl;
  }

  public static getTypescript(data: any) {
    let tpl = TYPESCRIPT_DATA;
    return tpl;
  }

  onShowSource(key: string, exampleComp: any) {
    let typescriptData = TYPESCRIPT_DATA.replace('{{thumbnailsColumns}}', this.layout.value === 'thumbnails-left' || this.layout.value === 'thumbnails-right'?'1':'3').
    replace('{{thumbnailsRows}}', this.layout.value === 'thumbnails-left' || this.layout.value === 'thumbnails-right' ? '3' : '1').
    replace('{{layout}}', this.layout.value);
    this.files.typescript.data = typescriptData;
  }

  ngOnInit(): void {

    this.galleryOptions = [
      {
        height: "600px",
        width: "600px",
        thumbnailsColumns: 3
      }
    ];

    this.galleryImages = [
      {
        small: 'https://picsum.photos/id/237/150/100.jpg',
        medium: 'https://picsum.photos/id/237/600/450.jpg',
        big: 'https://picsum.photos/id/237/600/450.jpg',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ac nisi nunc. Donec hendrerit lorem nisi, tincidunt maximus purus facilisis ac.'
      },
      {
        small: 'https://picsum.photos/id/1062/150/100.jpg',
        medium: 'https://picsum.photos/id/1062/600/450.jpg',
        big: 'https://picsum.photos/id/1062/600/450.jpg',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ullamcorper rhoncus urna id pretium. Donec rhoncus nisl nulla, eu fermentum ligula rutrum ut. Pellentesque tristique consectetur mauris et facilisis. '
      },
      {
        small: 'https://picsum.photos/id/1012/150/100.jpg',
        medium: 'https://picsum.photos/id/1012/600/450.jpg',
        big: 'https://picsum.photos/id/1012/600/450.jpg',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Ut ac massa semper, facilisis turpis porta, dapibus elit.Integer vestibulum ipsum quis ultricies efficitur.'
      },
      {
        small: 'https://picsum.photos/id/1025/150/100.jpg',
        medium: 'https://picsum.photos/id/1025/600/450.jpg',
        big: 'https://picsum.photos/id/1025/600/450.jpg',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vestibulum ex nulla, quis imperdiet ex interdum vel. Duis sit amet placerat purus, quis sodales ante.'
      }
    ];
  }

  changeThumbPosition(event: MatSelectChange) {
    if (event.value === 'thumbnails-left' || event.value === 'thumbnails-right') {
      this.demoGaleria.changeThumbnailsColumns(1);
      this.demoGaleria.changeThumbnailsRows(3);
    } else {
      this.demoGaleria.changeThumbnailsColumns(3);
      this.demoGaleria.changeThumbnailsRows(1);
    }
    this.demoGaleria.changeThumbPosition(event.value)
  }

}
