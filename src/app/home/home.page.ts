import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  
  constructor(private router: Router) {
    this.router.navigate(['home/perfil'])
  }
  segmentChanged($event){
    console.log($event.detail.value);
    let direction=$event.detail.value
    if (direction =='salir'){
      localStorage.removeItem('ingresado');
      this.router.navigate(['login'])
    }
    else{
       this.router.navigate(['home/'+direction])
    }
  }

}

