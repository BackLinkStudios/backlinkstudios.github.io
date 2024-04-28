"use client";

// import React, { Component } from "react";
// import handleViewport from "react-in-viewport";

// class MySectionBlock extends Component<any> {
//     getStyle() {
//         const { inViewport, enterCount } = this.props;
//         //Fade in only the first time we enter the viewport
//         if (inViewport && enterCount === 1) {
//             return { WebkitTransition: "opacity 0.75s ease-in-out" };
//         } else if (!inViewport && enterCount < 1) {
//             return { WebkitTransition: "none", opacity: "0" };
//         } else {
//             return {};
//         }
//     }

//     render() {
//         const { enterCount, leaveCount } = this.props;
//         return (
//             <section>
//                 <div className="content" style={this.getStyle()}>
//                     <h1>Hello</h1>
//                     <p>{`Enter viewport: ${enterCount} times`}</p>
//                     <p>{`Leave viewport: ${leaveCount} times`}</p>
//                 </div>
//             </section>
//         );
//     }
// }
// const MySection = handleViewport(MySectionBlock, { rootMargin: "-1.0px" });

// export default MySection;

///-------------------------------------------------------------------------------------------

import handleViewport, { type InjectedViewportProps } from "react-in-viewport";

export const MySection = handleViewport(
    (props: InjectedViewportProps<HTMLDivElement>) => {
        const { inViewport, forwardedRef } = props;
        const color = inViewport ? "#217ac0" : "#ff9800";
        const text = inViewport ? "In viewport" : "Not in viewport";

        function getStyle() {
            const { inViewport, enterCount } = props;
            //Fade in only the first time we enter the viewport
            if (inViewport && enterCount === 1) {
                return { WebkitTransition: "opacity 0.75s ease-in-out" };
            } else if (!inViewport && enterCount < 1) {
                return { WebkitTransition: "none", opacity: "0" };
            } else {
                return {};
            }
        }
        return (
            <div className="viewport-block" ref={forwardedRef} style={getStyle()}>
                <h3>{text}</h3>
                <div style={{ width: "400px", height: "300px", background: color }} />
            </div>
        );
    } /**, options: {}, config: {} **/
);
