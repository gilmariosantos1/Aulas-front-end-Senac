const TemplateExpression = () => {
    const name = "Matheus";

    const data = {
        age: 31,
        job: "Programador",
    };

    return(
        <div className="App">
            <p>A soma é {2* 6}</p>
            <h3>Bem-vindo {name}</h3>
            <p>
                Sua idade é {data.age} você trabalha como {data.job}.
            </p>
        </div>
    )
};
export default TemplateExpression;