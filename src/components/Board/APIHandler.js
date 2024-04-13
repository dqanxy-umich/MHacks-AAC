export default class APIHandler {
  currentPhrase = '';
  refresh = false;
  recStatus = 'ready';
  test = false;
  request = 'ready';
  constructor() {
    //this.worker = new Worker('apiWorker.js');
    this.updateAutocomplete = null;
    this.updateRecList = null;
    const interval = setInterval(() => {
      this.attemptRefresh();
    }, 500);
  }
  refreshRecList() {
    if (this.recStatus == 'pending') return;
    this.recStatus = 'pending';
    fetch(`http://127.0.0.1:5000/suggest-responses`, { method: 'GET' })
      .then(response => response.text()) // send response body to next then chain
      .then(body => {
        console.log(body);
        let json = JSON.parse(body);
        let tokens = [];
        for (let i = 0; i < json.length; i++) {
          tokens.push(json[i].phrase);
        }
        this.recStatus = 'ready';
        this.updateRecList(tokens);
      })
      .catch(error => {
        // Handle the error
        console.error(error);
        this.recStatus = 'ready';
        this.updateRecList([]);
      });
  }

  setCurrentPhrase(phrase) {
    if (this.currentPhrase != phrase) {
      this.refresh = true;
    }
    this.currentPhrase = phrase;
    console.log(this.updateAutocomplete != null);
    this.attemptRefresh();
    console.log(phrase);
  }

  attemptRefresh() {
    if (
      this.updateAutocomplete != null &&
      this.request == 'ready' &&
      this.refresh
    ) {
      this.refresh = false;
      this.request = 'pending';
      console.log('Requesting');
      fetch(`http://127.0.0.1:5000/copilot?input=${this.currentPhrase}`, {
        method: 'GET'
      })
        .then(response => response.text()) // send response body to next then chain
        .then(body => {
          let tokens = body.split(' ');
          for (let i = 0; i < tokens.length; i++) {
            console.log(tokens[i]);
            tokens[i] = tokens[i].replaceAll('.', '');
          }
          if (tokens[0] == '') {
            tokens = tokens.slice(1);
          }
          let phrasetokens = this.currentPhrase.split(' ');
          for (
            let i = 0;
            i < Math.min(phrasetokens.length, tokens.length);
            i++
          ) {
            if (phrasetokens[i] == tokens[0]) {
              tokens = tokens.slice(1);
            } else {
              break;
            }
          }
          this.updateAutocomplete(tokens);
          this.request = 'ready';
        })
        .catch(error => {
          // Handle the error
          console.error(error);
          this.request = 'ready';
        });
      this.test = true;
      console.log('Updated');
    }
  }

  // makeRequest(url, method, data) {
  //     return
  // }
}
