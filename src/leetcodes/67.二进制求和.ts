function addBinary(a: string, b: string): string {
    let [x, y] = [Number.parseInt(a, 2), Number.parseInt(b, 2)];
    let ans= 0
    let carry = 0
    while (y) {
        ans = x ^ y;
        carry = (x & y) << 1;
        [x, y] = [ans, carry];
    }
    return x.toString(2)
}

addBinary('11', '1')
