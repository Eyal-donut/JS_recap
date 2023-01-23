"use strict";

const paragraph = "Once upon a time there was a dear little girl who was loved by everyone who looked at her, but most of all by her grandmother, and there was nothing that she would not have given to the child. Once she gave her a little cap of red velvet, which suited her so well that she would never wear anything else; so she was always called ‘Little Red-Cap.’";

const sentenceCount = (text) => {
  let sentenceCounter = 0;
  const sentences = text.split(",");
  const sentences1 = text.split(".");
  const sentences2 = text.split(";");
  const allSentences = [...sentences, ...sentences1, ...sentences2];
  return allSentences;
};

console.log(sentenceCount(paragraph));
