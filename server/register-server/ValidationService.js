// Validate form input elements
const validateLib = require('./ValidationLib');

/**
 * Validate User
 * @param userObj
 * @returns {boolean|{msg: string, isNotValid: boolean}|{isNotValid}|*}
 */
function validateUser(userObj) {
    // Check required fields
    let result = validateLib.checkRequired("username", userObj.username);
    if (result.isNotValid) { return result; }

    result = validateLib.checkRequired("email", userObj.email);
    if (result.isNotValid) { return result; }

    result = validateLib.checkRequired("password", userObj.password);
    if (result.isNotValid) { return result; }

    result = validateLib.checkRequired("phone", userObj.phone);
    if (result.isNotValid) { return result; }

    result = validateLib.checkRequired("age", userObj.age);
    if (result.isNotValid) { return result; }

    /* Aufgabe 4a:
           Validierung auf vorhandensein von Vornamen, Nachnamen
        */
    result = validateLib.checkRequired("firstname", userObj.firstname);
    if (result.isNotValid) { return result; }

    result = validateLib.checkRequired("lastname", userObj.lastname);
    if (result.isNotValid) { return result; }

    //check length
    result = validateLib.checkLength("username",userObj.username, 3, 15);
    if (result.isNotValid) { return result; }

    result = validateLib.checkLength("password", userObj.password, 6, 25);
    if (result.isNotValid) { return result; }

    /* Aufgabe 4b:
       Validierung auf vorhandensein von der Länge
       für Vorname (2 bis 20) und Nachname (2 bis 50)
    */
    result = validateLib.checkLength("firstname", userObj.firstname, 2, 20);
    if (result.isNotValid) { return result; }

    result = validateLib.checkLength("lastname", userObj.lastname, 2, 50);
    if (result.isNotValid) { return result; }


    //check email syntax
    result = validateLib.checkEmail("email", userObj.email);
    if (result.isNotValid) { return result; }

    /* Aufgabe 4c:
      Validierung der Telefonnumer ähnlich wie bei der Email mit einer
      Regular expression (regex). Für eine geeignete regex suchen Sie
      im Internet nach "javascript regular expression for mobile number"
*/
    //check phone syntax
    result = validateLib.checkPhone("phone", userObj.phone);
    if (result.isNotValid) { return result; }

    /* Aufgabe 4d:
        Validierung, ob Person volljährig ist
     */
    result = validateLib.checkAge("age", userObj.age);
    if (result.isNotValid) { return result; }
    //all inputs are valid and isNotValid=false
    return false;
}

/**
 *  Export validation functions for further usage.
 *  function to export WITHOUT beackets!
 */
module.exports = {
    validateUser
}
