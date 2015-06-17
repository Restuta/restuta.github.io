(function() {

  var STRING_DECAMELIZE_REGEXP = (/([a-zа-я\d])([A-ZА-Я])/g);
  var STRING_STRIP_HTML_REGEXP = (/(<[^>]*>)/g);
  var STRING_DASHERIZE_REGEXP = (/[^a-zа-я\d]+/g);

  var decamelize = _.memoize(function(str) {
    return str.replace(STRING_DECAMELIZE_REGEXP, '$1_$2').toLowerCase();
  });

  var stripHtml = _.memoize(function(str) {
    return str.replace(STRING_STRIP_HTML_REGEXP, '');
  });

  var dasherize = _.memoize(function(str) {
    return decamelize(stripHtml(str)).replace(STRING_DASHERIZE_REGEXP, '-');
  });

  var headings = [];

  $('h2, h3').each(function(index, heading) {
    var textContent = heading.textContent;
    var id = dasherize(textContent);

    heading.id = id;

    var value = {
      el: headings,
      id: heading.id,
      text: textContent,
      type: heading.tagName.toUpperCase(),
      children: []
    };

    if (heading.tagName.toUpperCase() === 'H2') {
      headings.push(value);
      current = value;
    } else {
      current.children.push(value);
    }
  });

  function renderHeadings(headings) {
    var template = '';

    _.each(headings, function(heading) {
      template += '<li ' + 'class="heading-type-' + heading.type + '"' + '><a href="#' + heading.id + '">' + heading.text + '</a>';

      if (heading.children.length) {
        template += '<ul class="nav">';
        template += renderHeadings(heading.children);
        template += '</ul>';
      }

      navContent += '</li>';
    }, this);

    return template;
  }

  var navContent = renderHeadings(headings);

  var $sidebar = $('.sidebar');

  $sidebar.find('.nav').html(navContent);

  $sidebar.affix({
    offset: {
      top: _.memoize(function() {
        var offsetTop = $sidebar.offset().top;
        var navbarOuterHeight = $('.navbar').height();
        var sidebarMargin = parseInt($sidebar.children(0).css('margin-top'), 10);

        return offsetTop - navbarOuterHeight - sidebarMargin;
      }),
      bottom: _.memoize(function() {
        return $('.footer').outerHeight(true);
      })
    }
  });

  var $body = $(document.body);

  $body.scrollspy({
    target: '.sidebar',
    offset: 100
  });

  $('td:contains("✓")').addClass('bg-success');

}());