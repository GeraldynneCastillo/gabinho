import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-inisesion',
  templateUrl: './inisesion.page.html',
  styleUrls: ['./inisesion.page.scss'],
})
export class InisesionPage implements OnInit {
  usuario = {
    user: '',
    password: ''
  }

  constructor(private alertController: AlertController) { }

  ngOnInit() {}

  async mostrarAlerta() {
    const alert = await this.alertController.create({
      header: 'Inicio de Sesión',
      message: 'Tu cuenta ha sido iniciada con éxito.',
      buttons: ['OK']
    });
    await alert.present();
  }
  Enviar() {
    this.mostrarAlerta(); 
    this.usuario.user = '';
    this.usuario.password = '';
  }
}