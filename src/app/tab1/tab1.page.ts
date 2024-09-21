import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonFab, IonFabButton, IonIcon, IonCol, IonImg, IonGrid, IonRow } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { FotoService } from '../services/foto.service';
import { CommonModule } from '@angular/common'; // Importa CommonModule

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [IonRow, IonGrid, IonImg, IonCol, IonIcon, IonFabButton, IonFab, IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent, CommonModule],
})
export class Tab1Page {
  constructor(public fotoService: FotoService) {}

  async addNewPhoto() {
    await this.fotoService.addNewPhoto();
  }
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////CODIGO ORG

