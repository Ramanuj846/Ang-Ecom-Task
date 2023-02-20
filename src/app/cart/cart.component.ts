import { Component, OnInit } from '@angular/core';
import { CartItemsService } from '../services/cart-items.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  public product :any =[];
  public grandTotal:number =0;

  constructor(private cartService:CartItemsService) { }

  ngOnInit(): void {
    this.cartService.getProducts().subscribe((res:any)=>{
      this.product =res;
      this.grandTotal = this.cartService.getTotalPrice();
    })
  }

  removeItem(item:any)
  {
    this.cartService.removeCartItem(item);

  }

  emptyCart()
  {
    this.cartService.removeAllCart();
  }

  removeAll()
  {
    this.cartService.removeAllCart();
  }

}
