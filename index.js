function writeCards(array, holiday, friends) {
    friends = [];
    for (let i = 0; i < array.length; i++) {
        friends.push(`Thank you, ${array[i]}, for the wonderful ${holiday} gift!`);
    }

    return friends

}

writeCards(["Ada", "Tommy", "Arthur"], "surprise", friends);

function countDown(num) {
    let i = num;
    while (i >= 0) {
        console.log(i);
        i--;
    }
}

countDown(10);