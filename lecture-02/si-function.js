function simpleInterest(p, r, t) {
  const si = (p * r * t) / 100;
  return si;
}

const interest = simpleInterest(1000, 8, 2);
console.log("Simple Interest", interest);
