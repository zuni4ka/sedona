'use strict';

(function () {
    var searchFormBody = document.querySelector('.search-form-body');

    var onSearchButtonClick = function (){
      searchFormBody.classList.toggle('search-body-hidden');
    };
    document.querySelector('.search-form-button').addEventListener('click', onSearchButtonClick);
    
})();