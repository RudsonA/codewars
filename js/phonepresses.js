// https://www.codewars.com/kata/54a2e93b22d236498400134b/train/javascript

function presses(phrase) {

    let total = 0;
    const keypad = {
        2: 4,
        3: 4,
        4: 4,
        5: 4,
        6: 4,
        8: 4,
        7: 5,
        9: 5,
        A: 1,
        B: 2,
        C: 3,
        D: 1,
        E: 2,
        F: 3,
        G: 1,
        H: 2,
        I: 3,
        J: 1,
        K: 2,
        L: 3,
        M: 1,
        N: 2,
        O: 3,
        P: 1,
        Q: 2,
        R: 3,
        S: 4,
        T: 1,
        U: 2,
        V: 3,
        W: 1,
        X: 2,
        Y: 3,
        Z: 4,
        a: 1,
        b: 2,
        c: 3,
        d: 1,
        e: 2,
        f: 3,
        g: 1,
        h: 2,
        i: 3,
        j: 1,
        k: 2,
        l: 3,
        m: 1,
        n: 2,
        o: 3,
        p: 1,
        q: 2,
        r: 3,
        s: 4,
        t: 1,
        u: 2,
        v: 3,
        w: 1,
        x: 2,
        y: 3,
        z: 4,
        0: 2,
        1: 1
    }
    console.log(phrase);

    for (let i = 0; i < phrase.length; i++) {
        const element = phrase[i];

        if (element == " ") {
            total += 1;
            continue;
        }
        total += keypad[element];
    }

    return total;

}