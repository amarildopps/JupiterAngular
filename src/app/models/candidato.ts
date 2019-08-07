import { Candidatura } from './candidatura';
export class Candidato {
    id: number;
    nome: string;
    email: string;
    password: string;
    numIdentificacao: string;
    ficheiroCurriculo: string;
    candidaturas: Candidatura[];
}
