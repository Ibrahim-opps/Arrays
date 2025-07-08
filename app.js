    let studentNames1 = [];
    let studentNames2 = new Array();
    let stringsArray = ["Ali", "Sara", "John"];
    let numbersArray = [10, 20, 30];
    let booleanArray = [true, false, true];
    let mixedArray = ["Hello", 123, false];
    var qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];
    document.write("<h2>Qualifications:</h2>");                     
    for (var i = 0; i < qualifications.length; i++) {
        document.write((i + 1) + ") " + qualifications[i] + "<br>");
    }