import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { extract } from '@app/core';
import { Shell } from '@app/shell/shell.service';
import { AboutComponent } from './about.component';
import { JsonFormComponent } from '@app/json-form/json-form.component';

const routes: Routes = [
  Shell.childRoutes([
    { path: 'about', component: AboutComponent, data: { title: extract('About') } },
    { path: 'jsonform', component: JsonFormComponent, data: { title: extract('Json Form') } },
  ])
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class AboutRoutingModule {}
