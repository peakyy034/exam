const today = new Date();
const todayString = today.toString();
const tomorrow = new Date(today);
tomorrow.setDate(tomorrow.getDate() + 1);

export const typeValues: Record<string, any> = {
    undefined: undefined,
    undefinedString: "undefined",
    null: null,
    nullString: "null",
    emptyString: "",
    shortString: "This is test.",
    longString: "This is test. I expect this test to complete successfully.",
    nan: NaN,
    nanString: "NaN",
    minusInfinity: -Infinity,
    minusOne: -1,
    zero: 0,
    one: 1,
    oneString: "1",
    infinity: Infinity,
    today,
    todayString,
    tomorrow,
    true: true,
    trueString: "true",
    false: false,
    emptyArray: [],
    shortArray: [1],
    stringifiedArray: "[1]",
    longArray: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    nestedShortArray: [[1, 2]],
    nestedLongArray: [
        [1, 2],
        [3, 4],
    ],
    emptyObject: {},
    shortObject: { test: "This is test." },
    stringifiedObject: '{"test":"This is test."}',
    keyEqualObject: { test: "This is test. I expect this test to complete successfully." },
    valueEqualObject: { t: "This is test." },
    longObject: {
        test: "This is test.",
        append: "Append value",
    },
    nestedShortObject: {
        test: { test: "This is test." },
    },
    nestedLongObject: {
        test: {
            test: "This is test.",
            append: "Append value",
        },
    },
};

/**
 * Same object, but the order of the keys is different.
 */
export const unSortedObjects = [
    {
        correct: { a: 1, b: 2, c: 3 },
        target: { c: 3, a: 1, b: 2 },
    },
    {
        correct: {
            aa: {
                ba: { ca: 30, cb: 31, cc: 32 },
                bb: 22,
            },
            ab: { bc: 23, bd: [24, 0, 0] },
        },
        target: {
            ab: { bc: 23, bd: [24, 0, 0] },
            aa: {
                bb: 22,
                ba: { cb: 31, cc: 32, ca: 30 },
            },
        },
    },
];

export const sameStrings: Record<string, string> = {
    // prettier-ignore
    singleQuote: 'This is test.',
    doubleQuote: "This is test.",
    backQuote: `This is test.`,
};

export const zeros: Record<string, number> = {
    minusZero: -0,
    zero: 0,
};
