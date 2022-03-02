import { sum } from "./simple5";
import { sumOf } from "./simple5";
describe('sum', () => {
    it('add two numbers', () => {
        const result = sum(1, 2);
        expect(result).toBe(3);
    });
    it('add elements of array', () => {
        const result = sumOf([1, 2, 3]);
        expect(result).toBe(6);
    });
});