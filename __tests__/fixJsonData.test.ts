import { decodeHtmlEntities, cleanJsonData } from '../utils/fixJsonData';

describe('decodeHtmlEntities', () => {
    test('decodes HTML entities correctly', () => {
        const input = 'This is a &quot;test&quot; string with &#039;entities&#039; and \\/slashes\\/.';
        const expectedOutput = 'This is a "test" string with \'entities\' and /slashes/.';
        expect(decodeHtmlEntities(input)).toBe(expectedOutput);
    });

    test('returns the same string if no entities are present', () => {
        const input = 'This is a test string with no entities.';
        expect(decodeHtmlEntities(input)).toBe(input);
    });
});

describe('cleanJsonData', () => {
    test('cleans JSON data by decoding HTML entities in questions', () => {
        const inputData = {
            results: [
                { question: 'This is a &quot;test&quot; question.' },
                { question: 'Another &#039;test&#039; question with \\/slashes\\/.' },
            ],
        };
        const expectedOutput = {
            results: [
                { question: 'This is a "test" question.' },
                { question: 'Another \'test\' question with /slashes/.' },
            ],
        };
        expect(cleanJsonData(inputData)).toEqual(expectedOutput);
    });

    test('returns the same data if no entities are present', () => {
        const inputData = {
            results: [
                { question: 'This is a test question.' },
                { question: 'Another test question.' },
            ],
        };
        expect(cleanJsonData(inputData)).toEqual(inputData);
    });
});
