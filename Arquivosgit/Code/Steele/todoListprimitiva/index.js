let isListBeingMade = true;
const toDoList = [];

while (isListBeingMade) {
    let action = prompt('What would you like to do?!').toLowerCase();
    while (action === 'new') {
        listItem = prompt('What would you like to add to your list?!');
        toDoList.push(listItem);
        console.log(`${listItem} added to the list`);
        let keepGoing = prompt('Want to add something else?!').toLowerCase();
        if (keepGoing === 'no') {
            action = true;
        }
    }
    if (action === 'list') {
        console.log('*************************************');
        for (const item of toDoList) {
            console.log(`${toDoList.indexOf(item) + 1}: ${item}`);
        }
        console.log('*************************************');
    }
    if (action === 'delete') {
        let itemToBeDeleted = prompt(
            'Type the number of the item you want deleted...'
        );
        if (typeof itemToBeDeleted === 'number') {
            toDoList.splice(itemToBeDeleted - 1, 1);
        } else {
            console.log('Unknow item number!');
        }
    }
    if (action === 'quit') {
        isListBeingMade = false;
    }
}
