import { ChangeDetectorRef, Component, ElementRef, ViewChild } from '@angular/core';
import { DepartamentosService } from '../../services/service.departamentos';

@Component({
  selector: 'app-create-departamento-component',
  standalone: false,
  styleUrl: './create-departamento-component.css',
  templateUrl: './create-departamento-component.html',
})
export class CreateDepartamentoComponent {
  @ViewChild("cajaid") cajaid!: ElementRef
  @ViewChild("cajalocalidad") cajalocalidad!: ElementRef
  @ViewChild("cajadepartamento") cajadepartamento!: ElementRef

  constructor(
      private _cdr: ChangeDetectorRef,
      private _service: DepartamentosService,
    ) {}


  async insertarDepartamento(): Promise<void> {
    
  }
}
