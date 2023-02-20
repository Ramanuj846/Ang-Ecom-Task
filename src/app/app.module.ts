import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { LoginComponent } from './login/login.component';
import { CartComponent } from './cart/cart.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from "./navbar/navbar.component";
import { RegisterComponent } from './register/register.component';

@NgModule({
    declarations: [
        AppComponent,
        ProductsComponent,
        LoginComponent,
        CartComponent,
        NavbarComponent,
        RegisterComponent

    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
    ]
})
export class AppModule { }
