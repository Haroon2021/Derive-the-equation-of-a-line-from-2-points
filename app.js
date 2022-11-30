const form = document.querySelector('form');

form.addEventListener('submit', (event) =>{
    event.preventDefault()
    // Line below takes the form data from the HTML page and we have to make sure that 
    // the name tags are filled in the HTML elements otherwise we will not get proper key pair values
    // when the data is transformed
    const linesData = new FormData(form);
    // The linke below transforms the data into data with Key value pairs
    const linesDataTransformed = Object.fromEntries(linesData);

    // Picking out the values from the transformed data 
    const x1 = parseFloat(linesDataTransformed['x1']);
    const x2 = parseFloat(linesDataTransformed['x2']);
    const y1 = parseFloat(linesDataTransformed['y1']);
    const y2 = parseFloat(linesDataTransformed['y2']);
    const m = (y1-y2)/(x1-x2);
    const c = y1 - (m*x1);

    document.querySelector(".displaycoordinates").innerText = `
    Your co ordinates are (${x1},${y1}) and (${x2},${y2})

    `

    if (x1 == x2 && y1 == y2) {
        document.querySelector(".errorhanger").innerText = `The co ordinate values are the same please input different co-ordinates`
    } else if(x1 == x2) {
        document.querySelector(".answer").innerText = `
        Since the values of the x co ordinate are the same as y changes, the equation of the line is:
        x = ${x1}
        
        `
    } else if(y1 == y2) {
        document.querySelector(".answer").innerText = `
        Since the values of the y co ordinate are the same as x changes, the equation of the line is:
        y = ${y1}
        
        `
    } else {
        document.querySelector(".answer").innerText = `
        Using the formula for m that we saw above we obtain:
        m = (${y1} - ${y2})/(${x1} - ${x2} )
        m = ${(y1-y2)} / ${(x1-x2)} 
        m = ${(y1-y2)/(x1-x2)}

        Using this value of m and the general form of a straight line namely y = mx + c we get:
        y = ${m}x + c

        Now inserting the first co ordinate pair (${x1},${y1}) we have:

        ${y1} = (${m})*(${x1}) + c
        ${y1} = ${m*x1} + c
        c = ${ y1 - (m*x1)}
        
        Hence the equation of the straight line is:

        y = ${m}x + ${c}

        `
    }
}) 