const domainName = (url) => url.replace(/^(https?:\/\/)?(www.)?([^.]+)\..*$/, '$3');
console.log(domainName('http://google.com:80'));
