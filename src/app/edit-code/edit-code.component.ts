import { Component, OnInit } from '@angular/core';
import * as CodeMirror from 'codemirror';

import 'codemirror/mode/javascript/javascript.js';
// import 'codemirror/theme/monokai.css'; 为什么不生效呢？

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
      theme: 'monokai',
      styleActiveLine: true,
      mode: 'javascript',
      // lineNumbers: true,
      tabSize: 10,
      // readOnly:"nocursor",
      smartIndent: true,
    }
  }

  ngOnInit() {
  }

}
