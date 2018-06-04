import { Component,
         OnInit,
         Input,
         ViewEncapsulation,
         OnChanges,
         SimpleChanges,
         DoCheck,
         AfterContentInit,
         AfterContentChecked,
         AfterViewInit,
         AfterViewChecked,
         OnDestroy,
         ViewChild,
         ElementRef,
         ContentChild } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
  //encapsulation: ViewEncapsulation.Emulated
  //to extend the behaviour to the entire app (None - entire app, Emulated - default, Native - uses shadow DOM only in browsers that support it)
})
export class ServerElementComponent implements
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  ViewChild {
  @Input('srvElement') element: {type: string, name: string, content: string};
  @Input() name: string;
  @ViewChild('heading') header: ElementRef;
  @ContentChild('contentParagraph') paragraph: ElementRef;

  constructor() {
    console.log("Constructor called!");
  }

  ngOnChanges(changes: simpleChanges) {
    console.log("ngOnChanges called!");
    console.log(changes);
  }

  ngDoCheck() {
    console.log("ngDoCheck called!");
  }

  ngOnInit() {
    console.log("ngOnInit called!");
  }

  ngAfterContentInit() {
    console.log("ngAfterContentInit called!");
    console.log(this.header.nativeElement);
    console.log(this.contentParagraph.nativeElement);
  }

  ngAfterContentChecked() {
    console.log("ngAfterContentChecked called!");
  }

  ngAfterViewInit() {
    console.log("ngAfterViewInit called!");
  }

  ngAfterViewChecked() {
    console.log("ngAfterViewChecked called!");
  }

  ngOnDestroy() {
    console.log("ngOnDestroy called!");
  }

}
