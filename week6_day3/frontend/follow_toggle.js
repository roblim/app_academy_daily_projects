const APIUTIL = require('./api_util');

class FollowToggle {
  constructor(el) {
    this.$el = $(el);
    this.userId = this.$el.data("userid");
    this.followState = this.$el.data("followstate");
    this.render();

    this.$el.on('click', this.handleClick.bind(this));
  }

  render() {
    switch(this.followState) {
      case 'followed':
        this.$el.text("Unfollow!");
        this.$el.prop('disabled', false);
        break;
      case 'not_followed':
        this.$el.text("Follow!");
        this.$el.prop('disabled', false);
        break;
      case 'following':
        this.$el.prop('disabled', true);
        break;
      case 'unfollowing':
        this.$el.prop('disabled', true);
    }
  }

  handleClick(event) {
    event.preventDefault();
    if (this.followState === 'followed') {
      this.followState = 'unfollowing';
      this.render();
      APIUTIL.unfollowUser(this.userId).then(this._success.bind(this));} else {
      this.followState = 'following';
      this.render();
      APIUTIL.followUser(this.userId).then(this._success.bind(this));
      }
  }

  _success(response) {
    if (this.followState === 'unfollowing') {
    this.followState = 'not_followed';
    } else {
    this.followState = 'followed';
    }
    this.render();
  }

}

module.exports = FollowToggle;
