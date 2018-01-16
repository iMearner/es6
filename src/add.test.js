import add from './add'

describe('Common Add Function', () => {
    it('should add 2 numbers when given', () => {
        expect(add(2,2)).toBe(4)
        expect(add(99,1)).toBe(100)
        expect(add(-100,-1)).toBe(-101)
        expect(add(-100,1)).toBe(-99)
    })
    it('should add 2 strings with space', () => {
        expect(add("one","two")).toBe("one two")
        expect(add("sachin","jangid")).toBe("sachin jangid")
        expect(add("one","")).toBe("one ")
        expect(add("","")).toBe(" ")
    })
    it('should return array from addition of two array', () => {
        expect(add([1, 2],[3, 4])).toEqual([1, 2, 3, 4])
        expect(add(["1", "2"],[3, 4])).toEqual(["1", "2", 3, 4])
    })
    it('should throw an error if less than or more than 2 arguments provided', () => {
        expect(() => add(2,2,1)).toThrow()
        expect(() => add()).toThrow()
        expect(() => add(2)).toThrow()
    })
    it('should throw if arguments is neither number nor string', () => {
        expect(() => add(true, false)).toThrow()
        expect(() => add([1,2],"d")).toThrow()
        expect(() => add({x: 5}, {y:6})).toThrow()
        expect(() => add({x: 5}, "s")).toThrow()
    })
    it('should throw if, diffrent types of arguments were provided', () => {
        expect(() => add(2, "3")).toThrow()
    })
})