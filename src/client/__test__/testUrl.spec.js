import { checkForURL } from "../js/checkURL"

describe('Test check url functionality', () => {
    test('Testing checkUrl function or not', () => {
        expect(typeof checkForURL).toBe('function');
    })

    test('Testing checkUrl function defined or not', () => {
        expect(checkForURL).toBeDefined();
    })

    test('Testing the checkUrl function return false for invalid url', () => {
        expect(checkForURL('hello')).toBeFalsy();
    })

    test('Testing the checkUrl function return true for valid url', () => {
        expect(checkForURL('https://www.statnews.com/2021/03/23/astrazeneca-may-have-used-outdated-information-in-announcing-covid19-vaccine-results/')).toBeTruthy();
    })
})
