import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { ConfirmationService } from 'primeng/api';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { of } from 'rxjs';
import { Carro } from 'src/app/shared/models/carro.model';
import { CarrosService } from 'src/app/shared/services/carros-service/carros.service';
import { SharedModule } from 'src/app/shared/shared.module';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let carrosService: CarrosService;

  afterEach(() => {
    TestBed.resetTestingModule();
  })

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeComponent],
      imports: [
        SharedModule,
        FormsModule,
        ConfirmDialogModule
      ],
      providers: [
        ConfirmationService,
        CarrosService
      ]
    })
      .compileComponents();
    fixture = TestBed.createComponent(HomeComponent);
    carrosService = TestBed.inject(CarrosService);
    component = fixture.componentInstance;
  });



  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Deve inicializar com carros', () => {
    spyOn(carrosService, 'listarCarros').and.returnValue(of([new Carro('Model 3', 'Tesla', 2020)]))
    fixture.detectChanges();
    expect(carrosService.listarCarros).toHaveBeenCalled();
    expect(component.carros?.length).toBeGreaterThan(0);
  });

  it('Deve filtrar carros', () => {
    spyOn(carrosService, 'listarCarros').and.returnValue(of([new Carro('Model 3', 'Tesla', 2020), new Carro('Model 2', 'Tesla', 2020)]))
    fixture.detectChanges();
    component.filtroCarros = 'Model 2';
    component.filtrarCarros();
    expect(carrosService.listarCarros).toHaveBeenCalledWith('Model 2');
  });
});
