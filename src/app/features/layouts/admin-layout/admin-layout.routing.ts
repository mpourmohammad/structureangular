import { Routes } from "@angular/router";
import { TableheaderComponent } from "./components/usermanagment/tableheader/tableheader.component";
import { TableuserComponent } from "./components/usermanagment/tableuser/tableuser.component";
import { DashboardComponent } from "./pages/dashboard/dashboard.component";
import { UsermanagmentComponent } from "./pages/usermanagment/usermanagment.component";

export const AdminLayoutRoutes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: []
  },
  {
    path: 'usermanagment',
    component: UsermanagmentComponent,
    children: [
      { path: 'tableheader', component: TableheaderComponent },
      { path: 'tableuser', component: TableuserComponent }
    ]
  }
];
