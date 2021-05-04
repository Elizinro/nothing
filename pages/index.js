import {useState} from 'react';
function Home() {
    return (
        <div>
            <h1>Home</h1>
            <Cancer />
        </div>
    )
}
function Cancer() {
    const [cancer,setCancer] = useState(1);

    function adicionarCancer() {
        setCancer(cancer + cancer*2);
    }
    return (
        <div>
            <div>{cancer}</div>
            <button onClick={adicionarCancer}>Adicionar</button>
        </div>
    )
}

export default Home