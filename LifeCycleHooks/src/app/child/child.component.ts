import {
  AfterContentChecked,
  AfterContentInit, AfterViewChecked, AfterViewInit,
  Component,
  DoCheck,
  Input,
  OnChanges, OnDestroy,
  OnInit,
  SimpleChanges
} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit , OnChanges , DoCheck , AfterContentInit , AfterContentChecked , AfterViewInit , AfterViewChecked , OnDestroy{

  @Input() company = '';
  myCompany: any;

  constructor() {
    console.log('constructor called');
  }
  ngOnInit() {
    console.log('ngOnInit called');
  }


  ngOnChanges(change: SimpleChanges) {
   this.myCompany = change.company.currentValue;
    console.log('ngOnChanges called' + change.company.currentValue);
  /*  console.log('ngOnChanges called');*/
  }


  ngDoCheck() {
    console.log('ngDoCheck called');
  }

    ngAfterContentInit() {
    console.log('ngAfterContentInit Called');
  }

   ngAfterContentChecked() {
    console.log('ngAfterContentChecked called');
  }

   ngAfterViewInit() {
    console.log('ngAfterViewInit called');
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewCheck called');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy called');
  }
}
