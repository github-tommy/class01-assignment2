

// jQuery Doc Ready
$(function () {
    // Set up some data and variables
    const data = [1, 2, 3, 4,-10],
        input = $('#input'),
        submit = $('#submit'),
        resultSum = $('#sum');
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

// ======ADDING THE NUMBER INPUTTED BY THE USER ================================

// jQuery Doc Ready
$(function () {
    // Set up some data and variables
    const data = [1, 2, 3, 4],
        input = $('#input2'),
        submit = $('#submit2'),
        resultSum = $('#sum2');
    // Click event on the submit input
    submit.on('click', function () {
        // Grab the input value and parse it into a number
        const val = input.val();
        const num = parseInt(val);
        // Verify the user gave us a real number
        if (!isNaN(num)) {
            // Add our new number to the data array
            // data.push(num);
            // Use reduce to convert our array of numbers into a single value - the sum of all of the numbers
            const sum = data.map((x) => x + num);
            // Add our new total to the page
            resultSum.text(sum);
            // Reset the input value to an empty string
            input.val('');
        }
    });
});

// ==========FILTER NUMBER <4========

// jQuery Doc Ready
$(function () {
    // Set up some data and variables
    const data = [1, 2, 3, 4],
        input = $('#input3'),
        submit = $('#submit3'),
        resultSum = $('#sum3');
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
            const sum = data.filter((x) => x > 3);
            const sumTimesTen = sum.map((x) => x *10);
            // Add our new total to the page
            resultSum.text(sumTimesTen);
            // Reset the input value to an empty string
            input.val('');
        }
    });
});

// =============TO SHOW ALL NUMBERS INCLUDING NEW# INPUTTED ====================

$(function () {

    let data = [1, 2, 3, 4],
        input = $('#input4'),
        submit = $('#submit4'),
        resultSum = $('#sum4');

    submit.on('click', function () {

        let val = input.val();
        let num = parseInt(val);

        if (!isNaN(num)) {

            data.push(num);

            let sum = data.map((x) => x / 10);

            data.forEach(function(value) {
                resultSum.text(sum)
            });

            input.val('');
        }
    });
});
