console.log('This would be the main JS file.');

 Mousetrap.bind(['command+h', 'ctrl+h'], function() {

        // return false to prevent default browser behavior
        // and stop event from bubbling
        return false;
});
