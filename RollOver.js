function rollOver() {
    for (i = 10; i > 0; i--) {

        let j = i;
        if (i <= 10 && i > 1)
            console.log(i + 'in the bed, the little one said rollover ' + j + " " + "fell off");
        else {
            console.log(i + "in the bed, the little on said I am lonely!");
        }
    }

    console.log('The little one Said, Everybody back on the bed!');
}



rollOver();