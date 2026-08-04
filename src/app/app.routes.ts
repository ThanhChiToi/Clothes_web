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
        loadComponent: () => import('./modules/product/product/product.component').then(c => c.ProductComponent),
        title: 'Danh sách sản phẩm'
      },
      {
        path: 'products/:id',
        loadComponent: () => import('./modules/product/product-detail/product-detail.component').then(c => c.ProductDetailComponent),
        title: 'Chi tiết sản phẩm'
      },
      {
        path: 'contact',
        loadComponent: () => import('./modules/contact/contact.component').then(m => m.ContactComponent)
      },
      {
        path: 'profile',
        loadComponent: () => import('./modules/profile/profile.component').then(m => m.ProfileComponent)
      }
      , {
        path: 'cart',
        loadComponent: () => import('./modules/card/card.component').then(m => m.CardComponent)
      },
      {
        path: 'collections',
        loadComponent: () => import('./modules/collections/collections.component').then(m => m.CollectionsComponent)
      },
      {
        path: '404',
        loadComponent: () => import('./modules/not-found/not-found.component').then(m => m.NotFoundComponent)
      },
    ]
  },
  { path: '**', redirectTo: '404' }
];

