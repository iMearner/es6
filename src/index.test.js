import testUser from './index'

describe('test to check if user is available', () => {
    it("should return user name", () => {
        expect.assertions(2);
        return expect(testUser(4)).resolves.toEqual('mark'),
                expect(testUser(5)).resolves.toEqual('roy')
    }),
    it('should work with async/await', async() => {
        expect.assertions(2);
        expect(await testUser(4)).toEqual('mark')
        expect(await testUser(5)).toEqual('roy')
    }),
    it('should return the error for non existing users', async() => {
        expect(testUser(3)).rejects.toEqual('user with id : 3 not found');
    })
})