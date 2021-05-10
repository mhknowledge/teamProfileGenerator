//Engineer constructor 
const Engineer = require('../lib/Engineer');

// creating engineer   
test('creates an Engineer', () => {
    const engineer = new Engineer('Muhammed', 40, 'mhknowledge@yahoo.com', 'mhknowledge');
    
    expect(engineer.github) .toEqual(expect.any(String));
});

// test for getGithub()
test('gets engineer github', () => {
    const engineer = new Engineer('Muhammed', 40, 'mhknowledge@yahoo.com', 'mhknowledge');

    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});

//test getRole() 
test('gets role of employee', () => {
    const engineer = new Engineer('Muhammed', 40, 'mhknowledge@yahoo.com', 'mhknowledge');

    expect(engineer.getRole()).toEqual("Engineer");
});