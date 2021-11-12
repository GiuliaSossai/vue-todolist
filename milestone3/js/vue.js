/***
/***
 * *MILESTONE 2*
 * 
Visualizzare a fianco ad ogni item ha una “x”: cliccando su di essa, il todo viene rimosso dalla lista.
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
  },

  methods: {
    togliItem(index){
      this.toDoList.splice(index, 1);
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
