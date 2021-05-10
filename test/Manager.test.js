//Manager constructor:
const Manager = require('./lib/Manager');

// creating manager:  
test('creates an Manager object', () => {
    const manager = new Manager('Muhammed', 40, 'mhknowledge@yahoo.com', 133);
    
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

// gets role from getRole()
test('prompts user for employee role', () => {
    const manager = new Manager('Muhammed', 40, 'mhknowledge@yahoo.com');

    expect(manager.getRole()).toEqual("Manager");
}); 