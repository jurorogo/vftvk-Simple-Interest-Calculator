function compute()
{
    // Computes the interest. Updates the span to show the result.
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;

    // Interest
    var interest = principal * years * rate/100;
    var amount = principal + interest;

    // Conversion into an actual year
    var year = new Date().getFullYear();
    year = year + parseInt(years, 10);

    // Check principal
    if (principal == "" || principal <= 0){
      window.alert("Enter a positive number");
      document.getElementById("principal").value = "";
      document.getElementById("principal").focus();
    }
    else{
      // Show result
      document.getElementById("result").innerHTML = "If you deposit <span class=\"results\">" + principal + ",</span>\<br\>at an interest rate of <span class=\"results\">" + rate + "%\</span><br\>You will receive an amount of <span class=\"results\">"+ interest + ",</span>\<br\>in the year <span class=\"results\">" + year + "</span>\<br\>";
    }


}

function updateRate()
{
    // Shows the value of the rate slider.
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval + "%";

}     