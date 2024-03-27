$(document).ready(function() {
    // Select the specific span inside the specified div
    var parentSpan = $(".style-div h2 span:not([class*='_ATmkjn'])");

    // Clone the element to avoid modifying the original
    var clonedElement = parentSpan.clone();

    // Remove certain child elements like <span> with class '_ATmkjn'
    clonedElement.find('span._ATmkjn').remove();

    // Extract the text from the modified element
    var parentSpanText = clonedElement.text().trim();

    // Split the text based on the question mark ("?")
    var questionsArray = parentSpanText.split(/\s*\?\s*/);

    // Log or use the extracted questions as needed
    for (var i = 0; i < questionsArray.length; i++) {
        console.log((i + 1) + ": " + questionsArray[i]+"?");
    }
});