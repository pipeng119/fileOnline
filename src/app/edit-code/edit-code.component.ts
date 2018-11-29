import { Component, OnInit } from '@angular/core';
import 'codemirror/mode/javascript/javascript.js'

@Component({
  selector: 'app-edit-code',
  templateUrl: './edit-code.component.html',
  styleUrls: ['./edit-code.component.scss']
})
export class EditCodeComponent implements OnInit {
  code: any = '';
  cmOptions: any = '';
  constructor() { 
    this.cmOptions = {
      mode: {name: "text/javascript"},
      theme:'monokai',
      lineNumbers: true,
      styleActiveLine: true
    }
  }

  ngOnInit() {
  }

}
