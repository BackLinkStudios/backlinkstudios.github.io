"use client";
import { Component, ReactNode } from "react";
import "./Typer.scss";

/*
 * @link https://stackoverflow.com/questions/49886123/trying-to-create-a-typing-effect-on-reactjs
 */
export default class Typer extends Component<any, any> {
    constructor(props: any) {
        super(props);

        this.state = {
            text: "BS",
            isDeleting: false,
            loopNum: 0,
            typingSpeed: 130,
        };
    }
    componentDidMount() {
        this.handleType();
    }
    handleType = () => {
        const dataText = ["WELCOME TO THE WORLD", "THIS IS THE WEBSITE", "ITS A SEO SERVICE","TEXT"];
        const { isDeleting, loopNum, text, typingSpeed } = this.state;
        const i = loopNum % dataText.length;
        const fullText = dataText[i];

        this.setState({
            text: isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1),
            typingSpeed: isDeleting ? 50 : 130,
        });

        if (!isDeleting && text === fullText) {
            setTimeout(() => this.setState({ isDeleting: true }), 500);
        } else if (isDeleting && text === "") {
            this.setState({
                isDeleting: false,
                loopNum: loopNum + 1,
            });
        }

        setTimeout(this.handleType, typingSpeed);
    };

    render(): ReactNode {
        return (
            <>
                {this.state.text}
                <span id="cursor" />
            </>
        );
    }
}
