import { useEffect, useState } from "react";
export default function Or() {
  const inputSquence = [
    [0, 0],
    [0, 1],
    [1, 0],
    [1, 1],
  ];
  const target = [0, 1, 1, 1];
  var w = [-0.3, 0.5];
  var output = [];

  function newW(W, r, e, x) {
    return W + r * e * x;
  }

  let loop = true;
  let epoch = 0;

  function tes(data) {
    let temp = 0;
    for (let j = 0; j < 2; j++) {
      temp = temp + data[j] * w[j];
    }

    if (temp <= 2) {
      return 0;
    } else {
      return 1;
    }
  }

  useEffect(() => {
    while (loop !== false && epoch <= 10) {
      epoch++;
      loop = false;
      for (let i = 0; i < inputSquence.length; i++) {
        let temp = 0;
        for (let j = 0; j < 2; j++) {
          temp = temp + inputSquence[i][j] * w[j];
        }

        let o;

        if (temp <= 2) {
          o = 0;
        } else {
          o = 1;
        }

        output.push(o);
        if (o !== target[i]) {
          loop = true;
          let e = target[i] - o;
          let r = 1;
          let newW1 = newW(w[0], r, e, inputSquence[i][0]);
          let newW2 = newW(w[1], r, e, inputSquence[i][1]);
          w = [newW1, newW2];
        }
      }
    }
    console.log(tes([0, 0]));
  }, []);

  console.log(output);
  return <h1>Or</h1>;
}
