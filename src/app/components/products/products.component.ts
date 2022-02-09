import { Component, OnInit } from '@angular/core';
import { Gallery, GalleryItem, ImageItem } from 'ng-gallery';
import { Lightbox } from 'ng-gallery/lightbox';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  productList = [
    { translate: "easy-cider", name: 'Easy Szájder', img: '32-3-szajder.jpg' },
    { translate: "woker-vodka", name: 'Woker-vodka', img: '31-3-woker-szorolapok-20120210_page_08.jpg' },
    { translate: "cifraszuros", name: 'Cifraszűrös', img: '30-3-woker-szorolapok-20120210_page_07.jpg' },
    { translate: "liliana", name: 'Liliana', img: '29-3-woker-szorolapok-20120210_page_06.jpg' },
    { translate: "likor-vodka", name: 'Likőr-vodka', img: '28-3-woker-szorolapok-20120210_page_04.jpg' },
    { translate: "palinka", name: 'Pálinka', img: '27-3-woker-szorolapok-20120210_page_03.jpg' },
    { translate: "vilmoskorte", name: 'Vilmoskörte', img: '26-3-woker-szorolapok-20120210_page_02.jpg' },
    { translate: "napoleon", name: 'Napoleon', img: '25-3-woker-szorolapok-20120210_page_01.jpg' },
    { translate: "akacmezes-barack", name: 'Akácmézes Barack', img: '24-3-woker-szorolapok-20120210_page_05.jpg' },
    { translate: "cherry-csaszarkorte-likor", name: 'Cherry, Császár Körte likőr', img: '23-3-woker-szorolapok-20120210_page_11.jpg' },
    { translate: "walkertus-beloe-vodka", name: 'Walkertus, Beloe vodka', img: '22-3-woker-szorolapok-20120210_page_10.jpg' },
    { translate: "keseru", name: 'Keserű', img: '21-3-woker-szorolapok-20120210_page_09.jpg' },
    { translate: "paprika", name: 'Paprika', img: '10-3-paprika.jpg' },
    { translate: "dio-kevertlikor", name: 'Dió - Kevertlikőr', img: '6-3-dio_-_kevertlikor.jpg' },
    { translate: "betyarkorte-betyarszilva", name: 'Betyárkörte - Betyárszilva', img: '3-3-betyarkorte_-_betyarszilva.jpg' },
    { translate: "betyarbarack-betyarcseresznye", name: 'Betyárbarack - Betyárcseresznye', img: '2-3-betyarbarack_-_betyarcseresznye.jpg' },
  ];
  items: GalleryItem[] = [];

  constructor(public gallery: Gallery, public lightbox: Lightbox) {}

  ngOnInit(): void {}

  openProductInFullScreen(product: any) {
    const galleryRef = this.gallery.ref(product);
    const productToGallery = [];
    productToGallery.push(this.productList.find(productName => productName.translate == product));
    const items = productToGallery.map(item => new ImageItem({ src: '/assets/image/shop_products/' + item?.img, thumb: '/assets/image/shop_products/' + item?.img }));

    galleryRef.load(items);
    this.lightbox.open(0, product, {
      panelClass: 'fullscreen'
    })
  }
}
