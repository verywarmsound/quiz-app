// Function to replace HTML entities with their corresponding characters
export const decodeHtmlEntities = (text: string): string => {
    const entities: { [key: string]: string } = {
        '&quot;': '"',
        '&#039;': "'",
        '\\/': '/',
    };
    return text.replace(/&quot;|&#039;|\\\//g, (match) => entities[match]);
};

// Function to clean the JSON data
export const cleanJsonData = (data: any): any => {
    data.results.forEach((question: { question: string }) => {
        question.question = decodeHtmlEntities(question.question);
    });
    return data;
};
