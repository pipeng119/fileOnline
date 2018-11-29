import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Example } from '../model/Example';
import * as CodeMirror from 'codemirror';
// import "codemirror/mode/javascript";
import 'codemirror/mode/sql/sql';
import 'codemirror/addon/hint/show-hint.js';
import 'codemirror/addon/hint/sql-hint.js';
@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.scss']
})
export class ShowComponent implements OnInit {

  // private code: any = '';

  // private cmOptions: any = '';

  editFlag: number;
  exampleList: Array<Example> = [
    {
      id:1,
      background:"red"
    },
    {
      id:2,
      background:"blue"
    },
    {
      id:3,
      background:"yellow"
    },
  ];
  // urlInfo = 'assets/demo.html';

  @ViewChild('frame')
  frameElement:ElementRef;

  constructor() { 
    this.editFlag = 1;
  }

  ngOnInit() {
  }

  run(){
    // console.log(1);
    // console.log(this.frameElement.nativeElement.contentWindow.document);
    let frameWindow = this.frameElement.nativeElement.contentWindow;
    let fromDocument = frameWindow.document;
    fromDocument.getElementById('div').innerHTML = "我依然是辣么帅";
  }
}
