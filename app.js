var app = angular.module('memory', []);

app.controller('MemoryController', function($scope, $timeout) {

  var firstTile;
  var secondTile;
  var state = 'first';

  $scope.shuffle = function() {
    $scope.tiles = shuffle($scope.tiles);
  }

  function shuffle(arr) {
    console.log('you shuffled');
    arr = arr.slice(0);
    var newArr = [];
    while (arr.length > 0) {
      var indx = Math.floor(Math.random() * arr.length);
      var item = arr[indx];
      newArr.push(item);
      arr.splice(indx, 1);
    }
    return newArr;
  }

  // $scope.resetGame = function() {
  //
  // }

  $scope.flipTile = function(tile) {

    console.log('you clicked');
    if (state === 'first') {
      tile.state = 'open';
      firstTile = tile;
      state = 'second';
      // console.log(state);
    } else if (state === 'second') {
      tile.state = 'open';
      secondTile = tile;
      state = 'first';
      // console.log(state);
      if (firstTile.imgURL === secondTile.imgURL) {
        tile.matched = true;
      } else {
        $timeout(function() {
          firstTile.state = 'closed';
          secondTile.state = 'closed';
        }, 1000);
      }
    }

  };


  //when card is clicked

  //if 'first' state

    //open card
    //change state to 'second'
    //set firstCard to card that was clicked

  //if 'second' state
    //open card
    //change state to 'first'
    //compare 2 open cards
    //compare imgURL of firstCard and current card
$scope.startGame = function() {
  $scope.tiles = [
    {
      name:'tile1',
      imgURL:'monsters-01.png',
      state:'closed',
      matched: null
    },
    {
      name:'tile2',
      imgURL:'monsters-01.png',
      state:'closed',
      matched: null
    },
    {
      name:'tile3',
      imgURL:'monsters-02.png',
      state:'closed',
      matched: null
    },
    {
      name:'tile4',
      imgURL:'monsters-02.png',
      state:'closed',
      matched: null
    },
    {
      name:'tile5',
      imgURL:'monsters-03.png',
      state:'closed',
      matched: null
    },
    {
      name:'tile6',
      imgURL:'monsters-03.png',
      state:'closed',
      matched: null
    },
    {
      name:'tile7',
      imgURL:'monsters-04.png',
      state:'closed',
      matched: null
    },
    {
      name:'tile8',
      imgURL:'monsters-04.png',
      state:'closed',
      matched: null
    }
  ];
  $scope.shuffle();
};

$scope.startGame();
});
