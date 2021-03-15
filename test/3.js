/* eslint-disable no-var */
/* eslint-disable vars-on-top */
/* eslint-disable no-loop-func */
/* eslint-disable no-func-assign */
/* eslint-disable no-shadow */
/* eslint-disable no-console */
/* eslint-disable no-unused-expressions */
/* eslint-disable-next-line no-var */

for (var i = 1; i <= 5; i += 1) {
  setTimeout(function timer() {
    console.log(i);
  }, i * 1000);
}
