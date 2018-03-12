import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ConceptsPage } from './concepts';

@NgModule({
  declarations: [
    ConceptsPage,
  ],
  imports: [
    IonicPageModule.forChild(ConceptsPage),
  ],
})
export class ConceptsPageModule {}
