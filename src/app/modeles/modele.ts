export class Utilisateur {
    id: number;
    username: string;
    password: string;
    prenom: string;
    nom: string;
    roles: JSON;
    tel:string;
    status:string;
    partenaire:number;
    image_name:string;
    update_at: Date;
    numero_compte:string;
    token?: string;
}