import { useParams } from "react-router-dom";
import "./_products_Id_Unique.scss";

export const Products_Id_Unique = () => {
    let { id, unique } = useParams();
    return (
        <>
            <h1>aaaaaaa</h1>
            <h1>aaaaaaa</h1>
            <h1>aaaaaaa</h1>
            <h1>Welcome to {id} and specificaly {unique}</h1>
        </>
    )
}