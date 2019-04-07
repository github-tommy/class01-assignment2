// jQuery Doc Ready
$(function () {
    // Set up some data and variables
    const data = [1, 2, 3, 4],
        input = $('.input'),
        submit = $('.submit'),
        resultSum = $('.sum');
    // Click event on the submit input
    submit.on('click', function () {
        // Grab the input value and parse it into a number
        const val = input.val();
        const num = parseInt(val);
        // Verify the user gave us a real number
        if (!isNaN(num)) {
          // Add our new number to the data array
          data.push(num);
          // Use reduce to convert our array of numbers into a single value - the sum of all of the numbers
          const sum = data.reduce((acc, curr) => acc + curr);
          // Add our new total to the page
          resultSum.text(sum);
          // Reset the input value to nothing
          input.val('');
        }
    });
});

// ======ADDING THE NUMBER INPUTTED BY THE USER, BY 10

$(function() {
    const data = [1, 2, 3, 4],
        input = $('.input'),
        submit = $('.submit'),
        resultMap = $('.map');
    submit.on('click', function() {
        const val = input.val();
        const num = parseInt(val);

        if (!isNaN(num)) {

            data.push(num);

            const map = data.map(function(x) {
                return x + 10;
            
                resultMap.text(map);

                input.val('');
            });
    });
    });
