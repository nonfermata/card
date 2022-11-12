import React, { useState, useEffect } from "react";
import validator from "../utils/validator";
import TextField from "./common/form/textField";
import { Link, useHistory } from "react-router-dom";

const Edit = () => {
    const history = useHistory();
    const dataInitialState = {
        name: "",
        surname: "",
        year: "",
        portfolio: ""
    };
    const [data, setData] = useState(
        localStorage.getItem("student")
            ? JSON.parse(localStorage.getItem("student"))
            : dataInitialState
    );
    const [errors, setErrors] = useState({});

    const handleChange = (name, value) => {
        setData((prevState) => ({
            ...prevState,
            [name]: value
        }));
    };

    const validatorConfig = {
        name: {
            isRequired: {
                message: `Поле 'Имя' обязательно для заполнения`
            }
        },
        surname: {
            isRequired: {
                message: `Поле 'Фамилия' обязательно для заполнения`
            }
        },
        year: {
            isRequired: {
                message: `Поле 'Год рождения' обязательно для заполнения`
            },
            isYear: {
                message: `Поле 'Год рождения' некорректно`
            }
        },
        portfolio: {
            isRequired: {
                message: `Поле 'Портфолио' обязательно для заполнения`
            },
            isURL: {
                message: `Поле 'Портфолио' некорректно`
            }
        }
    };

    useEffect(() => {
        validate();
    }, [data]);

    const validate = () => {
        const errors = validator(data, validatorConfig);
        setErrors(errors);
        return Object.keys(errors).length === 0;
    };
    const isValid = Object.keys(errors).length === 0;

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!validate()) return;
        // formWrap.style.opacity = "0";
        localStorage.setItem("student", JSON.stringify(data));
        history.push("/card");
    };

    return (
        <div className="formWrap">
            <h3 className="mb-4">
                {localStorage.getItem("student") ? (
                    <>Редактировать</>
                ) : (
                    <>Создать</>
                )}
            </h3>
            <form onSubmit={handleSubmit}>
                <TextField
                    label="Имя"
                    name="name"
                    value={data.name}
                    onChange={handleChange}
                    error={errors.name}
                />
                <TextField
                    label="Фамилия"
                    name="surname"
                    value={data.surname}
                    onChange={handleChange}
                    error={errors.surname}
                />
                <TextField
                    label="Год рождения"
                    name="year"
                    value={data.year}
                    onChange={handleChange}
                    error={errors.year}
                />
                <TextField
                    label="Портфолио"
                    name="portfolio"
                    value={data.portfolio}
                    onChange={handleChange}
                    error={errors.portfolio}
                />
                {localStorage.getItem("student") && (
                    <Link to="/card">
                        <button className="btn btn-secondary me-2">
                            Назад
                        </button>
                    </Link>
                )}
                <button className="btn btn-primary" disabled={!isValid}>
                    {localStorage.getItem("student") ? (
                        <>Обновить</>
                    ) : (
                        <>Создать</>
                    )}
                </button>
            </form>
        </div>
    );
};

export default Edit;
