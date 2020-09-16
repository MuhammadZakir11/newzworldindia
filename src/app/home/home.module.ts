import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FooterComponent } from './common/footer/footer.component';
import { HeaderComponent } from './common/header/header.component';
import { MobileMenuComponent } from './common/mobile-menu/mobile-menu.component';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';



@NgModule({
	  declarations: [
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    MobileMenuComponent,
  ],
  imports: [CommonModule,HomeRoutingModule],

})
export class HomeModule {}