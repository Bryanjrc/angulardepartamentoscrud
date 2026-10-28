import { ChangeDetectorRef, Component, ElementRef, ViewChild } from '@angular/core';
import { ServiceDepartamentos } from '../../services/service.departamentos';
import { Departamento } from '../../models/departamento';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-component',
  standalone: false,
  styleUrl: './create-component.css',
  templateUrl: './create-component.html',
})
export class CreateComponent {
  public mensaje!: string;

  @ViewChild("cajaid") cajaid!: ElementRef;
  @ViewChild("cajanombre") cajanombre!: ElementRef;
  @ViewChild("cajalocalidad") cajalocalidad!: ElementRef;

  constructor(
    private _service: ServiceDepartamentos,
    private _cder: ChangeDetectorRef,
    private _router: Router
  ) {}

  async insertDepartamento(): Promise<void> {
    let id = parseInt(this.cajaid.nativeElement.value);
    let nombre = this.cajanombre.nativeElement.value;
    let localidad = this.cajalocalidad.nativeElement.value;
    let dept: Departamento = new Departamento(id, nombre, localidad);
    let response = await this._service.createDepartamento(dept);

    this.mensaje = "Departamento insertado correctamente";
    this._cder.detectChanges();
    this._router.navigate(["/"]);
  }

}
