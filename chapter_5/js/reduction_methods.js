/**
 * Created by goldbeck on 18.07.2014.
 */
var attributeNames = ["name", "age", "country", "city"];
var attributeValues = ["Alexander", "25", "Germany", "Papenburg"];
var person = new Object();

attributeNames.reduce(function(prev, cur, index, array) {
    person[array[index]] = attributeValues[index];
    return person;
}, person);

alert("Name: " + person.name + "\nAge: " + person.age + "\nCountry: " + person.country + "\nCity: " + person.city);