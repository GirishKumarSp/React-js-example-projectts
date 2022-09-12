import isNumber from "./isNumber";
import operate from "./operate";
import Big from "big.js";

const Calculate = (obj, buttonName) => {
    if (buttonName === "AC") {
        return {
            total: null,
            next: null,
            operation: null,
        };
    }

    if (isNumber(buttonName)) {
        //if the initial number is zero & keep typing 0 nothing will return (0)
        if (buttonName === "0" && obj.next === "0") {
            return {};
        }

        // If there is an operation, update next -- second number more than 1 counts -  make operations to the result obtained if the input is more than 1 counts (4)
        if (obj.operation) {
            if (obj.next) {
                return {
                    total: obj.total,
                    next: obj.next + buttonName,
                    operation: obj.operation,
                };
            }

            // if the first number is entered and the operations is typed (+,-) second number is from this return [operation will set next - null total = next] (3)
            return {
                total: obj.total,
                next: buttonName,
                operation: obj.operation,
            };
        }

        // If there is no operation, update next and clear the value -- if first input number is more than 1 number (2)
        if (obj.next) {
            const next = obj.next === "0" ? buttonName : obj.next + buttonName;
            return {
                next,
                total: null,
            };
        }

        // the first input and first number coms from this return (1)
        return {
            next: buttonName,
            total: null,
        };
    }

    // smae as [=] button if the other operation already typed & reder the reult from old operation and take result as input & then process it for modulus
    if (buttonName === "%") {
        if (obj.operation && obj.next) {
            const result = operate(obj.total, obj.next, obj.operation);
            return {
                total: Big(result).div(Big("100")).toString(),
                next: null,
                operation: null,
            };
        }
        if (obj.next) {
            return {
                next: Big(obj.next).div(Big("100")).toString(),
            };
        }
        return {
            total: obj.total,
            next: obj.next,
            operation: obj.operation,
        };
    }

    //for decimal values
    if (buttonName === ".") {
        if (obj.next) {
            // ignore a . if the next number already has one
            if (obj.next.includes(".")) {
                return {
                    next: obj.next,
                };
            }
            return { next: obj.next + "." };
        }
        return { next: "0." };
    }

    //- for final results [(=) button] (last)
    if (buttonName === "=") {
        if (obj.next && obj.operation) {
            return {
                total: operate(obj.total, obj.next, obj.operation),
                next: null,
                operation: null,
            };
        } else {
            // '=' with no operation, nothing to do
            return {
                total: obj.total,
                next: obj.next,
                operation: obj.operation,
            };
        }
    }

    if (buttonName === "+/-") {
        if (obj.next) {
            return { next: (-1 * parseFloat(obj.next)).toString() };
        }
        if (obj.total) {
            return { total: (-1 * parseFloat(obj.total)).toString() };
        }
        return {
            total: obj.total,
            next: obj.next,
            operation: obj.operation,
        };
    }

    // Button must be an operation

    // When the user presses an operation button without having entered
    // a number first, do nothing.
    // if (!obj.next && !obj.total) {
    //   return {};
    // }

    // User pressed an operation button and there is an existing operation - for final results [operations button] (last)
    if (obj.operation) {
        return {
            total: operate(obj.total, obj.next, obj.operation),
            next: null,
            operation: buttonName,
        };
    }

    // no operation yet, but the user typed one
    // The user hasn't typed a number yet, just save the operation (0.5)
    if (!obj.next) {
        return {
            total: obj.total,
            next: obj.next,
            operation: buttonName,
        };
    }

    // save the operation and shift 'next' into 'total' - operations typed after (1)↑ [if number section] shift of next to total by this return (1.5)
    return {
        total: obj.next,
        next: null,
        operation: buttonName,
    };
};

export default Calculate;
