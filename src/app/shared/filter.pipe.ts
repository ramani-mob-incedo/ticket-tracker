import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  /* Filters The list of Data by Type and Status */
  transform(value: any, ...args: any): any {
  /* value = List of data
     args = selected filter from component 
  */
  if(args[0]==undefined) {
  	return value;
  }
  else {
  	return value.filter( it => {
    /* Enable the below comment to show all the data if none is selected else the data will be empty
    */

  	/*
    if(args[0].Status == 0 && args[0].Type==0) {
  		return value;
  	}
  	else 
    */

    if(args[0].Status == 0 || args[0].Type==0) {
  		return ((it.Type == parseInt(args[0].Type)) || (it.Status == parseInt(args[0].Status)));
  	} 
  	else {
  		return ((it.Status == parseInt(args[0].Status)) && (it.Type == parseInt(args[0].Type)));
  	}
	});
  }
	 
	  	
   }
  }
