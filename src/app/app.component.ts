import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Wizard';

  public indexArray: Set<number> = new Set<number>();

  public wizardId:number=-1;

  public wizardData = [
    {
      id:1,
      heading:"Step 1",
      subheading:"This is step 1"
    },
    {
      id:2,
      heading:"Step 2",
      subheading:"This is step 2"
    },
    {
      id:3,
      heading:"Step 3",
      subheading:"This is step 3"
    },
    {
      id:4,
      heading:"Complete",
      subheading:"You have successfully completed all steps."
    }
  ];

  public changeIndex(ind:number):void {
    
    if (this.indexArray.size>=ind){
      this.wizardId = ind;
      this.indexArray.add(ind);

    }
  }
  
}
