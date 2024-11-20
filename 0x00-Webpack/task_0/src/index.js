import $ from 'jquery';
const p1 = 'Holberton Dashboard';
const p2 = 'Dashboard data for the students';
const p3 = 'Copyright - Holberton School';

const first = $('<p></p>').text(p1);
const second = $('<p></p>').text(p2);
const third = $('<p></p>').text(p3);

$('body').append(first);
$('body').append(second);
$('body').append(third);
