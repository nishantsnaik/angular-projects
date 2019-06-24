import { Component, OnInit } from '@angular/core';

@Component({
  //different selector types, refer to app.componenet.ts to chk the usage
  selector: 'app-servers',
  //by attribute
  //selector: '[app-servers]',
  //by class
  //selector: '.app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer=false;
  serverCreationStatus:string="No Server was created";
  serverName='';
  serverCreated=false;
  servers = ['Test Server','Test Server 2'];

  constructor() { 
    setTimeout(() => {
      this.allowNewServer=true;
    },2000);
  }

  ngOnInit() {
  }

  onCreateServer(){
    this.serverCreated=true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server was created! Name is ' + this.serverName;
  }

  onUpdateServerName(event: Event){
    console.log(event);
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
