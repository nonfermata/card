const validator = (data, config) => {
    const errors = {};
    const validate = (validateMethod, data, config) => {
        let statusValidate;
        switch (validateMethod) {
            case "isRequired":
                statusValidate = data.trim() === "";
                break;
            case "isYear":
                const currentDate = new Date();
                statusValidate =
                    Number(data) < 1900 ||
                    Number(data) >= currentDate.getFullYear() ||
                    isNaN(Number(data));
                break;
            case "isURL":
                const urlRegExp =  /^(https?:\/\/)?([\w\.]+)\.([a-z]{2,6}\.?)(\/[\w\.]*)*\/?$/g;
                statusValidate = !urlRegExp.test(data);
                break;
            default:
                break;
        }
        if (statusValidate) return config.message;
    };
    for (const fieldName in data) {
        for (const validateMethod in config[fieldName]) {
            const error = validate(
                validateMethod,
                data[fieldName],
                config[fieldName][validateMethod]
            );
            if (error && !errors[fieldName]) {
                errors[fieldName] = error;
            }
        }
    }
    return errors;
};

export default validator;
