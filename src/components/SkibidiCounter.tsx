import skibidiImage from "../assets/NormalToiletImage2.png";

interface Props {
    skibidis: number;
}

function SkibidiCounter({ skibidis }: Props) {
    return (
        <div className="d-flex justify-content-center">
            <h2>{skibidis}</h2>
        </div>
    );
}

export default SkibidiCounter;