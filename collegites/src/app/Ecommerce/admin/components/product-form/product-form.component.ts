import { Component, OnInit } from '@angular/core';
import { ProductCategoryService } from 'src/app/Ecommerce/shared/services/product-category.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  categories$:any;
  product = {};
  id:any;
  constructor(catergoryService: ProductCategoryService) {
this.categories$ = catergoryService.getCategories();

   }

  ngOnInit(): void {
  }

}
