const chainMaker = {
  string: '',
  getLength() {
    let length = 0;
    this.string = this.string.split('~~');
    for (let i = 0; i < this.string.length; i++) {
      if (this.string[i] !== '') {
        length++;
      }
    }
    return length;
  },
  addLink(value) {
    value = String(value);
    if (this.string.indexOf('~') === 0) {
      this.string += `~~( ${value || ''} )`;
    } else {
      this.string += `( ${value || ''} )~~`;
    }
    return this;
  },
  removeLink(position) {
    let elems = this.getLength();
    if (parseInt(position) !== position || position <= 0 || position > elems) {
      this.string = '';
      throw new Error;
    };  
    if (this.string[0] !== '') {
      this.string.splice(position - 1, 1);
      this.string = this.string.join('~~');
    } else {
      this.string.splice(position, 1);
      this.string = this.string.join('~~');
    }
    return this;
  },
  reverseChain() {
    this.string = this.string.split('~~').reverse().join('~~');
    return this;
  },
  finishChain() {
    if (this.string.indexOf('~') === 0) {
      this.string = this.string.slice(2);   
    } else {
      this.string = this.string.slice(0, -2);
    }
    let res = this.string;
    this.string = '';
    return res;
  }
};

module.exports = chainMaker;
