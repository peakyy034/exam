/**
 * Maps, sets, and other edge cases are not supported.
 *
 */
/**
 * Equivalent check
 * @param correct correct value
 * @param target examination target
 * @returns result
 */
export declare const exam: (correct: unknown, target: unknown) => boolean;
/**
 * Equivalent check
 * @throws {Error} when correct and target are not equivalent
 * @param examName examination name
 * @param correct correct value
 * @param target examination target
 */
export declare const examOrThrow: (examName: string, correct: unknown, target: unknown) => void;
/**
 * Equivalent check.
 * Output the result to the console.
 * @param examName examination name
 * @param correct correct value
 * @param target examination target
 */
export declare const examLog: (examName: string, correct: unknown, target: unknown) => void;
//# sourceMappingURL=index.d.ts.map