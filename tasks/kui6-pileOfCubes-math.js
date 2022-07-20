// KUI-6 BUILD A PILE OF CUBES

function findNb(m) {
    let n = 0;
    let sum = 0;
    do {
        sum = sum + n ** 3
        n++;
    } while (sum < m);
    let result = (sum == m) ? n - 1 : -1
    return (result);
}