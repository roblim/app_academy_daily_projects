const FollowToggle = require('./follow_toggle.js');

$(() => {
  let $toggles = $(".follow-toggle");
  $toggles.each((idx, toggle) => new FollowToggle(toggle));
});
