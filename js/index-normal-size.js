'use strict';

(function () {
    var searchForm = document.querySelector('.search-form');
    var searchFormBody = document.querySelector('.search-form-body');
    var guestsInput = searchFormBody.querySelector('#guests-amount');
    var guestsKidsInput = searchFormBody.querySelector('#kids-amount');

    var onSearchButtonClick = function () {
        searchFormBody.classList.toggle('search-body-hidden');
        searchFormBody.classList.remove("form-error");
    };
    
    document.querySelector('.search-form-button').addEventListener('click', onSearchButtonClick);
    searchForm.addEventListener("submit", function () {
        localStorage.setItem("guestsAmount", guestsInput.value);
        localStorage.setItem("kidsAmount", guestsKidsInput.value);
    });
})();