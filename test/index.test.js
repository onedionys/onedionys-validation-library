const assert = require('assert');
const ValidationLibrary = require('../src/validation');

describe('ValidationLibrary', function() {
    describe('#validateEmail()', function() {
        it('should return true when given a valid email', function() {
            assert.strictEqual(ValidationLibrary.validateEmail('test@example.com'), true);
        });

        it('should return false when given an invalid email', function() {
            assert.strictEqual(ValidationLibrary.validateEmail('test'), false);
        });
    });

    describe('#validateURL()', function() {
        it('should return true when given a valid URL', function() {
            assert.strictEqual(ValidationLibrary.validateURL('https://example.com'), true);
        });

        it('should return false when given an invalid URL', function() {
            assert.strictEqual(ValidationLibrary.validateURL('example.com'), false);
        });
    });

    // Add more test cases for other validation functions if needed
});
