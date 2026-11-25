import './Power.css';

function Power() {
    function calculate() {
        let base = document.getElementById('power-base').value;
        let exp = document.getElementById('power-exp').value;
        let result = base ** exp;

        document.getElementById('power-result').innerText = 'Ответ: ' + result;
    }

    return (
        <div className="power">
            <h2>Возведение в степень</h2>
            <input id="power-base" type="number" defaultValue="2" onChange={calculate} placeholder="Число" />
            <input id="power-exp" type="number" defaultValue="3" onChange={calculate} placeholder="Степень" />
            <p id="power-result">Ответ: 8</p>
        </div>
    );
}

export default Power;
