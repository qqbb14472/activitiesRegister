import { Component } from '@angular/core';
import { Activity } from '../activity';

@Component({
  selector: 'app-activities-detail',
  templateUrl: './activities-detail.component.html',
  styleUrls: ['./activities-detail.component.css']
})
export class ActivitiesDetailComponent {


  activity1:Activity=
  {id:1,
    activityName:'活动1',
    activityDate:'2024-01-17',
    activityLocation:'活动1地点',
    activityPoster:'活动1海报'};


  activitySelected?:Activity;

  onRegister(activityPassed:Activity):void{

    //null;empty string spaces- "";undefined;NAN - Not number zero;;false
    if(activityPassed){
        this.activitySelected=activityPassed;
        
    }
    
    }

}
