import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrl: './servers.component.css'
})
export class ServersComponent implements OnInit{
  allowNewServer = false;
  serverCreationStatus = 'No server has been created'
  serverName = 'testServer';
  serverCreated = false;
  servers = ['TestServer', 'TestServer 2']

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true
    } ,2000);
  }

  ngOnInit(): void {
      
  }

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = this.serverName + ' was created'
  }

  onUpdateServerName(event: Event) {
    console.log(event);
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
