type TestProps = {
    value?: string;
}
const Test = ({ value }: TestProps) => {
    console.log('PACKAGE12');
    console.log(value, 'value');

    return (
        <div className="App">
            <h1>ab {value} asfasfasfasdasdas
            </h1>
        </div>
    )
}

export default Test;
