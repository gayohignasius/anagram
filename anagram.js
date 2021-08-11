var words = ['kita', 'atik', 'tika', 'aku', 'kia', 'makan', 'kua'];

var anagrams = {};

groupAnagrams(words);

function manualSorting(array) {
    var done = false;
    while (!done) {
        done = true;
        for (var i = 0; i < array.length; i++) {
            for (var j = 0; j < array.length-i-1; j++){
                if (array[j] > array[j+1]) {
                    done = false;
                    var temp = array[j];
                    array[j] = array[j+1];
                    array[j+1] = temp;
                }
            }
        }
        return array;
    }
}

function groupAnagrams(strs) {
    for (var a in strs) {
        var word = strs[a];
        var key = word.split('');
        var keySorted = manualSorting(key);
        // console.log(keySorted.join(''));
        var kunci = keySorted.join('');

        if (anagrams[kunci]) {
            anagrams[kunci].push(word)
        } else {
            anagrams[kunci] = [word]
        }
    }
    return console.log(anagrams);
}