function easyHTTP() {
  this.http = new XMLHttpRequest();
}

// make an http GET request
easyHTTP.prototype.get = function (url, callback) {
  this.http.open("GET", url, true);

  let self = this;

  this.http.onload = function () {
    if (self.http.status === 200) {
      callback(null, self.http.responseText);
    } else {
      callback(`Error: ${self.http.status}`);
    }
  };

  this.http.send();
};

// make an http POST request
easyHTTP.prototype.post = function (url, data, callback) {
  this.http.open("POST", url, true);
  this.http.setRequestHeader("Content-type", "application/json");

  let self = this;

  this.http.onload = function () {
    callback(null, self.http.responseText);
  };

  this.http.send(JSON.stringify(data));
};

// make an http PUT request
easyHTTP.prototype.put = function (url, data, callback) {
  this.http.open("PUT", url, true);
  this.http.setRequestHeader("Content-type", "application/json");

  let self = this;

  this.http.onload = function () {
    callback(null, self.http.responseText);
  };

  this.http.send(JSON.stringify(data));
};

// make an http DELETE request
easyHTTP.prototype.delete = function (url, callback) {
  this.http.open("DELETE", url, true);

  let self = this;

  this.http.onload = function () {
    if (self.http.status === 200) {
      callback(null, "post deleted");
    } else {
      callback(`Error: ${self.http.status}`);
    }
  };

  this.http.send();
};
