console.log('This would be the main JS file.');

 Mousetrap.bind(['command+shift+s', 'ctrl+shift+s'], function() {

        $('.link-hidden').toggleClass('link-used-to-be-hidden');

        // return false to prevent default browser behavior
        // and stop event from bubbling
        return false;
});
