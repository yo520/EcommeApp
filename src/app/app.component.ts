import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FlowbitService } from './core/searvises/flowbit/flowbit.service';
import { FooterComponent } from "./features/layout/footer/footer.component";
import { NavbarComponent } from "./features/layout/navbar/navbar.component";
import { NgxSpinnerModule } from "ngx-spinner";
import { NgxSpinnerService } from "ngx-spinner";


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FooterComponent, NavbarComponent,NgxSpinnerModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'e-commerceApp';
  private spinner: NgxSpinnerService = inject(NgxSpinnerService);
  constructor(private flowbiteService: FlowbitService) {}

  ngOnInit(): void {
    this.flowbiteService.loadFlowbite((flowbite: any) => {
      // Your custom code here
      console.log('Flowbite loaded', flowbite);
    });
  }
}
