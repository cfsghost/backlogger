var request = require('request');
var querystring = require('querystring');
var apis = require('./apis');

var Backloger = module.exports = function(domain, apiKey) {
	this.domain = domain;
	this.apiKey = apiKey;
};

Backloger.prototype._request = function(apiName, params) {
	var API = apis[apiName] || null;

	if (!API)
		throw new Error('No such API \"' + apiName + '\"');

	return new Promise(function(resolve, reject) {

		var body = {};
		var url = 'https://' + this.domain + '.backlogtool.com/api/v2/' + API.path;
		if (API.method == 'get') {
			url += '?' + querystring.stringify(Object.assign({
				apiKey: this.apiKey
			}, params || {}));
		} else {
			url += '?' + querystring.stringify({
				apiKey: this.apiKey
			});

			body = params || {};
		}

		request[API.method](url, body, function(err, response, body) {
			if (err)
				return reject(err);

			resolve(body);
		});
	}.bind(this));
	
};

for (var apiName in apis) {
	Backloger.prototype[apiName] = (function(apiName) {

		return function(params) {
			return this._request(apiName, params);
		}
	})(apiName);
}
