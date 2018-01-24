import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { AgmCoreModule } from '@agm/core'

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { GalleryComponent } from './gallery/gallery.component';
import { InfoComponent } from './info/info.component';
import { JubmotronComponent } from './jubmotron/jubmotron.component';
import { LocationComponent } from './location/location.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SubscriptionComponent } from './subscription/subscription.component';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    JubmotronComponent,
    AboutComponent,
    SubscriptionComponent,
    GalleryComponent,
    LocationComponent,
    InfoComponent,
    ContactComponent,
    FooterComponent,
    MenuComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    CarouselModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBMBK453OcOfL1FiU6zLOZ4IJuLeuUIcCI'})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
