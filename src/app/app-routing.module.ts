import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';

const routes: Routes = [  
  {
    path: "",    
    redirectTo: "frameworks",    
    pathMatch: "full"
  },
  {
    path: "frameworks",
    loadChildren: () => import("./frameworks/frameworks.module").then(m => m.FrameworksModule)    
  },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, relativeLinkResolution: 'legacy' })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }


