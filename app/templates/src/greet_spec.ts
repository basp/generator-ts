import { sayHello } from './greet';

describe('greeter', () => {
    it('provides a customized greeting', () => {
        const name = 'Frotz';
        const greeting = sayHello(name);
        expect(greeting).toBe(`Hello ${name}`);
    });
});