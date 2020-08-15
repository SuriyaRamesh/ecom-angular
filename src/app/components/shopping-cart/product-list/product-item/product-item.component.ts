import { MessangerService } from './../../../../services/messanger.service';
import { Product } from './../../../../models/product';
import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input() productItem: Product

  constructor(private msg: MessangerService) { }

  ngOnInit() {
  }

  handleAddToCart() {
    this.msg.sendMsg(this.productItem)
  }

}
