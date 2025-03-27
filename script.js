/* FUNCTION main() 
 * Perform basic arithmetic.
 * @param: none (main never gets params)
 * @return: none (main never gets returns
 */
function main() {
    let operation = prompt("What operation do you want (+, -, *, /)");
    let a = prompt("First number");
    a = parseInt(a);
    let b = prompt("Second number");
    b = parseInt(b);
    let result = 0;
    if (operation == "+") {
        result = add(a,b);
    }
    alert(a + operation + b + "=" + result);
}

/* FUNCTION add(a,b)
 * define a function called add with two number parameters a and b
 * @param: a, b (integers)
 * @return: a + b
 */
function add(a,b){
    return a + b;
}
