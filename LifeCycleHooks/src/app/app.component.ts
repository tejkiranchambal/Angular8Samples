import { Component,OnInit,AfterViewInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,AfterViewInit{
  title = 'hooks';
  status = true ;
  value: any;

  getTime() {
    return 'Morning';

  }
  ngOnInit(){
 console.log('Parent ngOnInit called');
 }

  ngAfterViewInit(){
 console.log('Parent ngAfterViewInit called');
 }
  submitButton(company) {
    this.value = company.value;
  }
   RemoveChild() {
    this.status = false ;
  }
}
