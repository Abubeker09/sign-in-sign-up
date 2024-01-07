let z = document.getElementById('selectd');
let log = document.getElementById('login');
let reg = document.getElementById('registr');

function registr(){
  log.style.right = '400px';
  reg.style.left = '0px';
  z.style.left = '124px'
}

function login(){
  log.style.right = '0px';
  reg.style.left = '300px';
  z.style.left = '-1px'
}