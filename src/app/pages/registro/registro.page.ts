import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
  

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  usuario={
    user:'',
    email:'',
    password:''
  }

  constructor(private alertController: AlertController) { }

  ngOnInit() {}
  async mostrarAlerta() {
    const alert = await this.alertController.create({
      header: 'Registro Exitoso',
      message: 'Tu cuenta ha sido registrada con éxito.',
      buttons: ['OK'],
      
    });
    await alert.present();
  }
  Enviar(){
    this.mostrarAlerta();
    this.usuario.user='';
    this.usuario.email='';
    this.usuario.password='';
  }
}
