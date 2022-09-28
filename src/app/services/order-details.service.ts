import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {

  constructor() { }

  // food details 
  
  foodDetails = [
    {
      id:1,
      foodName:"Pizza Funghi",
      foodDetails:"Deep-Dish Pizza Crust.",
      foodPrice:8.60,
      foodImg:"./assets/img/pic01.jpg"
    },
    {
      id:2,
      foodName:"Avocado Supreme",
      foodDetails:"Onion| Green Capsicum, Tomatoes, Red Paprika topped with Cheese",
      foodPrice:6.50,
      foodImg:"./assets/img/pic02.jpg"
    },
    {
      id:3,
      foodName:"Veg Biryani",
      foodDetails:"Biryani A homely mix of veggies, seasoned with Indian spices.",
      foodPrice:9.65,
      foodImg:"./assets/img/pic03.jpg"
    },
    {
      id:4,
      foodName:"Cheese & Olive Pasta",
      foodDetails:"A home made italian pasta with red sauce, parmesian cheese and black olives.",
      foodPrice:6.60,
      foodImg:"./assets/img/pic04.jpg"
    },
    {
      id:5,
      foodName:"Mint Springrolls",
      foodDetails:"(Eggless) Indulge in richly mixed veggies wrapped with mint leaves.",
      foodPrice:4.00,
      foodImg:"./assets/img/pic05.jpg"
    },
    {
      id:6,
      foodName:"Vegan Burger",
      foodDetails:"Quater Punder Vegan burger ",
      foodPrice:8.00,
      foodImg:"./assets/img/pic06.jpg"
    }
  ]

}
