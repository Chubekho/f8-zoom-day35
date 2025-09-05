import { useState } from "react";
import styles from "./Weather.module.scss";

const weatherData = {
    hanoi: { city: "Hà Nội", temp: 28, weather: "Nắng", humidity: 65 },
    hcm: { city: "TP.HCM", temp: 32, weather: "Có mây", humidity: 78 },
    danang: { city: "Đà Nẵng", temp: 30, weather: "Mưa nhẹ", humidity: 82 },
};

// icon map theo tình trạng thời tiết
const weatherIcons = {
    "Nắng": "☀️",
    "Có mây": "⛅",
    "Mưa nhẹ": "🌧️",
};

function Weather() {
    const [selectedCity, setSelectedCity] = useState("hanoi");
    const [data, setData] = useState(weatherData);

    const handleChange = (e) => {
        setSelectedCity(e.target.value);
    };

    const handleRefresh = () => {
        setData((prev) => {
            const updated = { ...prev };
            const current = updated[selectedCity];

            const newTemp = Math.min(
                40,
                Math.max(0, current.temp + (Math.floor(Math.random() * 11) - 5))
            );

            const newHumidity = Math.min(
                100,
                Math.max(0, current.humidity + (Math.floor(Math.random() * 11) - 5))
            );

            updated[selectedCity] = {
                ...current,
                temp: newTemp,
                humidity: newHumidity,
            };

            return updated;
        });
    };

    const cityData = data[selectedCity];

    return (
        <div className={styles.app}>
            <h2>Thông tin thời tiết</h2>
            <select style={{ border: "1px solid #a19999ff" }} value={selectedCity} onChange={handleChange}>
                <option value="hanoi">Hà Nội</option>
                <option value="hcm">TP.HCM</option>
                <option value="danang">Đà Nẵng</option>
            </select>

            <div className={styles.card}>
                <h3>{cityData.city}</h3>
                <p>
                    Nhiệt độ: <b>{cityData.temp}°C</b>
                </p>
                <p>
                    Thời tiết:{" "}
                    <b>
                        {cityData.weather} {weatherIcons[cityData.weather]}
                    </b>
                </p>
                <p>
                    Độ ẩm: <b>{cityData.humidity}%</b>
                </p>
            </div>

            <button className={styles.btn} onClick={handleRefresh}>Làm mới</button>
        </div>
    );
}

export default Weather;
