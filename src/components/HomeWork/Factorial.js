import './Factorial.css';

function Factorial() {
    function calculate() {
        let n = document.getElementById('fact-input').value;
        let result = 1;

        for (let i = 1; i <= n; i++) {
            result = result * i;
        }

        document.getElementById('fact-result').innerText = 'Ответ: ' + result;
    }

    return (
        <div className="factorial">
            <h2>Факториал числа</h2>
            <input id="fact-input" type="number" defaultValue="5" onChange={calculate} />
            <p id="fact-result">Ответ: 120</p>
        </div>
    );
}

export default Factorial;
