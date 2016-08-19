//import $ from 'jquery'
import "./css/main.scss"
//window.$=$

function Foo() {
    $('#nav').children().each(function (i, v){console.log(i, v)});
}

// ...

module.exports = Foo;