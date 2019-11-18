import { Component } from '@angular/core'; 
//import { NewService2Service } from './new-service2.service';
//import { HttpClient } from '@angular/common/http';
//import '../myController.js';

class Item{
    breed: string;
    name: string;
    age: number;
     
    constructor(breed: string, name: string, age: number) {
  
        this.breed = breed;
        this.name = name;
        this.age = age;
    }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
    items: Item[] = 
    [
        { breed: "Порода1", name: "Кот1", age: 15 },
        { breed: "Порода2", name: "Кот2", age: 7 },
        { breed: "Порода3", name: "Кот3", age: 1 },
        { breed: "Порода4", name: "Кот4", age: 6 }
    ];
    addItem(breed: string, name: string, age: number): void {
         
        if(breed==null || breed.trim()=="" || name==null || name.trim()=="" || age==null)
            return;
        this.items.push(new Item(breed, name, age));
    }
} 