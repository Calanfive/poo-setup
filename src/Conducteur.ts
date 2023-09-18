import { Voiture } from "./Voiture"

export class Conducteur {

    public nom: string
    public prenom: string
    public voiture: Voiture
    public voitures: Voiture[]
  
    constructor(
        nom: string,
        prenom: string,
        voiture: Voiture,
        voitures: Voiture[]
    ) {
      this.nom = nom
      this.prenom = prenom
      this.voiture = voiture
      this.voitures = voitures
    }
   
    public direBonjour(): void {
      console.log(`Bonjour, je m\'appelle ${this.prenom} ${this.nom} et je conduis une ${this.voiture}`);
      
    } 

    public crasherVoiture(){
        this.voiture.crasher()
    }
  }