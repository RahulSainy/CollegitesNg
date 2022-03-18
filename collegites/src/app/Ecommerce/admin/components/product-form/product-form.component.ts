import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { take } from 'rxjs'
import { ProductCategoryService } from 'src/app/Ecommerce/shared/services/product-category.service'
import { ProductServiceService } from '../../services/product-service.service'

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css'],
})
export class ProductFormComponent implements OnInit {
  categories$: any
  product: any = {}
  id: any
  constructor(
    private router: Router, 
    private route: ActivatedRoute,
    private categoryService: ProductCategoryService, 
    private productService: ProductServiceService) {
    this.categories$ = categoryService.getAll();

    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) this.productService.get(this.id).pipe(take(1)).subscribe((p: any) => this.product = p);
  }

  save(product: any) { 
    if (this.id) this.productService.update(this.id, product);
    else this.productService.create(product);
    
    this.router.navigate(['/admin/products']);
  }

  delete() {
    if (!confirm('Are you sure you want to delete this product?')) return;
    
    this.productService.delete(this.id);
    this.router.navigate(['/admin/products']);
  }

  ngOnInit() {
  }

}
