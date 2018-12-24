import axios from 'axios';
import Method from './method';

class Options {
  constructor () {
    this.url = '';
    this.method = Method.GET;
    this.data = {};
    this.params = {};
    this.timeout = 60000;
    this.maxContentLength = 3145728;
  }
}

export default class Api {

  constructor () {
    this.options = new Options();
  }

  setUrl (url) {
    this.options.url = url;
    return this;
  }

  setMethod (method = Method.GET) {
    this.options.method = method;
    return this;
  }

  setData (data = {}) {
    this.options.data = data;
    return this;
  }

  setParams (params = {}) {
    this.options.params = params;
    return this;
  }

  setTimeout (timeout) {
    this.options.timeout = timeout;
    return this;
  }

  setMaxContentLength (maxContentLength) {
    this.options.maxContentLength = maxContentLength;
    return this;
  }

  request () {
    const self = this;
    const options = self.options;
    return new Promise((resolve, reject) => {
      axios.request(options).then(response => {
        // if (response.status < 400) {
        resolve(response.data);
        // } else {
        //   throw new Error(response);
        // }
      }).catch(err => {
        reject(err);
      });
    });
  }
}
