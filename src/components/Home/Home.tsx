import "./Home.scss";
import BgSvg from "./BgSvg";
import { FC, ReactElement } from "react";
// export default function Home() {
//     return (
//         <>
//             <div className="container _._mt-10">
//                 <h2 className="h2_text _._text-center">Get theTargeted andRelevant Traffic.</h2>
//             </div>
//             <BgSvg />
//         </>
//     );
// }

export const Home: FC<any> = (): ReactElement => {
    return (
        <>
            <div className="container _._mt-10">
                <h2 className="h2_text _._text-center">Get theTargeted andRelevant Traffic.</h2>
            </div>
            <BgSvg />
        </>
    );
};
