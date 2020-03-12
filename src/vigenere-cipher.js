class VigenereCipheringMachine {
    constructor(isDirect = 'true') {
      this.isDirect = isDirect;
    }
    
    encrypt(message, key) {
      if (!message || !key) {
        throw new Error();
      }
      message = message.toUpperCase();
      let str = '';
      let keyString = '';
      while (str.length < message.length) {
        str += key.toUpperCase();
      }
      for (let i = 0; i < message.length; i++) {
        if (message[i] === ' ') {
          keyString += ' ';
        } else {
          keyString += str[0];
          str = str.slice(1);
        }
      }    
      let res = '';
      for (let i = 0; i < message.length; i++) {
        if (message.codePointAt(i) < 65 || message.codePointAt(i) > 90) {
          res += message[i];
        } else if (message.codePointAt(i) - 65 + keyString.codePointAt(i) - 65 < 26) {
          res += String.fromCodePoint(message.codePointAt(i) + keyString.codePointAt(i) - 65);
        } else {
          res += String.fromCodePoint(message.codePointAt(i) + keyString.codePointAt(i) - 26 - 65);
        }
      }
      return this.isDirect ? res : res.split('').reverse().join('');     
    }

    decrypt(encryptedMessage, key) {
      if (!encryptedMessage || !key) {
        throw new Error();
      }
      let str = '';
      let keyString = '';
      while (str.length < encryptedMessage.length) {
        str += key.toUpperCase();
      }
      for (let i = 0; i < encryptedMessage.length; i++) {
        if (encryptedMessage[i] === ' ') {
          keyString += ' ';
        } else {
          keyString += str[0];
          str = str.slice(1);
        }
      }
      let res = '';
      for (let i = 0; i < encryptedMessage.length; i++) {
        if (encryptedMessage.codePointAt(i) < 65 || encryptedMessage.codePointAt(i) > 90) {
          res += encryptedMessage[i];
        } else if (encryptedMessage.codePointAt(i) - keyString.codePointAt(i) >= 0) {
          res += String.fromCodePoint(encryptedMessage.codePointAt(i) - keyString.codePointAt(i) + 65);
        } else {
          res += String.fromCodePoint(26 + encryptedMessage.codePointAt(i) - keyString.codePointAt(i) + 65);
        }
      }
      return this.isDirect ? res : res.split('').reverse().join('');
    }
}

module.exports = VigenereCipheringMachine;
