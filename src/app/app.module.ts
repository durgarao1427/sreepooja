import { BrowserModule } from '@angular/platform-browser';
import { SliderModule } from 'angular-image-slider';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import {Routes,RouterModule} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PoojasComponent } from './home/poojas/poojas.component';
import { PoojadescriptionComponent } from './home/poojas/poojadescription/poojadescription.component';
import { PoojaItemsComponent } from './home/poojas/pooja-items/pooja-items.component';
import { PoojaItemComponent } from './home/poojas/pooja-items/pooja-item/pooja-item.component';
import { PunyakshetraComponent } from './home/punyakshetra/punyakshetra.component';
import { PunyakshtradescriptionComponent } from './home/punyakshetra/punyakshtradescription/punyakshtradescription.component';
import { PunyakshtraitemsComponent } from './home/punyakshetra/punyakshtraitems/punyakshtraitems.component';
import { PunyakshetraItemComponent } from './home/punyakshetra/punyakshtraitems/punyakshetra-item/punyakshetra-item.component';
import { SliderComponent } from './home/slider/slider.component';
import { TopheaderComponent } from './topheader/topheader.component';
import { ProfileComponent } from './profile/profile.component';
import { UpdateprofileComponent } from './profile/updateprofile/updateprofile.component';
import { MyorderComponent } from './profile/myorder/myorder.component';
import { ChangepasswordComponent } from './profile/changepassword/changepassword.component';
import { ForgotComponent } from './forgot/forgot.component';
import { ContactusComponent } from './contactus/contactus.component';
import { ConatactoptionComponent } from './contactus/conatactoption/conatactoption.component';
import { GetintouchComponent } from './contactus/getintouch/getintouch.component';
import { ImageComponent } from './contactus/image/image.component';
import { LocationComponent } from './contactus/location/location.component';
import { PoojaCategoriesComponent } from './pooja-categories/pooja-categories.component';
import { AllPoojaCategoriesComponent } from './pooja-categories/all-pooja-categories/all-pooja-categories.component';
import { AllPoojaCategoryItemsComponent } from './pooja-categories/all-pooja-categories/all-pooja-category-items/all-pooja-category-items.component';
import { AllPoojaCategoryItemComponent } from './pooja-categories/all-pooja-categories/all-pooja-category-items/all-pooja-category-item/all-pooja-category-item.component';
import { PunyakshetramCotegoriesComponent } from './punyakshetram-cotegories/punyakshetram-cotegories.component';
import { AllPunyakshetramCategoriesComponent } from './punyakshetram-cotegories/all-punyakshetram-categories/all-punyakshetram-categories.component';
import { AllPunyakshetramCategoryItemsComponent } from './punyakshetram-cotegories/all-punyakshetram-categories/all-punyakshetram-category-items/all-punyakshetram-category-items.component';
import { AllPunyakshetramCategoryItemComponent } from './punyakshetram-cotegories/all-punyakshetram-categories/all-punyakshetram-category-items/all-punyakshetram-category-item/all-punyakshetram-category-item.component';
import { RiverItemsComponent } from './punyakshetram-cotegories/all-punyakshetram-categories/river-items/river-items.component';
import { RiverItemComponent } from './punyakshetram-cotegories/all-punyakshetram-categories/river-items/river-item/river-item.component';
import { ShaktipeetamItemsComponent } from './punyakshetram-cotegories/all-punyakshetram-categories/shaktipeetam-items/shaktipeetam-items.component';
import { ShaktipeetamItemComponent } from './punyakshetram-cotegories/all-punyakshetram-categories/shaktipeetam-items/shaktipeetam-item/shaktipeetam-item.component';
import { BooknowComponent } from './booknow/booknow.component';
import { PoojadetailsComponent } from './poojadetails/poojadetails.component';
import { MyorderitemComponent } from './profile/myorder/myorderitem/myorderitem.component'
const appRouter:Routes=[
  {path:'home',component: HomeComponent},
  {path:'updateprofile',component: UpdateprofileComponent},
  {path:'myorder',component: MyorderComponent},
  {path:'changepassword',component:ChangepasswordComponent},
  {path:'registration',component:RegistrationComponent},
  {path:'login',component:LoginComponent},
  {path:'forgot',component:ForgotComponent},
  {path:'footer',component:FooterComponent},
  {path:'Poojas',component:PoojasComponent},
  {path:'poojacategory',component:PoojaCategoriesComponent},
  {path:'allpoojacategory/:category',component:AllPoojaCategoryItemsComponent},
  {path:'allpunkshetracategory',component:AllPunyakshetramCategoriesComponent},
  {path:'river',component:RiverItemsComponent},
  {path:'shaktipeetam',component:ShaktipeetamItemsComponent},
  {path:'contact',component:ContactusComponent},
  {path:"poojadetails/:poojaid",component:PoojadetailsComponent},
 // {path:"viewdetails/:bookingid",component:BooknowComponent},
  {path:"booknow/:bookingid",component:BooknowComponent},
  {path:"myorder/:myorderid",component:MyorderitemComponent},

];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    RegistrationComponent,
    HomeComponent,
    PoojasComponent,
    PoojadescriptionComponent,
    PoojaItemsComponent,
    PoojaItemComponent,
    PunyakshetraComponent,
    PunyakshtradescriptionComponent,
    PunyakshtraitemsComponent,
    PunyakshetraItemComponent,
    SliderComponent,
    TopheaderComponent,
    ProfileComponent,
    UpdateprofileComponent,
    MyorderComponent,
    ChangepasswordComponent,
    ForgotComponent,
    ContactusComponent,
    ConatactoptionComponent,
    GetintouchComponent,
    ImageComponent,
    LocationComponent,
    PoojaCategoriesComponent,
    AllPoojaCategoriesComponent,
    AllPoojaCategoryItemsComponent,
    AllPoojaCategoryItemComponent,
    PunyakshetramCotegoriesComponent,
    AllPunyakshetramCategoriesComponent,
    AllPunyakshetramCategoryItemsComponent,
    AllPunyakshetramCategoryItemComponent,
    RiverItemsComponent,
    RiverItemComponent,
    ShaktipeetamItemsComponent,
    ShaktipeetamItemComponent,
    BooknowComponent,
    PoojadetailsComponent,
    MyorderitemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    SliderModule,
    HttpClientModule,
    RouterModule.forRoot(appRouter,{useHash:true})
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
