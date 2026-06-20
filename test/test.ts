import { exam } from "../src/index";
import { unSortedObjects, sameStrings, typeValues, zeros } from "./dataset";

const executeExamination = () => {
    const typeValueKeys = Object.keys(typeValues);
    typeValueKeys.forEach((correctKey) => {
        typeValueKeys.forEach((targetKey) => {
            const testName = `${correctKey} vs ${targetKey}`;
            const correct = typeValues[correctKey];
            const target = typeValues[targetKey];
            const isEqualKey = correctKey === targetKey;
            const isEqualValue = exam(correct, target);
            if (isEqualKey !== isEqualValue) throw new Error(`Test is failed [${testName}]`);
            else console.log(`Test is success [${testName}]`);
        });
    });

    unSortedObjects.forEach((unSortedObject, index) => {
        const testName = `vs same object ${index.toString()}`;
        const isEqual = exam(unSortedObject.correct, unSortedObject.target);
        if (!isEqual) throw new Error(`Test is failed [${testName}]`);
        else console.log(`Test is success [${testName}]`);
    });

    const sameStringKeys = Object.keys(sameStrings);
    sameStringKeys.forEach((correctKey) => {
        sameStringKeys.forEach((targetKey) => {
            const testName = `${correctKey} vs ${targetKey}`;
            const correct = sameStrings[correctKey];
            const target = sameStrings[targetKey];
            const isEqualValue = exam(correct, target);
            if (!isEqualValue) throw new Error(`Test is failed [${testName}]`);
            else console.log(`Test is success [${testName}]`);
        });
    });

    const zeroKeys = Object.keys(zeros);
    zeroKeys.forEach((correctKey) => {
        zeroKeys.forEach((targetKey) => {
            const testName = `${correctKey} vs ${targetKey}`;
            const correct = zeros[correctKey];
            const target = zeros[targetKey];
            const isEqualValue = exam(correct, target);
            if (!isEqualValue) throw new Error(`Test is failed [${testName}]`);
            else console.log(`Test is success [${testName}]`);
        });
    });
};

executeExamination();
