import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class CartItemsService {

  public cartItemsList:any=[];
  public productList = new BehaviorSubject<any>([]);
  constructor() { }

  getProducts()
  {
    return this.productList.asObservable();
  }

  setProducts(product:any)
  {
    this.cartItemsList.push(...product);
    this.productList.next(product)
  }

  addtoCart(product:any)
  {
    this.cartItemsList.push(product);
    this.productList.next(this.cartItemsList);
    this.getTotalPrice();
  }

  getTotalPrice()
  {
    let grandTotal =0;
    this.cartItemsList.map((a:any)=>{
      grandTotal += a.total;
    })

    return grandTotal;

  }

  removeCartItem(product:any)
  {
    this.cartItemsList.map((a:any, index:any)=>{
      if(product.id === a.id)
      {
        this.cartItemsList.splice(index ,1);
      }
    })
    this.productList.next(this.cartItemsList);
  }

  removeAllCart()
  {
    this.cartItemsList =[];
    this.productList.next(this.cartItemsList);
  }

}
