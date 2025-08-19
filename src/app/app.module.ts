import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartsModule } from './carts/carts.module';
import { ProductsModule } from './products/products.module';
import { SharedModule } from './shared/shared.module';
import { LoginComponent } from './pages/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
imports: [
  BrowserModule,
  AppRoutingModule,
  ProductsModule,
  CartsModule,
  SharedModule,
  FormsModule,
  ReactiveFormsModule
],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
