import { Component, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ChangeDetectorRef } from '@angular/core';

export interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  products: Product[] = [];
  productForm!: FormGroup;
  displayDialog: boolean = false;
  selectedProduct: Product | null = null;
  categories: string[] = ['Category 1', 'Category 2','Category 3','Category 4']; // List of categories for dropdown

  filters: any = {
    global: { value: null, matchMode: 'contains' },
  };

  chartData: any[] = []; 

  constructor(private fb: FormBuilder, private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    this.productForm = this.fb.group({
      id: [null],
      name: ['', Validators.required],
      price: ['', [Validators.required, Validators.pattern('^[0-9]*$'),Validators.min(1), Validators.max(100)]],
      category: ['', Validators.required],
    });

    this.products = [
      { id: 1, name: 'Product A', price: 50, category: 'Category 1' },
      { id: 2, name: 'Product B', price: 30, category: 'Category 2' },
      { id: 3, name: 'Product C', price: 70, category: 'Category 3' },
      { id: 4, name: 'Product D', price: 50, category: 'Category 4' },
    ];

    this.prepareChartData();
  }

  prepareChartData() {
    const categoryPriceMap: { [category: string]: number } = {};

    this.products.forEach(product => {
      const category = product.category;
      const price = parseFloat(product.price.toString()); // Ensure price is a number

      if (!categoryPriceMap[category]) {
        categoryPriceMap[category] = 0;
      }

      categoryPriceMap[category] += price;
    });

    this.chartData = Object.keys(categoryPriceMap).map(category => ({
      name: category,                 
      value: categoryPriceMap[category] 
    }));

    console.log('Chart Data:', this.chartData);
  }

  openDialog(product?: Product) {
    if (product) {
      this.productForm.patchValue(product);
    } else {
      this.productForm.reset();
    }
    this.selectedProduct = product || null;
    this.displayDialog = true;
  }

  saveProduct() {
    if (this.productForm.invalid) return;

    const product: Product = this.productForm.value;

    if (product.id) {
      const index = this.products.findIndex(p => p.id === product.id);
      if (index !== -1) {
        this.products[index] = { ...product }; 
      }
    } else {
      const newId = this.products.length ? Math.max(...this.products.map(p => p.id)) + 1 : 1; 
      product.id = newId;
      this.products = [...this.products, product]; 
    }

    this.prepareChartData();

    this.displayDialog = false;
    this.cdr.detectChanges(); 
    this.productForm.reset();
  }

  deleteProduct(product: Product) {
    this.products = this.products.filter(p => p.id !== product.id);

    this.prepareChartData();

    this.cdr.detectChanges();
  }

  cancel() {
    this.displayDialog = false;
    this.productForm.reset();
  }
}
