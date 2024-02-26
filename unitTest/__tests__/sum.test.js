import { sum } from '../sum';

describe('sum()', () => {
    it('Deberia de sumar 1 y 2 devolviendo 3', () => {
        expect(sum(1, 2)).toBe(3);
        //Escenario Negativo
        expect(sum(1, 2)).not.toBeGreaterThan(3);
    });
});