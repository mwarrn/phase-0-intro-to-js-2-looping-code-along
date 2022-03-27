const names = [];

function writeCards(names, event) {
    const messages = []
    for (let i = 0; i < names.length; i++) {
      messages.push("Thank you, " + names[i]+ "," + " for the wonderful " + event + " gift!")
    };
    return messages;
  };

function countDown(fromNumber) {
    while (0 <= fromNumber) {
        console.log(fromNumber--);
    };
};
