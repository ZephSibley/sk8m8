import slowNetwork from './slowNetwork';

describe("Checks for slow network speeds", () => {
    it('returns null without network api', () => {
        const result = slowNetwork();
        expect(result).toBeNull();
    });
    it('returns true with a slow network', () => {
        window.NetworkInformation = {
            downlink: 444.44,
        }
        const result = slowNetwork();
        expect(result).toBe(true);
    });
    it('returns false with a fast network', () => {
        window.NetworkInformation = {
            downlink: 900.99,
        }
        const result = slowNetwork();
        expect(result).toBe(false)
    })
})