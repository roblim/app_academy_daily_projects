class View {
  constructor(game, $el) {
    this.game = game;
    this.gridCont = $el;
    this.setupBoard();
    this.bindEvents();
  }

  bindEvents() {
    $("li").on("click", () => {
      const currentTarget = event.currentTarget;
      const $currentTarget = $(currentTarget);
      console.log($currentTarget.data("pos"));
      try {
        // this.game.board.isEmptyPos($currentTarget.data("pos"));
        this.game.playMove($currentTarget.data("pos"));
      }
      catch(e) {
        alert("Invalid move! Try again.");
        return;
      }
      this.makeMove($currentTarget);
    });
  }

  makeMove($square) {
    $square.off("mouseenter");
    $square.off("mouseleave");
    $square.css("background-color", "aquamarine");
    if (this.game.currentPlayer === 'x') {
      $square.css('color', 'blue');
    } else {
      $square.css('color', 'red');
    }
    $square.text(this.game.currentPlayer);
    if (this.game.isOver()) {
      alert(`Congrats! ${this.game.currentPlayer} wins!`);
    }
  }

  setupBoard() {
    const $ul = $("<ul>");
    $ul.attr("id", "ttt_grid");
    this.gridCont.append($ul);
    for (let i = 0; i < 3; i++) {
      for (let i2 = 0; i2 < 3; i2++) {
        let $li = $("<li>");
        $li.data("pos", [i, i2]);
        $("#ttt_grid").append($li);
      }
    }
    $("li").css("float", "left");
    $("li").css("width", "200px");
    $("li").css("height", "200px");
    $("li").css("border", "1px solid black");
    $("li").css("background-color", "lemonchiffon");
    $("li").css("font", "bold 150px arial ");
    $("li").css("text-align", "center");
    $("li").css("vertical-align", "middle");
    $("ul").css("width", "606px");
    $("ul").css("list-style", "none");
    $("li").css("cursor", "crosshair");
    $("li").on({
      mouseenter: () => {
        const currentTarget = event.currentTarget;
        const $currentTarget = $(currentTarget);
        $currentTarget.css("background-color", "pink");
      },
      mouseleave: () => {
        const currentTarget = event.currentTarget;
        const $currentTarget = $(currentTarget);
        $currentTarget.css("background-color", "lemonchiffon");
      }
    });
  }
}

module.exports = View;
