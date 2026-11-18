import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { DepartamentosService } from '../../services/service.departamentos';

@Component({
  selector: 'app-delete-routing-component',
  standalone: false,
  styleUrl: './delete-routing-component.css',
  templateUrl: './delete-routing-component.html',
})
export class DeleteRoutingComponent implements OnInit{
  mensaje!: string
  iddepartamento!: number
  

  constructor(
    private _active: ActivatedRoute,
    private _cdr: ChangeDetectorRef,
    private _service: DepartamentosService,
  ) {}

  async eliminarDepartamento(): Promise<void>{
    await this._service.borrarDepartamentos(this.iddepartamento);
    this.mensaje = "Departamento eliminado";
    this._cdr.detectChanges();
  }


  async ngOnInit(): Promise<void> {
    this._active.params.subscribe((params: Params) => {
      let id = params['id'];
      this.iddepartamento = id;
      this.mensaje = "Dato recibido: " + id;
      this._cdr.detectChanges();
    });
}
}