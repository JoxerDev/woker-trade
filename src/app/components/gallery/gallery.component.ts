import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { Gallery, GalleryItem, ImageItem } from 'ng-gallery';
import { Lightbox } from 'ng-gallery/lightbox';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GalleryComponent implements OnInit {

  items: GalleryItem[] = [];
  galleryItems = {
    telephely: telephelyImages,
    palackozo : palackozoImages,
    moso: mosoImages,
    telephelyfejlesztes: telephelyfejlesztesImages,
    telephelyfejlesztes2: telephelyfejlesztes2Images
  };

  galleryList = [
    {name: 'telephely', thumb: '1-img_9660_s.jpg'},
    {name: 'telephelyfejlesztes', thumb: '17-image010.jpg'},
    {name: 'telephelyfejlesztes2', thumb: '4-20100810_3.jpg'},
    {name: 'palackozo', thumb: '12-adwad.jpg'},
    {name: 'moso', thumb: '13-p1050654.jpg'},
  ];

  //Set default gallery
  imageData = this.galleryItems.palackozo;

  constructor(public gallery: Gallery, public lightbox: Lightbox) {}

  ngOnInit(): void {

   /*  this.items = this.imageData.map(item => new ImageItem({ src: '/assets/image/gallery/'+  item.img, thumb: '/assets/image/gallery/'+item.img }));
    const lightboxRef = this.gallery.ref('lightbox');
    lightboxRef.load(this.items); */

  }

  openInFullScreen(galleryId: any) {

    const galleryName : keyof galleryItemsType = galleryId;
    this.imageData = this.galleryItems[galleryName];
    const galleryRef = this.gallery.ref(galleryId);

    const items = this.imageData.map(item => new ImageItem({ src: '/assets/image/gallery/' + item.img, thumb: '/assets/image/gallery/' + item.img }));
    galleryRef.load(items);

    this.lightbox.open(0, galleryId, {
      panelClass: 'fullscreen'
    })
    
  }

}

export interface galleryItemsType {
  telephely: {},
  palackozo: {},
  moso: {},
  telephelyfejlesztes: {},
  telephelyfejlesztes2: {}
}

const telephelyImages = [
  { img: '1-img_9660_s.jpg' },
  { img: '1-img_9583_s.jpg' },
  { img: '1-img_9588_s.jpg' },
  { img: '1-img_9591_s.jpg' },
  { img: '1-img_9630_s.jpg' },
  { img: '1-img_9633_s.jpg' },
  { img: '1-p1050509.jpg' },
  { img: '1-p1050510.jpg' },
  { img: '1-p1050511.jpg' },
  { img: '1-p1050512.jpg' },
  { img: '1-p1050513.jpg' },
  { img: '1-p1050514.jpg' },
  { img: '1-p1050515.jpg' },
  { img: '1-p1050516.jpg' },
  { img: '1-p1050518.jpg' },
  { img: '1-p1050520.jpg' },
  { img: '1-p1050545.jpg' },
  { img: '1-p1050546.jpg' },
];

const palackozoImages = [
  { img: '12-adwad.jpg' },
  { img: '12-awdwda.jpg' },
  { img: '12-dawa.jpg' },
  { img: '12-dawdq.jpg' },
  { img: '12-dawdqwdq.jpg' },
  { img: '12-ggh.jpg' },
  { img: '12-p1050501.jpg' },
  { img: '12-p1050529.jpg' },
  { img: '12-p1050531.jpg' },
  { img: '12-p1050540.jpg' },
  { img: '12-p1050545.jpg' },
  { img: '12-p1050549.jpg' },
  { img: '12-p1050550.jpg' },
  { img: '12-p1050551.jpg' },
  { img: '12-p1050555.jpg' },
  { img: '12-p1050558.jpg' },
  { img: '12-p1050559.jpg' },
  { img: '12-p1050560.jpg' },
  { img: '12-p1050561.jpg' },
  { img: '12-p1050562.jpg' },
  { img: '12-p1050563.jpg' },
  { img: '12-p1050566.jpg' },
  { img: '12-p1050568.jpg' },
  { img: '12-p1050569.jpg' },
  { img: '12-p1050570.jpg' },
  { img: '12-p1050571.jpg' },
  { img: '12-p1050572.jpg' },
  { img: '12-p1050574.jpg' },
  { img: '12-p1050576.jpg' },
  { img: '12-p1050581.jpg' },
  { img: '12-p1050583.jpg' },
  { img: '12-p1050584.jpg' },
  { img: '12-p1050588.jpg' },
  { img: '12-p1050589.jpg' },
  { img: '12-p1050597.jpg' },
  { img: '12-p1050601.jpg' },
  { img: '12-p1050602.jpg' },
  { img: '12-p1050604.jpg' },
  { img: '12-p1050605.jpg' },
  { img: '12-p1050606.jpg' },
  { img: '12-p1050607.jpg' },
  { img: '12-p1050609.jpg' },
  { img: '12-p1050615.jpg' },
  { img: '12-p1050616.jpg' },
  { img: '12-p1050630.jpg' },
  { img: '12-p1050632.jpg' },
  { img: '12-p1050635.jpg' },
  { img: '12-p1050636.jpg' },
  { img: '12-p1050637.jpg' },
  { img: '12-p1050638.jpg' },
  { img: '12-p1050641.jpg' },
  { img: '12-p1050645.jpg' },
  { img: '12-p1050648.jpg' },
  { img: '12-p1050649.jpg' },
  { img: '12-p1050651.jpg' },
  { img: '12-p1050652.jpg' },
  { img: '12-p1050653.jpg' },
  { img: '12-p1050656.jpg' },
  { img: '12-qwdqwdqd.jpg' },
  { img: '12-wad.jpg ' }
];

