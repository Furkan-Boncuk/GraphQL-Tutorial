const argument = process.argv.slice(2)*1;

const pi = Math.PI;

const dairedeAlanBul = (yari_cap) => {
    return pi*yari_cap*yari_cap
}

const ekranaYazdir = (r) => {
    const alan = dairedeAlanBul(r);

    return "Yarıçapı "+r+" olan dairenin alanı: "+alan
}

console.log(ekranaYazdir(argument))
