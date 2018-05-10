import { Component } from '@angular/core';

// create a decorator
function logDecor(t, n, d){
	// console.dir(d)

	return function(){
		console.log(`Line 10: ${n} was called` );
	}
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(){
  	this.greet()
  }

  @logDecor
	greet(){
		console.log(`Hi`)
	}
}


