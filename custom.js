// Give Answer Function
function answer()
{
    document.getElementById('answer').innerHTML = 'Yea, Of Course!';
}


// Give Addition Result
function addition(firstNumber = 5, secondNumber = 5)
{
    var result = firstNumber + ' and ' + secondNumber + ' is = ' + (firstNumber + secondNumber);
    document.getElementById('addition').innerHTML = result;
    // alert(firstNumber + secondNumber);
    // console.log(firstNumber + secondNumber);
}


// Show Name
function showName($name = 'Plabon')
{
    document.getElementById('show_name').innerHTML = $name;
}


// Checking scope js funciton
var name = 'Plabon',
title = ' Costa';
function myName()
{
    // var name = 'Plabon';
    var religionName = 'Joseph';
    return (function()
    {
        // var title = ' Costa';
        return (function()
        {
            return name + title;
        })();
    })();
}

// console.log(religionName); (You can not aceess this because this variable is called inside the function)



// Creating Object and array and calling theme
var myDetailsTitle = ['name', 'title', 'age', 'profession'];
var myDetails = {
    name: 'Plabon',
    title: 'Joseph',
    age: 21,
    profession: 'Web application developer',
    fullName: function(){
        return this.name + ' ' + this.title;
    },
};
document.getElementById('myDetails').innerHTML = 'My' + ' ' + myDetailsTitle[0] + ' is ' + myDetails.name;
console.log(typeof(name));
