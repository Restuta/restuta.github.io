console.log("" +
    "          ,'\"\"`." + '\n' +
    '         / _  _ \\' + '\n' +
    "         |(@)(@)|" + '\n' +
    "         )  __  (        hi there :D" + '\n' +
    "        /,'))((`.\\" + '\n' +
    "       (( ((  )) ))" + '\n' +
    "        `\ `)(' /'");

Mousetrap.bind(['command+shift+s', 'ctrl+shift+s'], function() {

    $('.link-hidden').toggleClass('link-used-to-be-hidden');

    // return false to prevent default browser behavior
    // and stop event from bubbling
    return false;
});