import './Fibonacci.css';

function Fibonacci() {
    function calculate() {
        let count = document.getElementById('fib-input').value;
        let sequence = [];
        let a = 0, b = 1;

        for (let i = 0; i < count; i++) {
            sequence.push(a);
            let next = a + b;
            a = b;
            b = next;
        }

        document.getElementById('fib-result').innerText = 'Ряд: ' + sequence.join(', ');
    }

    return (
        <div className="fibonacci">
            <h2>Числа Фибоначчи</h2>
            <input id="fib-input" type="number" defaultValue="7" min="1" onChange={calculate} />
            <p id="fib-result">Ряд: 0, 1, 1, 2, 3, 5, 8</p>
        </div>
    );
}

export default Fibonacci;
