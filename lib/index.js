"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var HttpRequest = (function () {
  function HttpRequest(axios, getHttpOptions) {
    this.axios = axios;
    this.getHttpOptions = getHttpOptions;
    this.get = this.get.bind(this);
    this.delete = this.delete.bind(this);
    this.post = this.post.bind(this);
    this.put = this.put.bind(this);
    this.patch = this.patch.bind(this);
  }
  HttpRequest.prototype.getOptions = function () {
    if (this.getHttpOptions) {
      return this.getHttpOptions();
    }
    else {
      var httpOptions = {
        headers: {
          'Content-Type': 'application/json;charset=UTF-8'
        }
      };
      return Promise.resolve(httpOptions);
    }
  };
  HttpRequest.prototype.get = function (url, options) {
    var _this = this;
    if (options) {
      return Promise.resolve(this.axios.get(url, options).then(function (_a) {
        var data = _a.data;
        return data;
      }));
    }
    else {
      return this.getOptions().then(function (opts) {
        return Promise.resolve(_this.axios.get(url, opts).then(function (_a) {
          var data = _a.data;
          return data;
        }));
      });
    }
  };
  HttpRequest.prototype.delete = function (url, options) {
    var _this = this;
    if (options) {
      return Promise.resolve(this.axios.delete(url, options).then(function (_a) {
        var data = _a.data;
        return data;
      }));
    }
    else {
      return this.getOptions().then(function (opts) {
        return Promise.resolve(_this.axios.delete(url, opts).then(function (_a) {
          var data = _a.data;
          return data;
        }));
      });
    }
  };
  HttpRequest.prototype.post = function (url, obj, options) {
    var _this = this;
    if (options) {
      return Promise.resolve(this.axios.post(url, obj, options).then(function (_a) {
        var data = _a.data;
        return data;
      }));
    }
    else {
      return this.getOptions().then(function (opts) {
        return Promise.resolve(_this.axios.post(url, obj, opts).then(function (_a) {
          var data = _a.data;
          return data;
        }));
      });
    }
  };
  HttpRequest.prototype.put = function (url, obj, options) {
    var _this = this;
    if (options) {
      return Promise.resolve(this.axios.put(url, obj, options).then(function (_a) {
        var data = _a.data;
        return data;
      }));
    }
    else {
      return this.getOptions().then(function (opts) {
        return Promise.resolve(_this.axios.put(url, obj, opts).then(function (_a) {
          var data = _a.data;
          return data;
        }));
      });
    }
  };
  HttpRequest.prototype.patch = function (url, obj, options) {
    var _this = this;
    if (options) {
      return Promise.resolve(this.axios.patch(url, obj, options).then(function (_a) {
        var data = _a.data;
        return data;
      }));
    }
    else {
      return this.getOptions().then(function (opts) {
        return Promise.resolve(_this.axios.patch(url, obj, opts).then(function (_a) {
          var data = _a.data;
          return data;
        }));
      });
    }
  };
  return HttpRequest;
}());
exports.HttpRequest = HttpRequest;
