import { Candidatura } from './candidatura';

export class Vaga {
    id: number;
    descricao: string;
    requisitos: string;
    imagem: string;
    candidaturas: Candidatura[];
}
