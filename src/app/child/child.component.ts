import {AfterViewChecked, AfterViewInit, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit, AfterViewInit, AfterViewChecked {

  constructor() { }

  ngOnInit() {
  }

  greeting(name: string) {
    console.log('hello' + name);
  }

  ngAfterViewChecked(): void {
    console.log('子组件的视图变更检测完毕');
  }

  ngAfterViewInit(): void {
    console.log('子组件的视图初始化完毕');
  }

}
