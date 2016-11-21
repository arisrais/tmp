/**
 * Created by rais on 20/11/16.
 */

(function($) {
    $.fn.evaneos = function()
    {
        var regExp = /(?:[a-zeéèêëEÉÈÊËaàâäAÀÁÂÃÄÅÆcçCiïîIÌÍÎÏoôöÒÓÔÕÖuüûUÜÛÙÚyYÿÝ]|([-_&])(?!\1)){3,}/ig;
        var text   = $.trim($(this).text());

        var wordList  = text.match(regExp);
        var wordCount = {};

        $.each(wordList, function (key, word) {
            word = word.toLowerCase();

            if (!wordCount.hasOwnProperty(word)) {
                wordCount[word] = 1;
            } else {
                wordCount[word]++;
            }
        });

        return wordCount;
    };
})(jQuery);
