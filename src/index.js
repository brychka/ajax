const elements = document.getElementsByTagName('span');
function xhr(method, url, func1, func2, num) {
  const res = new XMLHttpRequest();
  res.open(method, url, true);
  res.send();

  res.onload = function ok() {
    if (res.status === 200) {
      if (JSON.parse(res.responseText).status === 'ok') {
        func1(num);
      }
    }
  };
  res.onerror = function failed() {
    func2(num);
  };
}

function good(num) {
  elements[num].innerHTML = 'OK';
  elements[num].style.color = 'green';
  elements[num].style.fontWeight = 'bold';
}

function bad(num) {
  elements[num].innerHTML = 'Failed';
  elements[num].style.color = 'red';
  elements[num].style.fontWeight = 'bold';
}

xhr('GET', 'http://cors-test.appspot.com/test', good, bad, 0);
xhr('POST', 'http://cors-test.appspot.com/test', good, bad, 1);
xhr('WEIRD', 'http://cors-test.appspot.com/test', good, bad, 2);
