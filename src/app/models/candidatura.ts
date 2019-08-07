import { Vaga } from './vaga';
import { Candidato } from './candidato';

export class Candidatura {
    id: number;
    idCandidato: number;
    candidato: Candidato;
    idVaga: number;
    vaga: Vaga
}
