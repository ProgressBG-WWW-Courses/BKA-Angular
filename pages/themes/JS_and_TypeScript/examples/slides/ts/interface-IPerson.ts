"use strict";
interface IDog{
	name: string,
	speak: ()=>void
}

var pluto: IDog = {
	name:"Pluto",
	speak: ()=>console.log("I'm "+pluto.name)
}

pluto.speak();

