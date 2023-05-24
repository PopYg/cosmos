"use strict";

const $candleLineBtn = document.querySelectorAll('.candle_line_wrap button');
for (const button of $candleLineBtn) {
    button.addEventListener('click', function() {
        $candleLineBtn.forEach(function(removeBtn){
            removeBtn.classList.remove("active");
        });
        button.classList.add("active");
    });
}

const $dateBtn = document.querySelectorAll('.date_wrap button');
for (const button of $dateBtn) {
    button.addEventListener('click', function() {
        $dateBtn.forEach(function(removeBtn){
            removeBtn.classList.remove("active");
        });
        button.classList.add("active");
    });
}