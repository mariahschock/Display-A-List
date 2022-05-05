import { renderCat } from '../utils.js';
import { cats } from '../cat-data.js';
import { hiking } from '../cat-data.js';
import { renderHikes } from '../utils.js';

// IMPORT MODULES under test here:
// import { example } from '../example.js';

const test = QUnit.test;

test('test cat render function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = `<div class="cat"><h1>Leo</h1><img src="./assets/Leo.png"><p>Leo is 5 year(s) old and likes aggressive cuddling</p></div>`;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderCat(cats[0]);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});

test('test hike render function', (expect) => {

    const expected = `<div class="hiking-spots"><h1>Paradise Park</h1><img src="./assets/Paradise Park.png"><p>Paradise Park is located near Mount Hood and is best known for wildflower displays in July and August</p></div>`;

    const actual = renderHikes(hiking[0]);

    expect.equal(actual.outerHTML, expected);
});
