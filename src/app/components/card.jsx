import React from "react";
import { Link } from "react-router-dom";
import getAge from "../utils/getAge";

const Card = () => {
    const data = JSON.parse(localStorage.getItem("student"));
    const age = getAge(data);
    return (
        <div>
            <h2>Карточка студента</h2>
            {data ? (
                <div className="my-4">
                    <p>
                        <strong>Имя:</strong> {data.name}
                    </p>
                    <p>
                        <strong>Фамилия:</strong> {data.surname}
                    </p>
                    <p>
                        <strong>Год рождения:</strong>{" "}
                        {data.year + " (" + age.number + " " + age.string + ")"}
                    </p>
                    <p>
                        <strong>Портфолио:</strong> {data.portfolio}
                    </p>
                </div>
            ) : (
                <p>Нет данных</p>
            )}
            <Link to="/edit">
                <button className="btn btn-primary mt-2">
                    {data ? "Редактировать" : "Добавить"}
                </button>
            </Link>
        </div>
    );
};

export default Card;
