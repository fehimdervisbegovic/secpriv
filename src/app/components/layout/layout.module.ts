import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { TopNavigationComponent } from './top-navigation/top-navigation.component';

@NgModule({
  declarations: [ MainLayoutComponent, FooterComponent, TopNavigationComponent ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    MainLayoutComponent
  ]
})
export class LayoutModule { }
