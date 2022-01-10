console.log('JS OK!');
/* Crea un array di email;
Chiedi all’utente la sua email.
controlla che sia nella lista di chi può accedere, 
stampa un messaggio appropriato in console sull’esito del controllo.*/

// * Primo metodo
//  1 Creare un array di email
const emailIds = [ "albert.eisntein@gmail.com", "leonardo_da_vinci@hotmail.com",
                    "jagadish_chandra_bose@yahoo.com", "alan_turing@yahoo.com", "srinivasa.ramanujan@gmail.com",
                    "bjarne_stroustrup@yahoo.com", "max.planck@gmail.com", "nikola.tesla@hotmail.com",
                    "galileo_galilei@hotmail.com", "a.p.j.abdul.kalam@gmail.com", "richard.stallman@inbox.com",
                    "john_von_neumann@mail.com", "c_v_raman@yahoo.com", "isaac.newton@yandex.com",
                    "s_chandrashekar@hotmail.com", "james_gosling@shortmail.com", "ken.thompson@gmail.com",
                    "stephen_hawking@rediffmail.com", "marie_curie@yahoo.com", "michael.faraday@hotmail.com",
                    "charles.babbage@hotmail.com" ];
// 2 Chiedere all'utente la sua mail di accesso
const clientMail = prompt('Inserisci la tua email','albert.eisntein@gmail.com' );
// 3 Dichiarare la variabile message
let message = '';
// 4 If per vedere se la mail è presente oppure no
if(emailIds.includes(clientMail)){
    message = 'ok, la tua email è stata trovata!';
}else{
    message = "la tua email non è presente nell'archivio";
};
// 5 Stampare in console
console.log(message);

// * Secondo metodo 
// // 1 Creare un array di email
// const emailIds = [ "albert.eisntein@gmail.com", "leonardo_da_vinci@hotmail.com",
//                     "jagadish_chandra_bose@yahoo.com", "alan_turing@yahoo.com", "srinivasa.ramanujan@gmail.com",
//                     "bjarne_stroustrup@yahoo.com", "max.planck@gmail.com", "nikola.tesla@hotmail.com",
//                     "galileo_galilei@hotmail.com", "a.p.j.abdul.kalam@gmail.com", "richard.stallman@inbox.com",
//                     "john_von_neumann@mail.com", "c_v_raman@yahoo.com", "isaac.newton@yandex.com",
//                     "s_chandrashekar@hotmail.com", "james_gosling@shortmail.com", "ken.thompson@gmail.com",
//                     "stephen_hawking@rediffmail.com", "marie_curie@yahoo.com", "michael.faraday@hotmail.com",
//                     "charles.babbage@hotmail.com" ];
// // 2 Chiedere all'utente la sua mail di accesso
// const clientMail = prompt('Inserisci la tua email','albert.eisntein@gmail.com' );
// // 3 Dichiarare la variabile message
// let message = "la tua email non è presente nell'archivio";
// for(let i = 0; i < emailIds.length; i++){
//     const currentEmail = emailIds[i];
//     if(currentEmail === clientMail) {
//         message = 'ok, la tua email è stata trovata!';
//  break;
//     }
// }
// console.log(message);

