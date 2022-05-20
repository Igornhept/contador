var wrapper = document.getElementById('currentNumber');
var counter;
var count = 0;

function increment(){
    conter = count + 1;
    currentNumberWrapper.innerHTML = currentNumber;
}

function decrement(){
    counter = count - 1;
    currentNumberWrapper.innerHTML = currentNumber;
    }
    
    function start() {
      counter = setInterval(function() {
        wrapper.innerHTML = count;
        count++;
      }, 95);
    }
    function end() {
      clearInterval(counter)
    }

    function start1() {
        counter = setInterval(function() {
          wrapper.innerHTML = count;
          count--;
        }, 95);
      }
      function end1() {
        clearInterval(counter)
      }
  
    
