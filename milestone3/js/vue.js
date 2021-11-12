/***
 * *MILESTONE 2*
 * 
Predisporre un campo di input testuale e un pulsante “aggiungi”: cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti.
 */

const app = new Vue ({
  el: '#app',

  data:{
    toDoList: [
      {
        text: 'comprare cibo gatti',
        done: false
      },
      {
        text: 'chiamare marilù',
        done: false
      },
      {
        text: 'ritirare zaino',
        done: true
      },
      {
        text: 'fare torta',
        done: false
      }
    ],

    nuovoItem: {
      text: '',
      done: false
    },

    methods: {
      togliItem(index){
        this.toDoList.splice(index, 1);
      },

      inserisciItem(){
        //dentro array pusho tutto il nuovo item
        this.toDoList.push(this.nuovoItem);
        console.log('hai inserito');

        //resetto input
        this.nuovoItem.text = '';
      }
    }
  }
});




  

//     inserisciNuovoItem(){
//       console.log('hai inserito nuovo item')
//       //prima faccio controllo validità dell'input
//       //if(this.nuovoItem.text.length < 2){
//         //this.mgsErrore = true
//       //} else {
//         //pusho il nuovo ToDo nell'array usando v-model
//         //this.toDoList.push(this.nuovoItem.text);

//         //resetto il text di input
//         //this.nuovoItem.text = '';
//       //}  
//     }
//   }

// });
