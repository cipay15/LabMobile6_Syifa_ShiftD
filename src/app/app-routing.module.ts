import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { MyProjectComponent } from './pages/my-project/my-project.component';
import { AboutMeComponent } from './pages/about-me/about-me.component';

const routes: Routes = [
  {
    path: 'my-project',
    component: MyProjectComponent
  },
  {
    path: 'about-me',
    component: AboutMeComponent
  },
  {
    path: '',
    redirectTo: 'my-project',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
