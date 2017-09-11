/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

const FollowToggle = __webpack_require__(1);

$(() => {
  let $toggles = $(".follow-toggle");
  $toggles.each((idx, toggle) => new FollowToggle(toggle));
});


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

const APIUTIL = __webpack_require__(2);

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


/***/ }),
/* 2 */
/***/ (function(module, exports) {

const APIUTIL = {
  followUser: (id) => {
    return $.ajax({
      url: `/users/${id}/follow`,
      type: 'POST',
      dataType: 'json',
    });
  },

  unfollowUser: (id) => {
    return $.ajax({
      url: `/users/${id}/follow`,
      type: 'DELETE',
      dataType: 'json',
    });
  }
};

module.exports = APIUTIL;


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map