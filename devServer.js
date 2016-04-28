'use strict';
const path = require('path');
const express = require('express');
const webpack = require('webpack');
const config = require('./webpack.config.dev');

const app = express();
const compiler = webpack(config);

/**
****
*****THIS SHOULD BE IN SEPERATE FILE
*****
***
**/

/** Builds trie data structure
  trie = {
    6: {
      2: {
        7: {
          end: ['map', 'nap']
      }
    }
  }
}
*/
function buildTrie(words) {
  	let trie = {}

  	for (let i = 0; i < words.length; i++) {
  		//initially set node to root for each word
  		var node = trie
  		for (let j = 0; j < words[i].length; j++) {
  			//if there is no node for letter make one
  			//and go down to next level
  			if (node[letterToKey(words[i][j])] === undefined) {
  				node[letterToKey(words[i][j])] = {}
  			}
  			//if end of word is reached set add to word possible words
  			//and go down one level
  			if (j === words[i].length - 1) {
  				if (node[letterToKey(words[i][j])].end == undefined) {
  					node = node[letterToKey(words[i][j])].end = [words[i]]
  				} else {
  					node = node[letterToKey(words[i][j])].end.push(words[i])
  				}
  			}
  			//else go to next level of trie
  			else {
  				node = node[letterToKey(words[i][j])]
  			}
  		}
  	}

  	return trie
}

function letterToKey(letter) {
	let map = {
		a: 2,
		b: 2,
		c: 2,
		d: 3,
		e: 3,
		f: 3,
		g: 4,
		h: 4,
		i: 4,
		j: 5,
		k: 5,
		l: 5,
		m: 6,
		n: 6,
		o: 6,
		p: 7,
		q: 7,
		r: 7,
		s: 7,
		t: 8,
		u: 8,
		v: 8,
		w: 9,
		x: 9,
		y: 9,
		z: 9
	}

	return map[letter];
}

function getWords(digits, trie) {
	//initialize node to root
	let node = trie
	//for each digit get node
	for (let i = 0; i < digits.length; i++) {
		node = node[digits[i]]

		if (i == digits.length - 1 && node.end !== undefined) {
			return node.end
		}
	}

	return []
}


let lineReader = require('readline').createInterface({
  input: require('fs').createReadStream('dictionary.txt')
});

let words = [];
lineReader.on('line', function (line) {
  words.push(line);
});
let trie

lineReader.on('close', function() {
  trie = buildTrie(words);
  console.log(trie);
})

/** Continue APP STUFF **/
app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/t9/:digits', function(req, res, next) {
  res.json(getWords(req.params.digits, trie));
});

app.listen(3000, 'localhost', (err) => {
  if (err) {
    console.log(err);
    return;
  }

  console.log('Listening at http://localhost:3000');
});
