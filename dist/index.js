/**
 * Maps, sets, and other edge cases are not supported.
 *
 */
const color = {
    default: "\u001b[0m",
    green: "\u001b[32m",
    red: "\u001b[31m",
};
const symbol = {
    OK: "○",
    NG: "x",
};
const lineBreak = "\n";
const generateExamMessage = (examName, isEqual, correct, target, isColored) => {
    let message = `Execute exam [${examName}]: -> `;
    if (isEqual) {
        if (isColored)
            message += color.green;
        message += `${symbol.OK}${lineBreak}`;
        if (isColored)
            message += color.default;
    }
    else {
        if (isColored)
            message += color.red;
        message += `${symbol.NG}${lineBreak}`;
        message += `correct: ${JSON.stringify(correct, null, 2)}${lineBreak}`;
        message += `target: ${JSON.stringify(target, null, 2)}${lineBreak}`;
        if (isColored)
            message += color.default;
    }
    return message;
};
const isEqualDate = (correct, target) => {
    return correct.getTime() === target.getTime();
};
const isEqualArray = (correct, target) => {
    if (correct.length !== target.length)
        return false;
    return correct.every((element, index) => isEqualTypeAndValue(element, target[index]));
};
const isEqualObject = (correct, target) => {
    const correctKeys = Object.keys(correct).sort();
    const targetKeys = Object.keys(target).sort();
    if (!isEqualArray(correctKeys, targetKeys))
        return false;
    return correctKeys.every((key) => isEqualTypeAndValue(correct[key], target[key]));
};
const isEqualType = (correct, target) => {
    if (typeof correct !== typeof target)
        return false;
    if (Array.isArray(correct) !== Array.isArray(target))
        return false;
    if (correct instanceof Date !== target instanceof Date)
        return false;
    if ((correct === null) !== (target === null))
        return false;
    return true;
};
const isEqualTypeAndValue = (correct, target) => {
    if (!isEqualType(correct, target))
        return false;
    let isEqual;
    if (Array.isArray(correct))
        isEqual = isEqualArray(correct, target);
    else if (correct instanceof Date)
        isEqual = isEqualDate(correct, target);
    else if (correct !== null && typeof correct === "object") {
        isEqual = isEqualObject(correct, target);
    }
    else if (Number.isNaN(correct))
        isEqual = Object.is(correct, target);
    else
        isEqual = correct === target;
    return isEqual;
};
/**
 * Equivalent check
 * @param correct correct value
 * @param target examination target
 * @returns result
 */
export const exam = (correct, target) => {
    return isEqualTypeAndValue(correct, target);
};
/**
 * Equivalent check
 * @throws {Error} when correct and target are not equivalent
 * @param examName examination name
 * @param correct correct value
 * @param target examination target
 */
export const examOrThrow = (examName, correct, target) => {
    const isEqual = isEqualTypeAndValue(correct, target);
    if (!isEqual)
        throw new Error(generateExamMessage(examName, isEqual, correct, target, false));
};
/**
 * Equivalent check.
 * Output the result to the console.
 * @param examName examination name
 * @param correct correct value
 * @param target examination target
 */
export const examLog = (examName, correct, target) => {
    const isEqual = isEqualTypeAndValue(correct, target);
    const message = generateExamMessage(examName, isEqual, correct, target, true);
    console.log(message);
};
//# sourceMappingURL=index.js.map