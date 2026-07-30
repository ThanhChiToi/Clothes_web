import { Routes } from '@angular/router';
import { ParentLayoutComponent } from './layouts/parent-layout/parent-layout/parent-layout.component';

export const routes: Routes = [
  {
    path: '',
    component: ParentLayoutComponent,
    children: [
      // Các trang con (Home, Dashboard, Product,...) sẽ được load vào <router-outlet> của ParentLayoutComponent
      {
        path: '', // Đường dẫn thực tế: /leave/create
        loadComponent: () => import('./modules/home/home-page/home-page.component').then(c => c.HomePageComponent)
      },
      {
        path: 'products',
        loadComponent: () => import('./modules/product/product/product.component').then(c => c.ProductComponent)
      },
      {
        path: 'product/:id',
        loadComponent: () => import('./modules/product/product-detail/product-detail.component').then(c => c.ProductDetailComponent)
      },
    ]
  },
  { path: '**', redirectTo: '' }
];

