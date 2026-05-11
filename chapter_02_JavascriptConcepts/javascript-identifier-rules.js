// ==========================================
// JAVASCRIPT IDENTIFIER RULES - EXAMPLES
// ==========================================


// ------------------------------------------
// RULE 1: Must start with a letter (a-z, A-Z), underscore (_), or dollar sign ($)
// ------------------------------------------

let name = "valid starts with letter";
let Name = "valid starts with uppercase letter";
let _private = "valid starts with underscore";
let $element = "valid starts with dollar sign";
let myVar123 = "valid starts with letter";
let _123 = "valid starts with underscore";
let $123 = "valid starts with dollar sign";


// ------------------------------------------
// RULE 2: Subsequent characters can be letters, digits (0-9), underscores, or dollar signs
// ------------------------------------------

let name1 = "valid contains digit";
let first_name = "valid contains underscore";
let total$amount = "valid contains dollar sign";
let userName2 = "valid letters and digits";
let data_1$val = "valid combination";


// ------------------------------------------
// RULE 3: Cannot start with a digit (0-9)
// ------------------------------------------

// let 1name = "invalid";       // SyntaxError: Invalid or unexpected token
// let 2ndPlace = "invalid";    // SyntaxError: Invalid or unexpected token
// let 123abc = "invalid";      // SyntaxError: Invalid or unexpected token


// ------------------------------------------
// RULE 4: Cannot be a reserved keyword
// ------------------------------------------

// let let = "invalid";         // SyntaxError: let is disallowed as a lexically bound name
// let class = "invalid";       // SyntaxError: Unexpected token 'class'
// let return = "invalid";      // SyntaxError: Unexpected token 'return'
// let function = "invalid";    // SyntaxError: Unexpected token 'function'
// let if = "invalid";          // SyntaxError: Unexpected token 'if'
// let const = "invalid";       // SyntaxError: Unexpected token 'const'


// ------------------------------------------
// RULE 5: Are case-sensitive
// ------------------------------------------

let username = "lowercase";
let UserName = "mixed case";
let USERNAME = "uppercase";

console.log(username);   // "lowercase"
console.log(UserName);   // "mixed case"
console.log(USERNAME);   // "uppercase"


// ------------------------------------------
// RULE 6: Cannot contain spaces or special characters (except _ and $)
// ------------------------------------------

// let first name = "invalid";    // SyntaxError: Unexpected identifier
// let my-var = "invalid";        // SyntaxError: Unexpected token '-'
// let total@amount = "invalid";  // SyntaxError: Unexpected token '@'
// let price# = "invalid";        // SyntaxError: Unexpected token '#'
// let a+b = "invalid";           // SyntaxError: Unexpected token '+'


// ------------------------------------------
// RULE 7: Can contain Unicode letters and Unicode escape sequences
// ------------------------------------------

let മലയാളം = "Unicode letters valid";  // Malayalam word
let русский = "Russian letters valid";
let 中文 = "Chinese characters valid";
let हिन्दी = "Hindi letters valid";
let café = "accents valid";
let naïve = "diaeresis valid";
let _unicode = "underscore prefix valid";


// ------------------------------------------
// RULE 8: Have no specified length limit
// ------------------------------------------

let a = "short";
let thisIsAVeryLongIdentifierNameThatIsStillCompletelyValidInJavaScriptAndCanBeAsLongAsYouWantWithoutAnyPracticalLimitImposedByTheLanguageSpecification = "very long but valid";
let abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789 = "also valid";


// ==========================================
// SUMMARY OF VALID AND INVALID EXAMPLES
// ==========================================

// VALID IDENTIFIERS:
let valid;
let Valid;
let _valid;
let $valid;
let valid123;
let valid_123;
let valid$123;
let v;
let veryLongName;
let മലയാളം;

// INVALID IDENTIFIERS (uncomment to see errors):
// let 123invalid;
// let my-name;
// let my name;
// let my@name;
// let let;
// let class;
// let return;
