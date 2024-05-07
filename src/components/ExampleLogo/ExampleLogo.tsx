import * as React from "react";
import { motion } from "framer-motion";
import "./ExampleLogo.scss";

const icon = {
    hidden: {
        opacity: 0,
        pathLength: 0,
        fill: "rgba(255, 2, 70, 0)",
    },
    visible: {
        opacity: 1,
        pathLength: 1,
        fill: "rgba(254, 107, 146 , 0.5)",
    },
};

export const ExampleLogo = () => (
    <div className="fm_container">
        <motion.svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" className="fm_item">
            <motion.path
                d="M 31.99 185.12 L 31.99 155.08 L 155.43 155.08 Q 183.76 155.08 199.95 161.69 Q 216.14 168.31 224.86 180.68 Q 233.58 193.06 233.58 207.85 Q 233.58 218.59 228.99 228.24 Q 224.39 237.89 215.75 245.28 Q 207.11 252.68 192.95 257.5 Q 208.2 261.4 216.3 266.07 Q 227.97 272.6 234.82 284.36 Q 241.67 296.11 241.67 310.59 Q 241.67 327.86 231.24 342.42 Q 220.81 356.97 201.74 364.6 Q 182.68 372.23 145.94 372.23 L 31.99 372.23 L 31.99 342.19 L 40.55 342.19 Q 49.12 342.19 52.15 340.71 Q 55.19 339.23 56.43 336.5 Q 57.68 333.78 57.68 324.28 L 57.68 203.18 Q 57.68 193.53 56.43 190.88 Q 55.19 188.23 52.15 186.68 Q 49.12 185.12 40.55 185.12 Z M 111.54 243.03 L 135.35 243.03 Q 154.03 243.03 162.98 239.91 Q 171.93 236.8 176.45 230.5 Q 180.96 224.19 180.96 215.94 Q 180.96 207.38 176.68 201.31 Q 172.4 195.24 164.31 192.67 Q 156.21 190.1 135.35 190.1 L 111.54 190.1 Z M 111.54 274.94 L 111.54 321.95 Q 111.69 331.91 112.32 333.62 Q 113.09 335.8 114.88 336.66 Q 116.67 337.52 124.61 337.52 L 140.49 337.52 Q 154.34 337.52 163.45 334.95 Q 172.56 332.38 178.94 324.28 Q 185.32 316.19 185.32 304.83 Q 185.32 295.18 180.81 288.48 Q 176.29 281.79 167.26 278.36 Q 158.24 274.94 139.71 274.94 Z M 422 155.08 L 440.68 227.93 L 411.73 236.18 Q 397.25 210.18 378.88 198.12 Q 360.51 186.05 339.81 186.05 Q 326.42 186.05 318.72 191.5 Q 311.01 196.95 311.01 203.64 Q 311.01 211.27 318.02 217.81 Q 324.87 224.35 343.24 229.49 L 384.95 241.63 Q 419.67 251.59 434.46 268.09 Q 449.09 284.75 449.09 306.85 Q 449.09 335.03 426.67 354.48 Q 401.61 375.96 364.41 375.96 Q 347.13 375.96 332.65 371.53 Q 318.17 367.09 302.45 356.66 L 295.6 372.23 L 272.41 372.23 L 257 288.01 L 286.11 281.01 Q 296.38 306.69 318.1 323.9 Q 339.81 341.1 365.81 341.1 Q 377.48 341.1 385.19 338.14 Q 392.89 335.18 396.78 329.89 Q 400.68 324.6 400.68 318.99 Q 400.68 309.65 391.65 302.96 Q 382.46 296.26 359.58 289.73 L 323.31 279.14 Q 315.06 276.81 300.97 270.35 Q 286.89 263.89 279.34 256.88 Q 271.79 249.88 266.81 238.9 Q 261.82 227.93 261.82 215.79 Q 261.82 198.51 271.4 183.95 Q 280.97 169.4 300.2 160.37 Q 319.42 151.34 342.77 151.34 Q 370.94 151.34 393.67 165.97 L 399.74 155.08 Z"
                variants={icon}
                transform="matrix(0.986292, -0.165009, 0.165009, 0.986292, -39.494732, 43.111088)"
                initial="hidden"
                animate="visible"
                transition={{
                    default: { duration: 5, ease: "easeInOut" },
                    fill: { duration: 5, ease: [1, 0, 0.8, 1] },
                }}
            />
        </motion.svg>
    </div>
);
