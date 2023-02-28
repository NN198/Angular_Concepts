import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-custom-tutorial',
  templateUrl: './pipe-custom-tutorial.component.html',
  styleUrls: ['./pipe-custom-tutorial.component.css']
})
export class PipeCustomTutorialComponent implements OnInit {
  public name="Slashg Codes"
  // dateToday:string
  dateToday:number
  tableWidth="800"
  
  classroom = [
    {name:"Student 1", date: '21/09/2000'},
    {name:"Student 2", date: '08/03/2010'},
    {name:"Student 3", date: '03/11/1997'},
    {name:"Student 4", date: '04/05/1999'}
  ]
  
  students = [
    {name:"Student 1", maths: 15, science: 14, literature: 12, socio: 17, total:80},
    {name:"Student 2", maths: 20, science: 16, literature: 14, socio: 16, total:80},
    {name:"Student 3", maths: 17, science: 19, literature: 15, socio: 14, total:80},
    {name:"Student 4", maths: 10, science: 15, literature: 20, socio: 19, total:80}
  ]
  
  constructor() { 
    //this.dateToday = new Date().toDateString();
    this.dateToday = Date.now()
  }

  ngOnInit(): void {
     
  }

}
