//returning number

function dayDiff(first, second) {
    return Math.floor((second - first) / (1000 * 60 * 60 * 24));
}

function hourDiff(first, second) {
    return Math.floor((second - first) / (1000 * 60 * 60));
}

function minuteDiff(first, second) {
    return Math.floor((second - first) / (1000 * 60));
}

function secondDiff(first, second) {
    return Math.floor((second - first) / (1000));
}
