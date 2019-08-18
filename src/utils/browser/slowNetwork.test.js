import slowNetwork from './slowNetwork';

describe("Checks for slow network speeds", () => {
    it('returns null without network api', () => {
        const result = slowNetwork();
        expect(result).toBeNull();
    });
    it('returns true with a slow network', () => {
        window.NetworkInformation = {
            downlink: 333.33,
        }
        const result = slowNetwork();
        expect(result).toBe(true);
    });
    it('returns false with a fast network', () => {
        window.NetworkInformation = {
            downlink: 500,
        }
        const result = slowNetwork();
        expect(result).toBe(false)
    })
})