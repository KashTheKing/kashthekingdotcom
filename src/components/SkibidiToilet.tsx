import skibidiImage from "../assets/NormalToiletImage2.png";

interface Props {
    onSkibidiClick: () => void;
}

function SkibidiToilet({ onSkibidiClick }: Props) {
    return (
        <div className="d-flex justify-content-center">
            <img
                src={skibidiImage}
                draggable="false"
                onClick={onSkibidiClick}
            ></img>
        </div>
    );
}

export default SkibidiToilet;