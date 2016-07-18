var request = require('request');
var querystring = require('querystring');
var apis = require('./apis');

var Backlogger = module.exports = function(domain, apiKey) {
	this.domain = domain;
	this.apiKey = apiKey;
};

Backlogger.prototype._request = function(apiName, options) {
	var API = apis[apiName] || null;

	if (!API)
		throw new Error('No such API \"' + apiName + '\"');

	return new Promise(function(resolve, reject) {

		var urlParams = options || {};
		var params = options.params || {};

		// Replace key contained in URL
		var apiPath = API.path;
		for (var key in urlParams) {
			if (key == 'params')
				continue;

			apiPath = apiPath.replace(':' + key, urlParams[key]);
		}

		var body = {};
		var url = 'https://' + this.domain + '.backlogtool.com/api/v2/' + apiPath;
		if (API.method == 'get') {
			url += '?' + querystring.stringify(Object.assign({
				apiKey: this.apiKey
			}, params));
		} else {
			url += '?' + querystring.stringify({
				apiKey: this.apiKey
			});

			body = params;
		}

		request[API.method](url, body, function(err, response, body) {
			if (err)
				return reject(err);

			resolve(JSON.parse(body));
		});
	}.bind(this));
	
};

for (var apiName in apis) {
	Backlogger.prototype[apiName] = (function(apiName) {

		return function(options) {
			return this._request(apiName, options || {});
		}
	})(apiName);
}
