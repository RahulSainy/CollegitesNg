import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { AuthGuard } from './auth/auth.guard'
import { HomeComponent } from './home/home.component'
import { SubjectComponent } from './learning/subject/subject.component'
import { TopicComponent } from './learning/topic/topic.component'

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'learning/subject',
    component: SubjectComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'learning/subject/topic',
    component: TopicComponent,
    canActivate: [AuthGuard],
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard],
})
export class AppRoutingModule {}
