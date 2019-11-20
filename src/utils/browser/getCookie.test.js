import getCookie from './getCookie';

describe("Gets the cookie if it exists", () => {
    const mockCookie = 'jwt=$test&test;'
    document.cookie = mockCookie;
    
    it('Returns the decoded cookie value', () => {
        expect(getCookie('jwt')).toBe('$test&test')
    })
    it('Returns an empty string if the cookie doesnt exist', () => {
        expect(getCookie('false')).toBe('')
    })
})