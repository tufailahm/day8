import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {

  employeeName = "NotAvailable"
  imageURL = "https://picsum.photos/200/300"

  showElement = false; 
  showCalculator = false;
  departments = ['HR', 'Finance', 'Security', 'Logistics' , 'Safety']


  num1: number = 0
  num2: number = 0
  sum : number = 0
  constructor() 
  {
    this.employeeName = "Benjamin"
  }

  ngOnInit(): void {
    this.employeeName = "James"
  }

  sayHello() {
    this.employeeName = "Sofya"
    this.imageURL = "sassets/sofya.jpg"
  }
  addNumbers() {
    //code to sum the numbers
    this.sum = this.num1 + this.num2
  }

  showHideCalculator(){
   this.showCalculator = !this.showCalculator
  }
}
