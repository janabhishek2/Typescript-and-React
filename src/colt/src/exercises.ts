const twoFer = (name: string = "you"): string => {
    return `One for ${name}, one for me`;
};

const ans1 = twoFer();
const ans2 = twoFer("Ram");

const isLeapYear = (year: number): boolean => {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

