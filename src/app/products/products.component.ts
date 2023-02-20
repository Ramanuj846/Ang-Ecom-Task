import { Component, OnInit } from '@angular/core';
import { CartItemsService } from '../services/cart-items.service';
import { UserDataService } from '../services/user-data.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products:any;
  constructor(private userdataService:UserDataService,
    private cartService:CartItemsService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts()
  {
    this.userdataService.getProductsList().subscribe((response:any)=>{
      this.products=response;

      this.products.forEach((a:any)=>{
        Object.assign(a,{quantity:1,total:a.price})
      });
      
    })
  }

  addtoCart(item:any)
  {
    this.cartService.addtoCart(item);
  }

}
