import React from 'react';
import './App.css';
import {useForm} from 'react-hook-form';
import FruitCounter from "./components/FruitCounter";
import LabelAndInput from "./components/LabelAndInput";

function App() {

    // Destructuring register and handleSubmit functions from useForm
    const {register, handleSubmit} = useForm();

    // Handle data from fruitcounter and order form
    function onFormSubmit(data) {
        console.log(`
        Persoonsgegevens:\nVoornaam: ${data['first-name']}\nAchternaam: ${data['last-name']}\nLeeftijd: ${data.age}\nPostcode: ${data.zipcode}\nBezorgfrequentie: ${data['deliver-frequency']}\nBezorgmoment: ${data['deliver-moment']}\nOpmerking: ${data.comments}\nAkkoord met de voorwaarden: ${data['terms-and-conditions']}
        `
        );
        console.log(`
            Bestelling:\n${count.strawberry} aardbeien\n${count.banana} bananen\n${count.banana} appels\n${count.kiwi} kiwi's
        `
        );
    }

    // Set state for multiple inputs
    const [count, setCount] = React.useState({
        strawberry: 0,
        banana: 0,
        apple: 0,
        kiwi: 0,
    })

    // Do calculations when buttons get pressed
    function handleFruitChange(e) {
        if (e.target.id === "add") {
            setCount({
                ...count,
                [e.target.name]: count[e.target.name] + 1,
            });
        }
        if (e.target.id === "subtract") {
            setCount({
                ...count,
                [e.target.name]: count[e.target.name] - 1,
            });
        }
    }

    return (
        <>
            <h1>Fruitmand bezorgservice</h1>
            <h2>Stel uw bestelling samen</h2>

            <FruitCounter
                fruitName="🍓 Aardbeien"
                objectKey="strawberry"
                counter={count.strawberry}
                handleFruitChange={handleFruitChange}
            />
            <FruitCounter
                fruitName="🍌 Bananen"
                objectKey="banana"
                counter={count.banana}
                handleFruitChange={handleFruitChange}
            />
            <FruitCounter
                fruitName="🍏 Appels"
                objectKey="apple"
                counter={count.apple}
                handleFruitChange={handleFruitChange}
            />
            <FruitCounter
                fruitName="🥝 Kiwi's"
                objectKey="kiwi"
                counter={count.kiwi}
                handleFruitChange={handleFruitChange}
            />
            <button
                id="reset-button"
                type="button"
                onClick={() => {
                    setCount({
                        strawberry: 0,
                        banana: 0,
                        apple: 0,
                        kiwi: 0,
                    })
                }}
            >
                Reset
            </button>

            <h2>Plaats uw bestelling</h2>
            <form onSubmit={handleSubmit(onFormSubmit)}>
                <LabelAndInput
                    id="first-name"
                    name="first-name"
                    type="text"
                    text="Voornaam"
                    register={register}
                />
                <LabelAndInput
                    id="last-name"
                    name="last-name"
                    type="text"
                    text="Achternaam"
                    register={register}
                />
                <LabelAndInput
                    id="age"
                    name="age"
                    type="text"
                    text="Leeftijd"
                    register={register}
                />
                <LabelAndInput
                    id="zipcode"
                    name="zipcode"
                    type="text"
                    text="Postcode"
                    register={register}
                />

                <p>Bezorgfrequentie</p>

                <select {...register("deliver-frequency")} >
                    <option value="every-week">Elke week</option>
                    <option value="alternately">Om de week</option>
                    <option value="every-month">Elke maand</option>
                </select>

                <div className="radio-button-container">
                    <LabelAndInput
                        id="daytime"
                        name="deliver-moment"
                        type="radio"
                        text="Overdag"
                        value="daytime"
                        checked={true}
                        register={register}
                    />
                    <LabelAndInput
                        id="nighttime"
                        name="deliver-moment"
                        type="radio"
                        text="'s Avonds"
                        value="nighttime"
                        register={register}
                    />
                </div>

                <label
                    id="textfield-label"
                    htmlFor="textfield"
                >
                    Opmerking
                </label>

                <textarea
                    id="textfield"
                    cols="30"
                    rows="5"
                    {...register("comments")}
                />

                <LabelAndInput
                    id="terms-and-conditions"
                    name="terms-and-conditions"
                    type="checkbox"
                    text="Ik ga akkoord met de voorwaarden"
                    register={register}
                />

                <button
                    type="submit"
                >
                    Verzend
                </button>

            </form>
        </>
    );
}

export default App;