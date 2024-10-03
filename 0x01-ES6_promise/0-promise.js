function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    // Simulate API call success or failure
    const success = true; // Change to false to simulate failure

    if (success) {
      resolve("Success!"); // Promise resolved
    } else {
      reject("Failed!");   // Promise rejected
    }
  });
}