const mosoImages = [
  { img: '13-p1050654.jpg' },
  { img: '13-p1050658.jpg' },
  { img: '13-p1050659.jpg' },
  { img: '13-p1050662.jpg' },
  { img: '13-p1050663.jpg' },
  { img: '13-p1050667.jpg' },
  { img: '13-wdqwdqwdq.jpg' },
  { img: '13-wqdqwdqd.jpg' },
];

const telephelyfejlesztesImages = [
  { img: '17-image010.jpg' },
  { img: '17-image017.jpg' },
  { img: '17-image018.jpg' },
  { img: '17-image019.jpg' },
  { img: '17-image020.jpg' },
  { img: '17-image021.jpg' },
];

const telephelyfejlesztes2Images = [
  { img: '4-20100810_3.jpg' },
  { img: '4-20100810_1.jpg' },
  { img: '4-20100810_2.jpg' },
  { img: '4-20100810_4.jpg' },
  { img: '4-20100810_5.jpg' },
  { img: '4-20100820_1.jpg' },
  { img: '4-20100820_2.jpg' },
  { img: '4-20100820_3.jpg' },
  { img: '4-20100820_4.jpg' },
  { img: '4-20100820_5.jpg' },
  { img: '4-20100825_1.jpg' },
  { img: '4-20100825_2.jpg' },
  { img: '4-20100907_1.jpg' },
  { img: '4-20100907_2.jpg' },
  { img: '4-20100907_3.jpg' },
  { img: '4-20100907_4.jpg' },
  { img: '4-20100907_5.jpg' },
  { img: '4-20100907_6.jpg' },
  { img: '4-20100907_7.jpg' },
  { img: '4-20100907_8.jpg' },
  { img: '4-20100913_1.jpg' },
  { img: '4-20100913_2.jpg' },
  { img: '4-20100913_3.jpg' },
  { img: '4-20100913_4.jpg' },
  { img: '4-20100913_5.jpg' },
  { img: '4-20100913_6.jpg' },
  { img: '4-20100913_7.jpg' },
  { img: '4-20100921_1.jpg' },
  { img: '4-20100921_2.jpg' },
  { img: '4-20100921_3.jpg' },
  { img: '4-20100921_4.jpg' },
  { img: '4-20100921_5.jpg' },
  { img: '4-20100921_6.jpg' },
  { img: '4-20100927_1.jpg' },
  { img: '4-20100927_2.jpg' },
  { img: '4-20100927_3.jpg' },
  { img: '4-20100927_4.jpg' },
  { img: '4-20100927_5.jpg' },
  { img: '4-20101008_1.jpg' },
  { img: '4-20101008_2.jpg' },
  { img: '4-20101008_3.jpg' },
  { img: '4-20101008_4.jpg' },
  { img: '4-20101008_5.jpg' },
  { img: '4-20101008_6.jpg' },
  { img: '4-20101008_7.jpg' },
  { img: '4-20101008_8.jpg' },
  { img: '4-20101008_9.jpg' },
  { img: '4-20101022_1.jpg' },
  { img: '4-20101022_2.jpg' },
  { img: '4-20101022_3.jpg' },
  { img: '4-20101022_4.jpg' },
  { img: '4-20101022_5.jpg' },
  { img: '4-20101102_1.jpg' },
  { img: '4-20101102_2.jpg' },
  { img: '4-20101102_3.jpg' },
  { img: '4-20101102_4.jpg' },
  { img: '4-20101102_5.jpg' },
  { img: '4-20101102_6.jpg' },
  { img: '4-20101102_7.jpg' },
  { img: '4-20101102_8.jpg' },
  { img: '4-20101102_9.jpg' },
  { img: '4-20101109_1.jpg' },
  { img: '4-20101109_10.jpg' },
  { img: '4-20101109_2.jpg' },
  { img: '4-20101109_3.jpg' },
  { img: '4-20101109_4.jpg' },
  { img: '4-20101109_5.jpg' },
  { img: '4-20101109_6.jpg' },
  { img: '4-20101109_7.jpg' },
  { img: '4-20101109_8.jpg' },
  { img: '4-20101109_9.jpg' },
  { img: '4-p10502242.jpg' },
  { img: '4-p10502253.jpg' },
  { img: '4-p10502264.jpg' },
  { img: '4-p10502275.jpg' },
  { img: '4-p10502286.jpg' },
  { img: '4-p10502297.jpg' },
  { img: '4-p10502308.jpg' },
  { img: '4-p10502319.jpg' },
  { img: '4-p105023210.jpg' },
  { img: '4-p10502331.jpg' },
  { img: '4-p10502342.jpg' },
  { img: '4-p10502353.jpg' },
  { img: '4-p10502364.jpg' },
  { img: '4-p10502371.jpg' },
  { img: '4-p10502382.jpg' },
  { img: '4-p10502393.jpg' },
  { img: '4-p10502404.jpg' },
  { img: '4-p10502415.jpg' },
  { img: '4-p10502426.jpg' },
  { img: '4-p10502431.jpg' },
  { img: '4-p10502452.jpg' },
  { img: '4-p10502463.jpg' },
  { img: '4-p10502474.jpg' },
  { img: '4-p10502485.jpg' },
  { img: '4-p10502496.jpg' },
  { img: '4-p10502507.jpg' },
  { img: '4-p10502511.jpg' },
  { img: '4-p1050455.jpg' },
  { img: '4-p1050456.jpg' },
  { img: '4-p1050457.jpg' },
  { img: '4-p1050458.jpg' },
  { img: '4-p1050459.jpg' },
  { img: '4-p1050460.jpg' },
  { img: '4-p1050461.jpg' },
];

