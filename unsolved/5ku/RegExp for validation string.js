const reg = /^name:([A-Za-z]+)|skill:([[A-Za-z]+)|age:[0-9]+$/i;
console.log(reg.test('name:xxx,age:111,skill:xxx'));
