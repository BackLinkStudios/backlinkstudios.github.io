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
            text: "",
            isDeleting: false,
            loopNum: 0,
            typingSpeed: 130,
        };
    }
    componentDidMount() {
        this.handleType();
    }
    handleType = async () => {
        const dataText = ["BacklinkStudio", "Welcome To The World", "This is the website", "It's a seo service"];
        const { isDeleting, loopNum, text, typingSpeed } = this.state;
        const i = loopNum % dataText.length;
        const fullText = dataText[i];

        this.setState({
            text: isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1),
            typingSpeed: isDeleting ? 100 : 130,
        });

        if (!isDeleting && text === fullText) {
            await new Promise((resolve) => setTimeout(resolve, 2000));
            this.setState({ isDeleting: true });
        } else if (isDeleting && text === "") {
            await new Promise((resolve) => setTimeout(resolve, 500));
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
