import { ChangeDetectorRef, Component, ElementRef, ViewChild } from '@angular/core';
import { DepartamentosService } from '../../services/service.departamentos';
import { Departamento } from '../../models/departamento';

@Component({
  selector: 'app-create-departamento-component',
  standalone: false,
  styleUrl: './create-departamento-component.css',
  templateUrl: './create-departamento-component.html',
})
export class CreateDepartamentoComponent {
  @ViewChild("cajaid") cajaid!: ElementRef
  @ViewChild("cajalocalidad") cajalocalidad!: ElementRef
  @ViewChild("cajanombre") cajanombre!: ElementRef
  mensaje!: string

  constructor(
      private _cdr: ChangeDetectorRef,
      private _service: DepartamentosService,
    ) {}


  async insertarDepartamento(): Promise<void> {
    let id = parseInt(this.cajaid.nativeElement.value)
    let nombre = this.cajanombre.nativeElement.value
    let localidad = this.cajalocalidad.nativeElement.value
    let dept = new Departamento (id, nombre, localidad)
    await this._service.crearDepartamentos(dept)
    this.mensaje = "Departamento insertado"
    this._cdr.detectChanges();
  }
}
