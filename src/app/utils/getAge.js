const getAge = (data) => {
    if (!data) return null;
    else {
        const currentDate = new Date();
        const age = currentDate.getFullYear() - Number(data.year);
        let ageString = "лет";
        if (age % 10 === 1 && Math.floor((age / 10) % 10) !== 1) {
            ageString = "год";
        } else if (
            (age % 10 === 2 || age % 10 === 3 || age % 10 === 4) &&
            Math.floor((age / 10) % 10) !== 1
        ) {
            ageString = "года";
        }
        return {number: age, string: ageString} ;
    }
};

export default getAge;
