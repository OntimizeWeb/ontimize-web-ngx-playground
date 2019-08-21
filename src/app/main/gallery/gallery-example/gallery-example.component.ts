import { Component, OnInit } from '@angular/core';
import { GalleryOptions, GalleryImage } from 'ontimize-web-ngx-gallery';

const HTML_DATA = `
<o-row style="height: 400px" class="img-ex-row">
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
<o-row style="height: 400px" class="img-ex-row">
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
      'data': undefined
    }
  };

  public static getHtml(data: any) {
    let tpl = HTML_DATA;
    return tpl;
  }

  onShowSource(key: string, exampleComp: any) {
    const itemData: any = { };
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
        small: 'assets/images/photo1.jpg',
        medium: 'assets/images/photo1.jpg',
        big: 'assets/images/photo1.jpg'
      },
      {
        small: 'assets/images/photo2.jpg',
        medium: 'assets/images/photo2.jpg',
        big: 'assets/images/photo2.jpg'
      },
      {
        small: 'assets/images/photo3.jpg',
        medium: 'assets/images/photo3.jpg',
        big: 'assets/images/photo3.jpg'
      },
      {
        small: 'assets/images/i_video.jpg',
        medium: 'assets/videos/video1.mp4',
        big: 'assets/videos/video1.mp4'
      }
    ];
  }

}
