import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { UserComponent } from './user/user.component';
import { EditstudentComponent } from './user/editstudent/editstudent.component';
import { CourseComponent } from './course/course.component';
import { EditcourseComponent } from './course/editcourse/editcourse.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, UserComponent, EditstudentComponent, CourseComponent, EditcourseComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
