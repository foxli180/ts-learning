const { hasUncaughtExceptionCaptureCallback } = require("process");

const buffer = new ArrayBuffer(16);

// Create a couple of views
const view1 = new DataView(buffer);
const view2 = new DataView(buffer, 12, 4); //from byte 12 for the next 4 bytes
view1.setInt8(12, 42); // put 42 in slot 12
console.log(buffer);
console.log(view2.getInt8(0));

const b = new ArrayBuffer(12);
const c = new DataView(b);
console.log(c.getInt32());