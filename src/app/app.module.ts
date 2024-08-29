import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS, HttpClientXsrfModule, HttpClient } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LogoutComponent } from './components/logout/logout.component';
import { XhrInterceptor } from './interceptors/app.request.interceptor';
import { AuthActivateRouteGuard } from './routeguards/auth.routeguard';
import { HomeComponent } from './components/home/home.component';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { SignupComponent } from './components/signup/signup.component';
import { ButtonModule } from 'primeng/button';
import { AvatarModule } from 'primeng/avatar';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { DropdownModule } from 'primeng/dropdown';
import { MenubarModule } from 'primeng/menubar';
import { ProfileUserComponent } from './components/profile-user/profile-user.component';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { ProfileAdminComponent } from './components/admin-page/profile-admin/profile-admin.component';
import { TabViewModule } from 'primeng/tabview';
import { InputTextModule } from 'primeng/inputtext';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { LoansComponent } from './components/loans/loans.component';
import { UserManagementComponent } from './components/admin-page/user-management/user-management.component';
import { AdminPageComponent } from './components/admin-page/admin-page/admin-page.component';
import {PaginatorModule} from 'primeng/paginator';
import {TableModule} from 'primeng/table';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ConfirmationService} from 'primeng/api';
import {CheckboxModule} from 'primeng/checkbox';
import { MovieManagementComponent } from './components/admin-page/movie-management/movie-management.component';
import {MultiSelectModule} from 'primeng/multiselect';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    DashboardComponent,
    LogoutComponent,
    HomeComponent,
    SignupComponent,
    ProfileUserComponent,
    ProfileAdminComponent,
    LoansComponent,
    UserManagementComponent,
    AdminPageComponent,
    MovieManagementComponent
  ],
  imports: [
    MultiSelectModule,
    CheckboxModule,
    ConfirmDialogModule,
    TableModule,
    PaginatorModule,
    ToastModule,
    InputTextModule,
    TabViewModule,
    ProgressSpinnerModule,
    ButtonModule,
    MenubarModule,
    AvatarModule,
    OverlayPanelModule,
    DropdownModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    HttpClientXsrfModule.withOptions({
      cookieName: 'XSRF-TOKEN',
      headerName: 'X-XSRF-TOKEN',
    }),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [
    ConfirmationService,
    MessageService,
    {
      provide : HTTP_INTERCEPTORS,
      useClass : XhrInterceptor,
      multi : true
    },AuthActivateRouteGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}

export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
