//Main Text Functions file


const testText1 = "Once upon a time there was a dear little girl who was loved by everyone who looked at her, but most of all by her grandmother, and there was nothing that she would not have given to the child. Once she gave her a little cap of red velvet, which suited her so well that she would never wear anything else; so she was always called ‘Little Red-Cap.’";

const testText2 = "Once upon a time there was a dear little girl.";

const wordCount = (text) => {

    let wordCounter = 1;
    for (let i = 0; i < text.length; ++i) {
        if (text[i] === " ") {
            ++wordCounter;
        }
    }
    return wordCounter;
};

console.log(wordCount(testText2));

function averageWordLength(text) {
    const words = wordCount(text);
    let counter = 0;
    for (let i = 0; i < text.length; i++) {
        if (
            (text.charCodeAt(i) >= 97 && text.charCodeAt(i) <= 122) ||
            (text.charCodeAt(i) >= 65 && text.charCodeAt(i) <= 90)
        ) {
            counter++;
        }
    }
    return counter / words;
}

console.log(averageWordLength(testText2));

 

console.log(wordCount(testText2));

const sentenceCount = (text) => {
  let modifiedText = text;
  modifiedText = modifiedText.replace(/,/g, ".");
  modifiedText = modifiedText.replace(/;/g, ".");
  console.log(modifiedText);
  const sentences = modifiedText.split(".");
  return sentences.length - 1;
};

console.log(sentenceCount(testText1));

