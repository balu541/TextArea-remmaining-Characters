import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatSelectModule} from '@angular/material/select';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatTabsModule} from '@angular/material/tabs';
import {ReactiveFormsModule } from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatNativeDateModule, DateAdapter} from '@angular/material/core';
import {MatInputModule} from '@angular/material/input';
import { CommonModule } from '@angular/common';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule }   from '@angular/forms';
import { SampleComponent } from './sample/sample.component'
import {HttpClientModule } from '@angular/common/http';
import {MatStepperModule} from '@angular/material/stepper';
@NgModule({
  declarations: [
    AppComponent,
    SampleComponent,
  
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonToggleModule,
    MatTabsModule,
    ReactiveFormsModule,
    FormsModule,
    MatDatepickerModule,
    MatFormFieldModule,
MatNativeDateModule,
MatInputModule,
MatButtonModule,
CommonModule,
MatSelectModule,
HttpClientModule,
MatStepperModule,
NgMultiSelectDropDownModule.forRoot()

  ],
  providers: [],

  bootstrap: [AppComponent]
})
export class AppModule { }
