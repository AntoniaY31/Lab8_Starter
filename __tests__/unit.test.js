// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// Test for isPhoneNumber
// expect true
test("valid number1", ()=>{
    expect(functions.isPhoneNumber("858-268-7960")).toBe(true);
});

test("valid number2", ()=>{
    expect(functions.isPhoneNumber("123-200-7960")).toBe(true);
});

// expect false
test("invalid number1", ()=>{
    expect(functions.isPhoneNumber("85A2687960")).toBe(false);
});

test("invalid number2", ()=>{
    expect(functions.isPhoneNumber("2687960")).toBe(false);
});

// Test for isEmail
// expect true
test("valid email1", ()=>{
    expect(functions.isEmail("antoniayang31@gmail.com")).toBe(true);
});

test("valid email2", ()=>{
    expect(functions.isEmail("may003@ucsd.edu")).toBe(true);
});

// expect false
test("invalid email1", ()=>{
    expect(functions.isEmail("858-2687960")).toBe(false);
});

test("invalid number2", ()=>{
    expect(functions.isEmail("may003")).toBe(false);
});

// Test for isStrongPassword
// expect true
test("valid strong password1", ()=>{
    expect(functions.isStrongPassword("antoniayang31")).toBe(true);
});

test("valid strong password2", ()=>{
    expect(functions.isStrongPassword("antoniaya___")).toBe(true);
});

// expect false
test("invalid strong password1", ()=>{
    expect(functions.isStrongPassword("an")).toBe(false);
});

test("invalid strong password2", ()=>{
    expect(functions.isStrongPassword("antoniayang31@gmail.com")).toBe(false);
});

// Test for isDate
// expect true
test("valid Date1", ()=>{
    expect(functions.isDate("7/31/2001")).toBe(true);
});

test("valid Date2", ()=>{
    expect(functions.isDate("12/1/2001")).toBe(true);
});

// expect false
test("invalid Date1", ()=>{
    expect(functions.isDate("100/2000/2001")).toBe(false);
});

test("invalid Date2", ()=>{
    expect(functions.isDate("2001")).toBe(false);
});

// Test for isHexColor
// expect true
test("valid Hex1", ()=>{
    expect(functions.isHexColor("#FFFFFF")).toBe(true);
});

test("valid Hex2", ()=>{
    expect(functions.isHexColor("#000000")).toBe(true);
});

// expect false
test("invalid Hex1", ()=>{
    expect(functions.isHexColor("#FF")).toBe(false);
});

test("invalid Hex2", ()=>{
    expect(functions.isHexColor("#ZZZZZZ")).toBe(false);
});