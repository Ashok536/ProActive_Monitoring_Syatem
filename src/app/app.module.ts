import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { HttpClientModule } from '@angular/common/http';
import{ FormsModule, ReactiveFormsModule } from '@angular/forms';

// Services

import { SearchService } from './services/searchservice.service';
import { AuthService } from './services/auth.service';
import { CommonService } from './services/common.service';

// Components

import { AppComponent } from './app.component';
import { SearchformComponent } from './searchform/searchform.component';
import { DetailsComponent } from './details/details.component';
import { CommontableComponent } from './details/commontable/commontable.component';
import { PageNotFoundComponent } from './pagenotfound/pagenotfound.component';
import { HomeComponent } from './home/home.component';
import { RangelistComponent } from './rangelist/rangelist.component';
import { ProcessinvoiceComponent } from './processinvoice/processinvoice.component';
import { LoginComponent } from './login/login.component';

//Guards

import { AuthGuard } from './guard/auth.guard';
import { CreateCookieService } from './services/cookie.service';
import { FilterdetailsComponent } from './filterdetails/filterdetails.component';
import { AnalysisComponent } from './analysis/analysis.component';
import { QueueComponent } from './queue/queue.component';
import { ReportComponent } from './report/report.component';
import { ReportService } from './services/report.service';
import { ExcelService } from './services/excel.service';
import { MatSortModule } from '@angular/material';


@NgModule({
  declarations: [
    AppComponent,
    SearchformComponent,
    DetailsComponent,
    CommontableComponent,
    PageNotFoundComponent,
    HomeComponent,
    RangelistComponent,
    ProcessinvoiceComponent,
    LoginComponent,
    FilterdetailsComponent,
    AnalysisComponent,
    QueueComponent,
    ReportComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'login', component: LoginComponent},
      { path: '', component: SearchformComponent, canActivate: [AuthGuard] },
      { path: 'Details/:id', component: DetailsComponent,  canActivate: [AuthGuard]},
      { path: 'DateRangeList/:sdata', component: RangelistComponent, canActivate: [AuthGuard]},
      { path: 'ProcessInvoice', component: ProcessinvoiceComponent, canActivate: [AuthGuard]},
      { path: 'Analysis', component: AnalysisComponent, canActivate: [AuthGuard]},
      { path: 'Queue', component: QueueComponent, canActivate: [AuthGuard]},
      { path: 'Report', component: ReportComponent, canActivate: [AuthGuard]},
      { path: 'FilterDetails/:fvalue', component:FilterdetailsComponent, canActivate: [AuthGuard]},
      { path: 'Search', redirectTo: '', pathMatch: 'full' },
      { path: '**', component: PageNotFoundComponent },
    ]),
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
    MatSortModule
  ],
  providers: [
    SearchService,
    CommonService,
    AuthService,
    AuthGuard,
    CreateCookieService,
    ReportService,
    ExcelService
  ],
  bootstrap: [AppComponent],
  entryComponents:[
    ProcessinvoiceComponent
  ]
})
export class AppModule { }
