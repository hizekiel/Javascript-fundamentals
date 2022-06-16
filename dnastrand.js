const dna = ['G', 'A', 'T', 'C'];

function dnastrand(element) {
    const newdna = [];
    for (i = 0; i < dna.length; i++) {
        if ('G' === 'C') {
            newdna.push('C')

        } else if ('A' === 'T') {

            newdna.push('T')
        } else if ('T' === 'A') {

            newdna.push('A')
        } else if ('C' === 'G') {
            newdna.push('G')
        }
    }
    return newdna;
}
dnastrand(['G', 'A', 'T', 'C']);
console.log(dnastrand());