import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output('bpCreated') bluePrintCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  //newServerName = '';
  //newServerContent = '';
  @ViewChild('serverComponentInput') serverComponentInput: ElementRef;
  //gives us access to the first occurrence of serverComponentInput.
  //We could also pass an entire child component and would return its first appearence inside the parent component.
  constructor() { }

  ngOnInit() {
  }

  onAddServer(serverNameInput: HTMLInputElement) {
    this.serverCreated.emit({serverName: serverNameInput.value, serverContent: this.serverComponentInput.nativeElement.value});
  }

  onAddBlueprint(serverNameInput: HTMLInputElement, serverComponentInput: HTMLInputElement) {
    this.bluePrintCreated.emit({serverName: serverNameInput.value, serverContent: this.serverComponentInput.nativeElement.value});
  }

}
