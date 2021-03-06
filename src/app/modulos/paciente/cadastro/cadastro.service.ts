import {
    Injectable
  } from '@angular/core';
  import {
    Http,
    Response
  } from '@angular/http';
  import 'rxjs/add/operator/map';
  import {
    HttpClient,
    HttpResponse
  } from '@angular/common/http';
  import {
    Observable
  } from 'rxjs/Observable';
  import {
    PacienteModel
  } from './../models/paciente.model';
  export type EntityResponseType = HttpResponse < PacienteModel > ;
  @Injectable()
  export class CadastroService {

    constructor(private http: HttpClient) {}

    private urlCep = 'https://viacep.com.br/ws';
    private urlCpf = 'https://geradorapp.com/api/v1/cpf/validate';// site está fora.
    private urlPost = 'https://5aef8bf15139c80014f22900.mockapi.io/clinica-sorrisus/pacientes';

    salvarPaciente(paciente: PacienteModel): Observable < EntityResponseType > {
        return this.http.post < PacienteModel > (this.urlPost, paciente, {
            observe: 'response'
        });
    }
    getCep(cep: string) {
        return this.http.get(`${this.urlCep}/${cep}/json/`);
    }
    getValidarCpf(cpf: string, tk: string) {
        return this.http.get(`${this.urlCpf}/${cpf}?token=${tk}`);
    }

  }
