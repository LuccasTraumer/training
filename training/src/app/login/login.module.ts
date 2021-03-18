import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { FooterModule } from '../footer/footer.module';



@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    FooterModule
  ],
  exports: [LoginComponent]
})
export class LoginModule { }
