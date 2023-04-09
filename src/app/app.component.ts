import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentPage =0;

  images=[
    {
      title:'Deniz Kum Güneş',
      url:'https://plus.unsplash.com/premium_photo-1676645882020-8387c2c77ef8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmVhY2h8ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60',
    },
    {
      title:'Maslak',
      url:'https://images.unsplash.com/photo-1573215123219-3df36ac842a3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bWFzbGFrfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60',
    },
    {
      title:'Belgrad Ormanı',
      url:'https://images.unsplash.com/photo-1642106224780-6373c7fdf837?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8QmVsZ3JhZCUyMG9ybWFuJUM0JUIxfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60',
    },
    {
      title:'Uludağ',
      url:'https://images.unsplash.com/photo-1599381638457-7065620e142c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dWx1ZGElQzQlOUZ8ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60',
    },
    {
      title:'Yalova',
      url:'https://images.unsplash.com/photo-1638782830530-8c96d904a4a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8WWFsb3ZhfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60',
    },
    {
      title:'Deniz Kum Güneş',
      url:'https://plus.unsplash.com/premium_photo-1676645882020-8387c2c77ef8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmVhY2h8ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60',
    },
    {
      title:'Maslak',
      url:'https://images.unsplash.com/photo-1573215123219-3df36ac842a3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bWFzbGFrfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60',
    },
    {
      title:'Belgrad Ormanı',
      url:'https://images.unsplash.com/photo-1642106224780-6373c7fdf837?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8QmVsZ3JhZCUyMG9ybWFuJUM0JUIxfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60',
    },
    {
      title:'Uludağ',
      url:'https://images.unsplash.com/photo-1599381638457-7065620e142c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dWx1ZGElQzQlOUZ8ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60',
    },
    {
      title:'Yalova',
      url:'https://images.unsplash.com/photo-1638782830530-8c96d904a4a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8WWFsb3ZhfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60',
    },
    {
      title:'Deniz Kum Güneş',
      url:'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2h8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
    },
    {
     title: 'Belgrad Ormanı',
     url:
       'https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=60'
   },
   {
     title: 'Maslak',
     url:
       'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=60'
   },
   {
     title: 'Uludağ',
     url:
       'https://images.unsplash.com/photo-1517299321609-52687d1bc55a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=60'
   },
   {
    title:'Deniz Kum Güneş',
    url:'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2h8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
  },
  {
   title: 'Belgrad Ormanı',
   url:
     'https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=60'
 },
 {
   title: 'Maslak',
   url:
     'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=60'
 },
 {
   title: 'Uludağ',
   url:
     'https://images.unsplash.com/photo-1517299321609-52687d1bc55a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=60'
 }

  ]

  pageIndex(index:number){
    return Math.abs(this.currentPage- index)<5;
  }

  // changePage(number: number){
  //   this.currentPage=number; 
  // } Uzun yol
}
