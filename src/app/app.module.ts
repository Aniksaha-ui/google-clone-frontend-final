import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { UserComponent } from './user/user.component';
import { RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './login/login.component';
import { IsAuthenticateGuard } from './is-authenticate.guard';
import { SigninComponent } from './signin/signin.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { ContactsComponent } from './contacts/contacts.component';
import { ContactInfoComponent } from './contact-info/contact-info.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { OtpverificationComponent } from './otpverification/otpverification.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    NotFoundComponent,
    LoginComponent,
    SigninComponent,
    ContactsComponent,
    ContactInfoComponent,
    NavbarComponent,
    AuthenticationComponent,
    OtpverificationComponent,
    ChangepasswordComponent

  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatDatepickerModule,
    RouterModule.forRoot([
      { path: '', component: SigninComponent },
      {
        path: 'user',
        component: UserComponent,

      },
      {path:'contact',component:ContactsComponent,canActivate:[IsAuthenticateGuard]},
      {path:'contactInfo',component:ContactInfoComponent,canActivate:[IsAuthenticateGuard]},
      { path: 'register', component: LoginComponent },
      { path: 'login', component: SigninComponent },
      { path: 'authentication', component: AuthenticationComponent },
      { path: 'otpVarification', component: OtpverificationComponent },
      { path: 'changepassword', component: ChangepasswordComponent },
      { path: '**', component: NotFoundComponent },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
