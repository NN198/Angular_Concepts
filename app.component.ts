import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  
})
export class AppComponent {
  title = 'angular-made-easy';

  //text interpolation
  bio ={
    name: "Anika",
    age: 27,
    country: "India"
  }

  var1=4
  var2=8

  //Property binding example
  imgName="https://c4.wallpaperflare.com/wallpaper/562/135/739/jake-sully-neytiri-ikran-makto-seze-wallpaper-preview.jpg"
  imgWidth=600

  //Event Binding
  fun(){
    this.bio.name = "Beena"
  }
  
 
  changeEvent()
  {
    console.log("Event is changing")
  }

  //Class Binding
  setClass1 = "cls2"
  setClass2  = {cls1:true, cls2:false}
  setClass3 = ['cls1', 'cls2']
}
