import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SheetComponent } from '../modules/sheet/sheet/sheet.component';

const routes: Routes = [
  { path: 'sheets', component: SheetComponent },
  { path: 'sheets/:sheetID', component: SheetComponent }

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
