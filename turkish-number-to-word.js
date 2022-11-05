function toWords(s) {
	s = parseFloat(s);
	var bir = ['sıfır', 'bir', 'iki', 'üç', 'dört', 'beş', 'altı', 'yedi', 'sekiz', 'dokuz'];
	var on = ['on', 'yirmi', 'otuz', 'kırk', 'elli', 'altmış', 'yetmiş', 'seksen', 'doksan'];
	var nth = ['', 'bin', 'milyon', 'milyar', 'trilyon'];
  	var str = String(s);
  	var len = str.length;

  	if(len == 1){
  		return bir[s];
  	}

  	var results = [];
  	var perThird = [];
  	for(var i = 0; i < len; i++){
  		per = parseInt(i/3);
  		if(i%3 == 0){
  			perThird.push([]);
  		}
  		perThird[per].push(str[len-i-1]);
  	}
  	
  	for(var i in perThird){
  		var result = [];
  		var arr = perThird[i];
  		if(arr[0]){
  			result.push(bir[arr[0]]);
  		}

  		if(arr[1]){
  			result.push(on[arr[1]-1]);
  		}

  		if(arr[2]){
  			result.push((arr[2] == 1 ? '' : bir[arr[2]] + " ") + "yüz"); //bir yüz fix
  		}

  		results.push(result.reverse().join(' ') + (i > 0 ? (" " + nth[i]) : ''));
  	}
  	return results.reverse().join(' ');
}
