function removeHtmlAndSpaces(html) {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    const plainText = doc.body.textContent || '';
    
    // Remove unnecessary spaces and newlines
    const trimmedText = plainText.replace(/\s+/g, ' ').trim();
    
    return trimmedText;
  }

let input = document.getElementById('input-code');

document.getElementById('html').addEventListener('click', () => {
    const result = removeHtmlAndSpaces(input.value);
    input.value = result;
})