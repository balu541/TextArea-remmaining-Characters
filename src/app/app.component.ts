import {Component,OnInit,OnChanges } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import {CommonModule, NgLocalization, NgLocaleLocalization} from '@angular/common'
import { IDropdownSettings } from '../../node_modules/ng-multiselect-dropdown/';
import {ClientService} from './client.service';
import {Observable} from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers:[{ provide: NgLocalization, useClass: NgLocaleLocalization }]
})

export class AppComponent {
  title:any;
  public Customers;
  public descriptionLength:number;
  
  constructor(private c_service:ClientService,private fb: FormBuilder,){}
  profileForm = this.fb.group({
    textControl: ['', Validators.required],
  })
  ngOnInit(){
    //this.getCustDetails();
    //this.getCount();
  }
  onKey(event: any) { // without type info
    this.descriptionLength= 100-(event.target.value.length);
  }
  // getCustDetails(){
  //   this.c_service.getCustomers().subscribe(
  //     data => { this.Customers = data},
  //   );
  // }
}

