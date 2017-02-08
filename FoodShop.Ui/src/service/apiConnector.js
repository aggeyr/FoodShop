import config from '../config';
import req from 'jquery-browserify';

var RequestHelper = function() {
  this.host = config.apiPath;

  this.postWithAjax = (url, entity, success, failed) => {
    return makeRequest({
        url: this.host + url,
        type: 'POST',
        dataType: 'json',
        contentType: 'application/json',
        data: JSON.stringify(entity)
      },
      success,
      failed
    );
  };

  this.getWithAjax = (url, entity, success, failed) => {
    return makeRequest({
        url: this.host + url,
        type: 'GET',
        dataType: 'json',
        data: entity
      },
      success,
      failed
    );
  };
};

function makeRequest(params, success, failed) {
  const token = sessionStorage.getItem('id_token');

  return req.ajax({
    ...params,
    headers: {
      Authorization: 'Bearer ' + token
    },
    success: function(data, statusText, xhr) {
      success &&
      success(data, statusText, xhr);
    },
    error: function(xhr) {
      failed &&
      failed(xhr);
    }
  });
}


exports.RequestHelper = RequestHelper;
