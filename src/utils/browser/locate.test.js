import locate from './locate';

describe("Gets the user's geolocation", () => {
    it('returns null without navigator.geolocation', () =>{
        async function callLocate() {
            const { latitude, longitude } = await locate();
            expect(latitude).toBeNull()
            expect(longitude).toBeNull()
        }
    })
    it('returns coordinates with navigator.geolocation', () => {
        const mockGeolocation = {
            getCurrentPosition: function (success) {
                success({
                    coords: { latitude: 30, longitude: -105, }, 
                    timestamp: Date.now(),
                });
            },
          };
        global.navigator.geolocation = mockGeolocation;
        
        async function callLocate() {
            const { latitude, longitude } = await locate();
            expect(latitude).toBe(30)
            expect(longitude).toBe(-105)
        }
    })
});