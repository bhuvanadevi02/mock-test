import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms'
import { RouterModule, Routes } from '@angular/router'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import {AuthenticationService} from './authentication.service';
import {AuthGuardService} from './auth-guard.service';
import { CategoryComponent } from './category/category.component';
import { SubjectComponent } from './subject/subject.component';
import { ApprovalComponent } from './approval/approval.component';
import { ResultComponent } from './result/result.component';
import { ReportComponent } from './report/report.component';
import { ChartsModule } from 'ng2-charts';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthGuardService]
  },
  { path: 'category', component: CategoryComponent },
  { path: 'subject', component: SubjectComponent },
  { path: 'approval', component: ApprovalComponent },
  { path: 'result', component: ResultComponent },
  { path: 'report', component: ReportComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ProfileComponent,
    CategoryComponent,
    SubjectComponent,
    ApprovalComponent,
    ResultComponent,
    ReportComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ChartsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [AuthenticationService, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
