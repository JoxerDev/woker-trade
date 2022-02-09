import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { ContentComponent } from './components/content/content.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },{
    path: 'home',
    component: HomeComponent,
  },{
    path: 'about',
    component: AboutComponent
  },{
    path: 'products',
    component: ProductsComponent
  },{
    path: 'gallery',
    component: GalleryComponent
  },{
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'content/:slug',
    component: ContentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
