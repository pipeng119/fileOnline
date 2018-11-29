import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { ElModule } from 'element-angular'
import { CodemirrorModule  } from "ng2-codemirror"
import { FormsModule } from "@angular/forms"

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import 'element-angular/theme/index.css';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { FileComponent } from './file/file.component';
import { ShowComponent } from './show/show.component';
import { EditCodeComponent } from './edit-code/edit-code.component';
@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    FileComponent,
    ShowComponent,
    EditCodeComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ElModule.forRoot(),
    CodemirrorModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
