import $ from 'jquery';
p
$('body').append('<p>Holberton Dashboard</p>');
$('body').append('<p>Dashboard data for the students</p>');
$('body').append('<button>Click here to get started</button>');
$('body').append('<p id="count"></p>');
$('body').append('<p>Copyright - Holberton School</p>');

function updateCounter() {
  const count = $('#count').html() || 0;
    $('#count').html(parseInt(count) + 1 + ' clicks on the button');
}

const debounced = _.debounce(updateCounter, 500);

$('button').on('click', debounced);
