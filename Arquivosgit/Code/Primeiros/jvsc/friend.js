function friend(friends) {
    const list = [];
    friends.forEach((element) => {
        if (element.length === 4) {
            list.push(element);
        }
    });
    return list;
}

const test = ['Ryan', 'Kieran', 'Mark'];

friend(test);
