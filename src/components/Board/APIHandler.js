export default class APIHandler {
  currentPhrase = '';
  test = false;
  request = 'ready';
  constructor() {
    //this.worker = new Worker('apiWorker.js');
    this.updateAutocomplete = null;
    this.updateRecList = null;
  }
  setCurrentPhrase(phrase) {
    this.currentPhrase = phrase;
    console.log(this.updateAutocomplete != null);
    if (this.updateAutocomplete != null && this.request == 'ready') {
      this.request = 'pending';
      console.log('Requesting');
      fetch('http://127.0.0.1:5000/copilot', { method: 'GET' })
        .then(response => response.text()) // send response body to next then chain
        .then(body => this.updateAutocomplete(body.split(' ')))
        .catch(error => {
          // Handle the error
          console.error(error);
          this.request = 'ready';
        });
      this.test = true;
      console.log('Updated');
      this.updateAutocomplete(['a', 'b', 'c']);
    }

    console.log(phrase);
  }

  // makeRequest(url, method, data) {
  //     return
  // }
}
