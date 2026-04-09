function checkPrime() {
    const num = parseInt(document.getElementById("number").value);
    const result = document.getElementById("result");

    if (isNaN(num)) {
        result.textContent = "Please enter a valid number.";
        return;
    }

    if (num <= 1) {
        result.textContent = num + " is not a prime number.";
        return;
    }

    let isPrime = true;

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        result.textContent = num + " is a PRIME number.";
    } else {
        result.textContent = num + " is NOT a prime number.";
    }
}
