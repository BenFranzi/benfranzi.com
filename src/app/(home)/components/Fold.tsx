import Frame from "./Frame";
import Picture from "./Picture";
import Image from "next/image";

export default function Fold() {
    return (
        <div className="bg-accent-primary">
            <div className="max-w-screen-2xl mx-auto flex items-center p-12 pb-52 sm:pr-24 gap-24 lg:gap-32 flex-col lg:flex-row">
                <Frame />
                <Picture />
            </div>
        </div>
    )
}