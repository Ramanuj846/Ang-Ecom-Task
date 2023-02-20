import { Component, OnInit } from '@angular/core';
import { CartItemsService } from '../services/cart-items.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public totalItem: number =0;
  constructor(private cartService:CartItemsService) { }

  ngOnInit(): void {
    this.cartService.getProducts().subscribe((res:any)=>{
      this.totalItem = res.length;
    })
  }

}
