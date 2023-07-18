const permutator = (inputArr) => {
    let result = [];

    const permute = (arr, m = []) => {
        if (arr.length === 0) {
            result.push(m)
        } else {
            for (let i = 0; i < arr.length; i++) {
                let curr = arr.slice();
                let next = curr.splice(i, 1);
                permute(curr.slice(), m.concat(next))
            }
        }
    }

    permute(inputArr)

    return result;
}

let examples = new Set();
const magicNumber = 9;
const lowBound = 1;
const uppBound = 10;
for(mult = lowBound;mult < uppBound;mult++) {
    const prod = magicNumber * mult;
    const prodAsString = "" + prod;
    if (prodAsString.indexOf("9") >= 0) {
        const digits = prodAsString
            .replace("9", "0")
            .split("");
        const permutations = permutator(digits);
        const tested = new Set();
        for(i = 0;i < permutations.length;i++) {
            const test = permutations[i].join("");
            if (tested.has(test)) {
                continue;
            }
            else {
                tested.add(test);
            }
            const mult2 = test / magicNumber;
            if ((test % magicNumber) == 0 && mult2 < uppBound && mult2 >= lowBound) {
                console.log({mult, prod, test, mult2});
                examples.add(mult);
                examples.add(mult2);
            }
        }
    }
}
console.log(examples.size);