import { Component, OnInit } from '@angular/core';
import { ConfirmationService } from 'primeng/api';
import { Observable } from 'rxjs';
import { Carro } from 'src/app/shared/models/carro.model';
import { CarrosService } from 'src/app/shared/services/carros-service/carros.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  carros!: Carro[];
  filtroCarros: string | undefined;

  constructor(private carrosService: CarrosService, private confirmationService: ConfirmationService) { }

  ngOnInit(): void {
    this.carrosService.listarCarros().subscribe(carros => {
      this.carros = carros;
    })
  }

  filtrarCarros() {
    this.carrosService.listarCarros(this.filtroCarros).subscribe(carros => {
      this.carros = carros;
      console.log(carros);
    })
  }

  exibirDialog(carro: Carro) {
    this.confirmationService.confirm({
      message: carro.nome,
      acceptLabel: 'Sim',
      rejectLabel: 'Não',
      accept: () => {

      }
    });
  }

}
