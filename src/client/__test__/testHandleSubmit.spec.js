import 'babel-polyfill'
import { handleSubmit } from "../js/formHandler"


describe('Client Test', () => {
    test('Testing handleSubmit function defined or not', () => {
        expect(handleSubmit).toBeDefined();
    })

    test('Testing handleSubmit function or not', () => {
        expect(typeof handleSubmit).toBe('function');
    })
})
