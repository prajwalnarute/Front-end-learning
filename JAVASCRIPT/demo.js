function resolveAfter2Seconds() {
    return new Promise((resolve1) => {
      setTimeout(() => {
        resolve1('resolved');
      }, 2000);
    });
  }
  
  async function asyncCall() {
    console.log('calling');
    const result = await resolveAfter2Seconds();
    console.log(result);
    // Expected output: "resolved"
  }
  
  asyncCall();
  