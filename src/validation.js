const ValidationLibrary = {
    // Function to validate email format
    validateEmail: function(email) {
        // Regular expression to check email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    },

    // Function to validate URL format
    validateURL: function(url) {
        // Regular expression to check URL format
        const urlRegex = /^(ftp|http|https):\/\/[^ "]+$/;
        return urlRegex.test(url);
    },

    // Add more validation functions as needed
};

module.exports = ValidationLibrary;
