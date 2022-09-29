/*setTimeout(function () { 
    console.log('waiting time = ')
    }, 2000);*/

let counter = 0;
function timeout() {
    setTimeout(function() {
        console.log('eu te amo x' + counter++);
        timeout();
    }, 2000)
}

timeout();
// ctrl + c