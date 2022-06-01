import { useEffect, useState } from "react";
export default function AndBias() {
  const inputSquence = [
    [0, 0],
    [0, 1],
    [1, 0],
    [1, 1],
  ];
  const target = [0, 0, 0, 1];
  var w = [-0.3, 0.5, -0.4];
  var output = [];
  var b = 1;

  function newW(W, r, e, x) {
    return W + r * e * x;
  }

  function newB(B, r, e) {
    return B + r * e;
  }

  let loop = true;
  let epoch = 0;

  useEffect(() => {
    while (loop !== false && epoch <= 10) {
      epoch++;
      loop = false;
      for (let i = 0; i < inputSquence.length; i++) {
        let temp = 0;
        temp = b * w[0];
        for (let j = 0; j < 2; j++) {
          temp = temp + inputSquence[i][j] * w[j + 1];
        }

        let o;

        if (temp <= 0) {
          o = 0;
        } else {
          o = 1;
        }

        output.push(o);
        if (o !== target[i]) {
          loop = true;
          let e = target[i] - o;
          let r = 1;
          let newW1 = newW(w[0], r, e, b);
          let newW2 = newW(w[1], r, e, inputSquence[i][0]);
          let newW3 = newW(w[2], r, e, inputSquence[i][1]);
          let nB = newB(b, r, e);
          w = [newW1, newW2, newW3];
          b = nB;
        }
      }
    }
  }, []);

  console.log(output);
  return <h1>And Bias</h1>;
}
