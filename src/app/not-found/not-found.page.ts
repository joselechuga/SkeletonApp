import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.page.html',
  styleUrls: ['./not-found.page.scss'],
})
export class NotFoundPage implements OnInit {

  constructor(public navCtrl:NavController) { }


  volver(){
    if(localStorage.getItem('ingresado')){
      this.navCtrl.navigateRoot('home');
      return true;
    }else{
      this.navCtrl.navigateRoot('login');
      return false;
    }
  }

  ngOnInit() {
  }

}
