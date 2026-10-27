import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment.development";
import { Departamento } from "../models/departamento";
import { first, firstValueFrom } from "rxjs";

@Injectable()

export class ServiceDepartamentos {
    url = environment.apiDepartamentos;

    constructor(private _http: HttpClient){}

    async getDepartamentosAsync(): Promise<Departamento[]> {
        let request = "api/departamentos";

        return firstValueFrom(
            this._http.get<Departamento[]>(this.url + request)
        );
    }
}