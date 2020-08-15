import { identifierModuleUrl } from '@angular/compiler';

export class Product {
    id: number;
    name: string;
    description: string;
    price: number;
    imageUrl: string;

    constructor(id, name, description = '', price = 0, imageUrl="https://www.gizmochina.com/wp-content/uploads/2019/09/Apple-iPhone-11-1-500x500.jpg") {
        this.id = id 
        this.name = name
        this.description = description
        this.price = price
        this.imageUrl = imageUrl
    }
}
