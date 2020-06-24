function addBinary(a, b) {
    var _a;
    var _b = [parseInt(a, 2), parseInt(b, 2)], x = _b[0], y = _b[1];
    var ans = 0;
    var carry = 0;
    while (y) {
        ans = x ^ y;
        carry = (x & y) << 1;
        _a = [ans, carry], x = _a[0], y = _a[1];
    }
    return x.toString(2);
}
addBinary('11', '1');
