import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ICategories } from 'src/app/shop/shared/models/categories.model';
import { CategoryService } from 'src/app/shop/shared/services/category.service';


@Component({
  selector: 'product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.scss']
})
export class ProductFilterComponent {

  categories$: Observable<ICategories[]> | undefined;
  @Input('category') category!: any;

  constructor(categoryService: CategoryService) {
    this.categories$ = categoryService.getAll();
  }

}
