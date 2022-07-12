import { Component, OnInit, ViewChild } from '@angular/core';
import { GalleryComponent, GalleryImage, GalleryImageSize, GalleryOptions } from 'ontimize-web-ngx-gallery';

const HTML_DATA = `
<o-gallery #demoGaleria [gallery-images]="galleryImages" [gallery-options]="galleryOptions"></o-gallery>
`;


const TYPESCRIPT_DATA = `
...
ngOnInit(): void {

  this.galleryOptions = [
    {
     breakpoint: 1720,
        height: "600px",
        width: "600px",
        imagePercent: 100,
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

  @ViewChild('demoGaleria', { static: false }) demoGaleria: GalleryComponent;

  public static getHtml(data: any) {
    let tpl = HTML_DATA;
    return tpl;
  }

  onShowSource(key: string, exampleComp: any) {
    const itemData: any = {};
    exampleComp.html = GalleryMediaComponent.getHtml(itemData);
  }

  ngOnInit(): void {

    this.galleryOptions = [
      {
        breakpoint: 1720,
        height: "600px",
        width: "600px",
        imagePercent: 100,
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

}
