import { Conducteur } from "./Conducteur"
import { Voiture } from "./Voiture"

// class Pomme {

//     public variete: string
//     private _color: string

//     constructor(
//         variete: string,
//         color: string,
//     ) {
//       console.log('Initialisation de la pomme')
//       this.variete = variete
//       this._color = color
//     }

//     public afficher(): void {
//       console.log(`Ma pomme est une ${this.variete} et elle est ${this._color}`);
//     }
  
//     static donnerLheure() {
//       return Date.now()
//     }

//     public get color(): string {
//       return this._color;
//     }
    
//     public set color(color: string) {
//       this._color = color;
//     }

// }

// const apple = new Pomme('Granny Smith', 'verte')
// const apple2 = new Pomme('Pink Lady', 'rose')
// apple.afficher()
// apple.color = 'rouge';
// apple2.color = 'jaune';
// console.log('Cette pomme est ' + apple.color)
// apple2.afficher()

// console.log(Pomme.donnerLheure());

const voiturePetite = new Voiture('rouge', 22)
const voitureNeuve = new Voiture('noire', 100)

voitureNeuve.crasher()

//   console.log(voiturePetite.etat);
//   console.log(voitureNeuve.etat);

const conducteur1 = new Conducteur('Bobby','Jo', voitureNeuve, [])

conducteur1.crasherVoiture()

console.log(conducteur1);
console.log(voitureNeuve);

// DIAGRAMM DE SEQUENCE 

// classDiagram
//     class Voiture{
//       +String couleur
//       +int etat
//       +crasher()
//     }

//     class Conducteur{
//       +String prenom
//       +String nom
//       +String voiture
//       +direBonjour()
//     }

console.log(voitureNeuve.couleur);

  