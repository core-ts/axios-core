"use strict";
Object.defineProperty(exports,"__esModule",{value:true});
var HttpRequest=(function(){
  function HttpRequest(axios, httpOptionsService){
    this.axios = axios;
    this.httpOptionsService = httpOptionsService;
  }
  HttpRequest.prototype.getHttpOptions=function(){
    if (this.httpOptionsService){
      return this.httpOptionsService.getHttpOptions();
    }
    else {
      var httpOptions = {
        headers: {
          'Content-Type': 'application/json;charset=UTF-8'
        }
      };
      return httpOptions;
    }
  };
  HttpRequest.prototype.get=function(url, options){
    return Promise.resolve(this.axios.get(url, options ? options : this.getHttpOptions())
      .then(function (_a){
      var data = _a.data;
      return data;
    })
      .catch(function (_a){
      var data = _a.data;
      throw data;
    }));
  };
  HttpRequest.prototype.delete=function(url, options){
    return Promise.resolve(this.axios.delete(url, options ? options : this.getHttpOptions())
      .then(function (_a){
      var data = _a.data;
      return data;
    })
      .catch(function (_a){
      var data = _a.data;
      throw data;
    }));
  };
  HttpRequest.prototype.post=function(url, obj, options){
    return Promise.resolve(this.axios.post(url, obj, options ? options : this.getHttpOptions())
      .then(function (_a){
      var data = _a.data;
      return data;
    })
      .catch(function (_a){
      var data = _a.data;
      throw data;
    }));
  };
  HttpRequest.prototype.put=function(url, obj, options){
    return Promise.resolve(this.axios.put(url, obj, options ? options : this.getHttpOptions())
      .then(function (_a){
      var data = _a.data;
      return data;
    })
      .catch(function (_a){
      var data = _a.data;
      throw data;
    }));
  };
  HttpRequest.prototype.patch=function(url, obj, options){
    return Promise.resolve(this.axios.patch(url, obj, options ? options : this.getHttpOptions())
      .then(function (_a){
      var data = _a.data;
      return data;
    })
      .catch(function (_a){
      var data = _a.data;
      throw data;
    }));
  };
  return HttpRequest;
}());
exports.HttpRequest = HttpRequest;
