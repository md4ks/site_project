import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { CoreCommonModule } from '@core/common.module';

import { ContentHeaderModule } from 'app/layout/components/content-header/content-header.module';
import {  NgApexchartsModule } from 'ng-apexcharts'; 
import { HomeComponent } from './home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2FlatpickrModule } from 'ng2-flatpickr';
import { CardSnippetModule } from '@core/components/card-snippet/card-snippet.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ToastrModule } from 'ngx-toastr'; 
 
import { ChartsModule } from 'ng2-charts';
 
import { CommonModule } from '@angular/common';
import { FormGridComponent } from './form-grid/form-grid.component';
 
 
const routes = [
 
  {
    path: 'home',
    component: HomeComponent,
    data: { animation: 'home' }
  },
  {
    path: 'form/builder/grid',
    component:FormGridComponent ,
    data: { animation: 'home' }
  },

   
];

@NgModule({
  declarations: [  HomeComponent, FormGridComponent],
  imports: [CommonModule,RouterModule.forChild(routes), ContentHeaderModule, TranslateModule, 
    CoreCommonModule,
    NgbModule,
    FormsModule,
    Ng2FlatpickrModule,
    ReactiveFormsModule,
    NgSelectModule,
    ToastrModule,
    ChartsModule,
    NgxDatatableModule,NgApexchartsModule,
    CardSnippetModule],
  exports: [HomeComponent, FormGridComponent]
})
export class FormBuilderModule {}
