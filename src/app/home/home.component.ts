import { Component, OnInit } from '@angular/core';
import { ExampleService } from '../core/services/example.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
tickets:any = [];
type:number=0; //Task or Bug
status:number=0; //Completed,In Progress,not Started
filterText:any;
statusText: number[] = [1,2,3]; //to select dropdown values
  
  /* Status (1=completed, 2=in progress,3=not started)
   Type (1=Task,2=Bug)
  */
  
  constructor(private ticketService: ExampleService) { }

  ngOnInit() {
  	this.ticketService.getTickets().subscribe(data => {
  		this.tickets = data;
  	});

    /*Default search Filter set to Bug and not started
    to load empty value change default status and type to 0
    */
  	this.type=2;
  	this.status=3;
  	this.filterText={Type:2,Status:3}; 
  }

  filterByType(type:number) {
  	this.type = type === this.type ? 0 : type; //clears selected filter/Tab by Type
  	this.filterText={Type:this.type,Status:this.status};
  }

  filterByStatus(status:number) {
    this.status = status === this.status ? 0 : status; //clears selected filter/Tab By Status
  	this.filterText={Type:this.type,Status:this.status};
  }

  changeStatus(status,id) {
    let index = this.tickets.findIndex(i => i.Id == id);
    this.tickets[index].Status=status
  }

}
