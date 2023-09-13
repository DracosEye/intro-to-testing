// Unit tests for isVowel
describe('isVowel', function() {
    it('should return a boolean when called', function() {
        expect(typeof isVowel()).toBe("boolean");
    });
    it('should return true when called with argument "a"', function() {
        expect(isVowel('a')).toBe(true);
    });
    it('should return true when called with argument "A"', function() {
        expect(isVowel('A')).toBe(true);
    });
    it('should return false when called with argument "y"', function() {
        expect(isVowel('y')).toBe(false);
    });
    it('should return false when called with argument 4', function() {
        expect(isVowel(4)).toBe(false);
    });
    it('should return false when called with argument true', function() {
        expect(isVowel(true)).toBe(false);
    });
    it('should return false when called with argument false', function() {
        expect(isVowel(false)).toBe(false);
    });
    it('should return false when called with argument "banana"', function() {
        expect(isVowel("banana")).toBe(false);
    });
    it('should return false when called with no argument', function() {
        expect(isVowel()).toBe(false);
    });
});

// Unit tests for isEven
describe('isEven', function() {
    it('should return a boolean when called', function() {
        expect(typeof isEven()).toBe("boolean");
    });
    it('should return true when called with argument 2', function() {
        expect(isEven(2)).toBe(true);
    });
    it('should return true when called with argument -4', function() {
        expect(isEven(-4)).toBe(true);
    });
    it('should return false when called with argument 3', function() {
        expect(isEven(3)).toBe(false);
    });
    it('should return false when called with argument "banana"', function() {
        expect(isEven("banana")).toBe(false);
    });
    it('should return true when called with argument "8"', function() {
        expect(isEven("8")).toBe(true);
    });
    it('should return false when called with argument Infinity', function() {
        expect(isEven(Infinity)).toBe(false);
    });
    it('should return false when called with argument true', function() {
        expect(isEven(true)).toBe(false);
    });
    it('should return false when called with argument false', function() {
        expect(isEven(false)).toBe(false);
    });
    it('should return false when called with no argument', function() {
        expect(isEven()).toBe(false);
    });
});

// Unit tests for isFive
describe('isFive', function() {
    it('should be a defined function', function() {
        expect(typeof isFive).toBe('function');
    });
    it('should return a boolean when called', function() {
        expect(typeof isFive()).toBe("boolean");
    });
    it('should return true when called with argument 5', function() {
        expect(isFive(5)).toBe(true);
    });
    it('should return false when called with argument "5"', function() {
        expect(isFive("5")).toBe(false);
    });
});

// Unit tests for sayHello function
describe('sayHello', function() {
    it('should be a defined function', function() {
        expect(typeof sayHello).toBe('function');
    });
    it('should return a string when called', function() {
        expect(typeof sayHello()).toBe("string");
    });
    it('sayHello("Jane") should return the string "Hello, Jane!" when executed', function() {
        expect(sayHello("Jane")).toBe("Hello, Jane!");
    });
    it('sayHello("Alex") should return the string "Hello, Alex!" when executed', function() {
        expect(sayHello("Alex")).toBe("Hello, Alex!");
    });
    it('sayHello("Pat") should return the string "Hello, Pat!" when executed', function() {
        expect(sayHello("Pat")).toBe("Hello, Pat!");
    });
    it('should return "Hello, World!" when called with no argument', function() {
        expect(sayHello()).toBe("Hello, World!");
    });
    it('should return "Hello, World!" when called with true', function() {
        expect(sayHello(true)).toBe("Hello, World!");
    });
    it('should return "Hello, World!" when called with false', function() {
        expect(sayHello(false)).toBe("Hello, World!");
    });
});

// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});