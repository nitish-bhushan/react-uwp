import * as React from "react";

import { ThemeType } from "react-uwp/style/ThemeType";
import addArrayEvent from "../../common/addArrayEvent";
import setStyleToElement from "../../common/setStyleToElement";

let theme: ThemeType;

import * as styles from "./index.scss";
const defaultProps: ButtonProps = __DEV__ ? require("./devDefaultProps").default : {};

interface EventHanlder {
	(e?: React.SyntheticEvent<HTMLButtonElement>): void;
}
interface DataProps {
	borderSize?: string;
}
interface ButtonProps extends DataProps, React.HTMLAttributes<HTMLButtonElement> {}
interface ButtonState {}
export default class Button extends React.Component<ButtonProps, ButtonState> {
	static defaultProps: ButtonProps = {
		...defaultProps,
		className: "",
		borderSize: "2px"
	};
	state: ButtonState = {};
	static contextTypes = { theme: React.PropTypes.object };
	refs: { container: HTMLButtonElement };

	componentDidMount() {
		addArrayEvent(this.refs.container, ["click", "mousedown", "mouseenter", "touchstart"], this.clickOrMouseEnterHandler);
		addArrayEvent(this.refs.container, ["mouseup", "mouseleave", "touchend"], this.mouseLeaveOrUpHandler);
	}

	clickOrMouseEnterHandler: EventHanlder = (e) => {
		setStyleToElement(e.currentTarget, { border: `${this.props.borderSize} solid ${theme.baseMediumLow}` });
	}

	mouseLeaveOrUpHandler: EventHanlder = (e) => {
		setStyleToElement(e.currentTarget, { border: `${this.props.borderSize} solid transparent` });
	}

	render() {
		const {
			borderSize, className,  children,
			...attributes
		} = this.props;
		theme = this.context.theme;

		return (
			<button
				ref="container"
				{...attributes}
				className={`${styles.c} ${className}`}
				style={{
					background: theme.baseLow,
					color: theme.baseMediumHigh,
					padding: "5px 20px",
					...attributes.style,
					border: `${borderSize} solid transparent`
				}}
			>
				{children}
			</button>
		);
	}
}
