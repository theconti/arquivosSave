// class GetBill {
//     constructor(fname, lname, subtotal, taxrate, service) {
//         this.fname = fname;
//         this.lname = lname;
//         this.subtotal = subtotal;
//         this.taxrate = taxrate;
//         this.service = service;
//     }
//     fullname() {
//         return `${this.fname} ${this.lname}`;
//     }
//     getTax() {
//         return Math.round(this.taxrate * this.subtotal);
//     }
//     getTip() {
//         if (this.service === 'good') {
//             return Math.round(this.subtotal * 0.18);
//         } else {
//             return Math.round(this.subtotal * 0.25);
//         }
//     }
//     totalBill() {
//         return `a conta de ${this.fullname()} é de $${this.subtotal}. Com a taxa de $${this.getTax()}. A gorjeta de $${this.getTip()} opcional. \n
//         total da conta: $${this.getTax() + this.getTip() + this.subtotal}.`;
//     }
// }





// const cliente = new GetBill('mary', 'beth', 200, 0.1, 'excellent');
// const cliente1 = new GetBill('becky', 'smith', 100, 0.05, 'good');

// // console.log(cliente);
// // console.log(cliente1);
// console.log()
// console.log(cliente1.totalBill())

class Bank {
    constructor(cliente, balance){
        this.cliente = cliente;
        this.balance = balance;
    }
    deposito(quantia) {
     this.balance += quantia
    }

    withdrawing(quantia1){
        this.balance -= quantia1
    }
    conta(){
        if( this.balance < 0){
        return ` você precisa depositar ${-1 * this.balance} `
        }
        else {
            return this.balance
        }
    }
}

const cliente = new Bank("bia", 600)
cliente.deposito(10)
cliente.withdrawing(990)

console.log(cliente.conta())