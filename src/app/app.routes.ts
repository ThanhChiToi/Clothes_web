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
      {
        path: 'order-success/:id',
        loadComponent: () => import('./modules/order-success/order-success.component').then(m => m.OrderSuccessComponent)
      },
      {
        path: 'privacy-policy',
        loadComponent: () => import('./modules/privacy-policy/privacy-policy.component').then(m => m.PrivacyPolicyComponent),
        title: 'Chính sách bảo mật | E-Commerce Store'
      },
      {
        path: 'terms-of-service',
        loadComponent: () => import('./modules/terms-of-service/terms-of-service.component').then(m => m.TermsOfServiceComponent),
        title: 'Điều khoản dịch vụ | Desire Clothing'
      },
      {
        path: 'size-guide',
        loadComponent: () => import('./modules/choosing-size/choosing-size.component').then(m => m.ChoosingSizeComponent),
        title: 'Hướng dẫn chọn Size | Desire Clothing'
      },
      {
        path: 'return-policy',
        loadComponent: () => import('./modules/return-policy/return-policy.component').then(m => m.ReturnPolicyComponent),
        title: 'Chính sách đổi trả & Hoàn tiền | Desire Clothing'
      },
    ]
  },
  { path: '**', redirectTo: '404' }
];

