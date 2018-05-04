import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DocFuentesModule } from '../doc-fuentes/doc-fuentes.module';

import { ViewchildRoutingModule } from './viewchild-routing.module';

import { ViewchildDemo3Component } from './viewchild-demo3/viewchild-demo3.component';
import { ViewchildDemo2Component } from './viewchild-demo2/viewchild-demo2.component';
import { ViewchildDemo2ChildDirective } from './viewchild-demo2/viewchild-demo2child.directive';
import { ViewchildDemo1Component } from './viewchild-demo1/viewchild-demo1.component';
import { ViewchildDemo1ChildComponent } from './viewchild-demo1/viewchild-demo1child.component';
import { DocViewchildDemo1Component } from './viewchild-demo1/doc-viewchild-demo1.component';
import { DocViewchildDemo2Component } from './viewchild-demo2/doc-viewchild-demo2.component';
import { Cp1Component } from './viewchild-demo4/cp1.component';
import { WriterComponent} from './viewchild-demo4/writer.component';
import { MessageDirective } from './viewchild-demo4/message.directive';
import { DocViewchildDemo4Component } from './viewchild-demo4/doc-viewchild-demo4.component';
import { ViewchildDemo5Component } from './viewchild-demo5/viewchild-demo5.component';
import { BookDirective } from './contentchild-demo1/book.directive';
import { EscritorComponent } from './contentchild-demo1/escritor.component';
import { FavouriteBooksComponent } from './contentchild-demo1/favourite-books.component';
import { CityComponent } from './contentchild-demo1/city.component';
import { AddressComponent } from './contentchild-demo1/address.component';
import { FavouriteCitiesComponent } from './contentchild-demo1/favourite-cities.component';
import { FriendComponent } from './contentchild-demo1/friend.component';
import { FavouriteFriendsComponent } from './contentchild-demo1/favourite-friends.component';
import { PersonComponent } from './contentchild-demo1/person.component';
import { DocContentchildDemo1Component } from './contentchild-demo1/doc-contentchild-demo1.component';
import { ViewchildHomeComponent } from './viewchild-home/viewchild-home.component';
import { ContentChildDemo2Component } from './contentchild-demo2/contentchild-demo2.component';
import { Pane } from './contentchild-demo2/contentchild-demo2.component';
import { Tab } from './contentchild-demo2/contentchild-demo2.component';
import { DocContentchildDemo2Component } from './contentchild-demo2/doc-contentchild-demo2.component';

import { ContentChildDemo3Component } from './contentchild-demo3/contentchild-demo3.component';
import { Pane3 } from './contentchild-demo3/contentchild-demo3.component';
import { Tab3 } from './contentchild-demo3/contentchild-demo3.component';
import { DocContentchildDemo3Component } from './contentchild-demo3/doc-contentchild-demo3.component';

@NgModule({
  imports: [
    CommonModule,
    ViewchildRoutingModule,
    DocFuentesModule
  ],
  declarations: [
    ViewchildDemo3Component,
    ViewchildDemo2Component,
    ViewchildDemo2ChildDirective,
    ViewchildDemo1Component,
    ViewchildHomeComponent,
    ViewchildDemo1ChildComponent,
    DocViewchildDemo1Component,
    DocViewchildDemo2Component,
    Cp1Component,
    WriterComponent,
    MessageDirective,
    DocViewchildDemo4Component,
    ViewchildDemo5Component,
    BookDirective,
    EscritorComponent,
    FavouriteBooksComponent,
    CityComponent,
    AddressComponent,
    FavouriteCitiesComponent,
    FriendComponent,
    FavouriteFriendsComponent,
    PersonComponent,
    DocContentchildDemo1Component,
    ContentChildDemo2Component,
    Pane,
    Tab,
    DocContentchildDemo2Component,
    ContentChildDemo3Component,
    DocContentchildDemo3Component,
    Pane3,
    Tab3
  ]
})
export class ViewchildModule { }
