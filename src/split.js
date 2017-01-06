function split(string, char) {

    var array = [{}];
    var teller = 0;

    if (string != undefined) {
        while (string.indexOf(char) > 0) {
            array[teller] = string.substring(0, string.indexOf(char));
            string = string.substring(string.indexOf(char) + 1, string.length);
            teller++;
        }

        array[teller] = string;
    }
    return array;
}
