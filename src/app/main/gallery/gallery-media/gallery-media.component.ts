import { Component, OnInit, ViewChild } from '@angular/core';
import { GalleryComponent, GalleryImage, GalleryImageSize, GalleryOptions } from 'ontimize-web-ngx-gallery';

const HTML_DATA = `
<o-gallery #demoGaleria [gallery-images]="galleryImages" [gallery-options]="galleryOptions"></o-gallery>
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
      'data': undefined
    }
  };

  public static getHtml(data: any) {
    let tpl = HTML_DATA;
    return tpl;
  }

  onShowSource(key: string, exampleComp: any) {
    const itemData: any = { };
    exampleComp.html = GalleryMediaComponent.getHtml(itemData);
  }

  @ViewChild('demoGaleria') demoGaleria: GalleryComponent;

  ngOnInit(): void {

    this.galleryOptions = [
      {
        breakpoint: 1920,
        height: "600px",
        width: "600px",
        image: true,
        imageArrows: true,
        imagePercent: 100,
        imageSize: GalleryImageSize.Cover,
        thumbnails: true,
        thumbnailSize: GalleryImageSize.Cover,
        thumbnailsColumns: 3,
        thumbnailsRows: 1,
        thumbnailsPercent: 25,
        thumbnailsMargin: 10,
        thumbnailMargin: 10,
        preview: true,
        previewArrows: true,
        previewAutoPlay: false,
        previewCloseOnClick: true,
        previewCloseOnEsc: true,
        previewKeyboardNavigation: true,
        previewDownload: true,
        previewRotate: true,
        previewZoom: true,
        previewDescription: false,
        previewFullscreen: true
      }
    ];

    this.galleryImages = [
      {
        small: 'assets/images/gallery/photo1.jpg',
        medium: 'assets/images/gallery/photo1.jpg',
        big: 'assets/images/gallery/photo1.jpg'
      },
      {
        small: 'assets/images/gallery/photo2.jpg',
        medium: 'assets/images/gallery/photo2.jpg',
        big: 'assets/images/gallery/photo2.jpg'
      },
      {
        small: 'assets/images/gallery/photo3.jpg',
        medium: 'assets/images/gallery/photo3.jpg',
        big: 'assets/images/gallery/photo3.jpg'
       }
      // {
      //   small: 'assets/images/gallery/i_video.jpg',
      //   medium: 'assets/videos/gallery/video1.mp4',
      //   big: 'assets/videos/gallery/video1.mp4'
      // }
    ];
  }

}
