import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '@core/core.module';
import { SharedModule } from '@shared/shared.module';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ExperienceComponent } from './experience/experience.component';
import { ContactComponent } from './contact/contact.component';
import { HeaderComponent } from './header/header.component';
import { FeatureRoutingModule } from './feature-routing.module';



@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    ExperienceComponent,
    ContactComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    SharedModule,
    FeatureRoutingModule
  ], 
  exports: [
    HeaderComponent,
    AboutComponent,
    ExperienceComponent,
    ContactComponent
  ]
})
export class FeatureModule { }
