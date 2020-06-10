import { Component, OnInit } from '@angular/core';
import { GalleryImage, GalleryOptions } from 'ontimize-web-ngx-gallery';

const HTML_DATA = `
<o-row style="height: 400px">
  <o-column fxFlex="30" title="GALLERY.NORMAL">
    <o-gallery [gallery-images]="galleryImages" [gallery-options]="galleryOptions1"></o-gallery>
  </o-column>
  <o-column fxFlex="30" title="GALLERY.ONLYIMAGE">
    <o-gallery [gallery-images]="galleryImages" [gallery-options]="galleryOptions2"></o-gallery>
  </o-column>
  <o-column fxFlex="30" title="GALLERY.ONLYIMAGEANDPREVIEW">
    <o-gallery [gallery-images]="galleryImages" [gallery-options]="galleryOptions3"></o-gallery>
  </o-column>
</o-row>
<o-row style="height: 400px">
  <o-column fxFlex="30" title="GALLERY.ONLYTHUMB">
    <o-gallery [gallery-images]="galleryImages" [gallery-options]="galleryOptions4"></o-gallery>
  </o-column>
  <o-column fxFlex="30" title="GALLERY.NOTHINGPREV">
    <o-gallery [gallery-images]="galleryImages" [gallery-options]="galleryOptions5"></o-gallery>
  </o-column>
  <o-column fxFlex="30" title="GALLERY.AUTOPLAYPREV">
    <o-gallery [gallery-images]="galleryImages" [gallery-options]="galleryOptions6"></o-gallery>
  </o-column>
</o-row>
`;

const TYPESCRIPT_DATA = `
import { GalleryImage, GalleryOptions } from 'ontimize-web-ngx-gallery';

...
galleryOptions1: GalleryOptions[];
galleryOptions2: GalleryOptions[];
galleryOptions3: GalleryOptions[];
galleryOptions4: GalleryOptions[];
galleryOptions5: GalleryOptions[];
galleryOptions6: GalleryOptions[];
galleryImages: GalleryImage[];
....
ngOnInit(): void {
  this.galleryOptions1 = [
    {
      breakpoint: 1920,
      height: "200px",
      width: "300px",
    }
  ];

  this.galleryOptions2 = [
    {
      breakpoint: 1920,
      height: "200px",
      width: "300px",
      image: true,
      thumbnails: false,
      preview: false
    }
  ];

  this.galleryOptions3 = [
    {
      breakpoint: 1920,
      height: "200px",
      width: "300px",
      image: true,
      thumbnails: false,
      preview: true
    }
  ];

  this.galleryOptions4 = [
    {
      breakpoint: 1920,
      height: "200px",
      width: "300px",
      image: false,
      thumbnails: true
    }
  ];

  this.galleryOptions5 = [
    {
      breakpoint: 1920,
      height: "200px",
      width: "300px",
      image: true,
      imageArrows: true,
      thumbnails: true,
      preview: true,
      previewKeyboardNavigation: false,
      previewDownload: false,
      previewRotate: false,
      previewZoom: false,
      previewDescription: false,
      previewFullscreen: false
    }
  ];

  this.galleryOptions6 = [
    {
      breakpoint: 1920,
      height: "200px",
      width: "300px",
      preview: true,
      previewAutoPlay: true
    }
  ];

  this.galleryImages = [
    {
      small: 'https://picsum.photos/id/1011/150/100.jpg',
      medium: 'https://picsum.photos/id/1011/600/450.jpg',
      big: 'https://picsum.photos/id/1011/600/450.jpg'
    },
    {
      small: 'https://picsum.photos/id/1012/150/100.jpg',
      medium: 'https://picsum.photos/id/1012/600/450.jpg',
      big: 'https://picsum.photos/id/1012/600/450.jpg'
    },
    {
      small: 'https://picsum.photos/id/1020/150/100.jpg',
      medium: 'https://picsum.photos/id/1020/600/450.jpg',
      big: 'https://picsum.photos/id/1020/600/450.jpg'
    },
    {
      small: 'https://picsum.photos/id/1023/150/100.jpg',
      medium: 'https://picsum.photos/id/1023/600/450.jpg',
      big: 'https://picsum.photos/id/1023/600/450.jpg'
    },
    {
      small: 'assets/images/i_video.jpg',
      medium: 'assets/videos/video1.mp4',
      big: 'assets/videos/video1.mp4'
    }
  ];
}`; 

@Component({
  selector: 'gallery-example',
  templateUrl: './gallery-example.component.html',
  styleUrls: ['./gallery-example.component.scss']
})
export class GalleryExampleComponent implements OnInit {

  galleryOptions1: GalleryOptions[];
  galleryOptions2: GalleryOptions[];
  galleryOptions3: GalleryOptions[];
  galleryOptions4: GalleryOptions[];
  galleryOptions5: GalleryOptions[];
  galleryOptions6: GalleryOptions[];
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

  public static getHtml(data: any) {
    let tpl = HTML_DATA;
    return tpl;
  }

  onShowSource(key: string, exampleComp: any) {
    const itemData: any = {};
    exampleComp.html = GalleryExampleComponent.getHtml(itemData);
  }

  ngOnInit(): void {

    this.galleryOptions1 = [
      {
        breakpoint: 1920,
        height: "200px",
        width: "300px",
      }
    ];

    this.galleryOptions2 = [
      {
        breakpoint: 1920,
        height: "200px",
        width: "300px",
        image: true,
        thumbnails: false,
        preview: false
      }
    ];

    this.galleryOptions3 = [
      {
        breakpoint: 1920,
        height: "200px",
        width: "300px",
        image: true,
        thumbnails: false,
        preview: true
      }
    ];

    this.galleryOptions4 = [
      {
        breakpoint: 1920,
        height: "200px",
        width: "300px",
        image: false,
        thumbnails: true
      }
    ];

    this.galleryOptions5 = [
      {
        breakpoint: 1920,
        height: "200px",
        width: "300px",
        image: true,
        imageArrows: true,
        thumbnails: true,
        preview: true,
        previewKeyboardNavigation: false,
        previewDownload: false,
        previewRotate: false,
        previewZoom: false,
        previewDescription: false,
        previewFullscreen: false
      }
    ];

    this.galleryOptions6 = [
      {
        breakpoint: 1920,
        height: "200px",
        width: "300px",
        preview: true,
        previewAutoPlay: true
      }
    ];



    this.galleryImages = [
      {
        small: 'https://picsum.photos/id/1011/150/100.jpg',
        medium: 'https://picsum.photos/id/1011/600/450.jpg',
        big: 'https://picsum.photos/id/1011/600/450.jpg'
      },
      {
        small: 'https://picsum.photos/id/1012/150/100.jpg',
        medium: 'https://picsum.photos/id/1012/600/450.jpg',
        big: 'https://picsum.photos/id/1012/600/450.jpg'
      },
      {
        small: 'https://picsum.photos/id/1020/150/100.jpg',
        medium: 'https://picsum.photos/id/1020/600/450.jpg',
        big: 'https://picsum.photos/id/1020/600/450.jpg'
      },
      {
        small: 'https://picsum.photos/id/1023/150/100.jpg',
        medium: 'https://picsum.photos/id/1023/600/450.jpg',
        big: 'https://picsum.photos/id/1023/600/450.jpg'
      },
      {
        small: 'assets/images/i_video.jpg',
        medium: 'assets/videos/video1.mp4',
        big: 'assets/videos/video1.mp4'
      }
    ];
  }

}
