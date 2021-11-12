/***
 * *MILESTONE 2*
 * 
Predisporre un campo di input testuale e un pulsante “aggiungi”: cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti.

**Bonus:**
1- oltre al click sul pulsante, intercettare anche il tasto ENTER per aggiungere il todo alla lista
2- cliccando sul testo dell’item, invertire il valore della proprietà done del todo corrispondente (se `done` era uguale a `false`, impostare `true` e viceversa)

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

    nuovoItem: '',
    msgErrore: false 
  },

  methods: {
    togliItem(index){
      this.toDoList.splice(index, 1);
    },

    inserisciItem(){
      //check validità nuovo item
       if(this.nuovoItem.length < 3){
        this.msgErrore = true;
        setTimeout(() => {
          this.msgErrore = false;
        }, 2000);
      } else {
        //dentro array pusho il nuovoItem che è stringa e quindi gli do il riferimento che volgio io, ovvero che quella stringa sia la proprietà text
        this.toDoList.push({text : this.nuovoItem, done : false});
        console.log('hai inserito');

        //resetto input
        this.nuovoItem = '';
      };
  
    }
  }

});