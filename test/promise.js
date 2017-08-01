/**
 * Created by beck.zhang on 6/16/2017.
 */
"use strict"

function a() {
  return new Promise((resolve, reject) => {
    setInterval(() => {
      setInterval(() => {
        let i = 1;
        console.log(`promise1----->${i}`);
        resolve(i);
      }, 1000);
      console.log(`promise2----->${2}`);
    }, 1000);
  })
}

a().then((arg) => {
  console.log(`then---->${arg}`)
});

