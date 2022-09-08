import React from "react";
import { TitleWrap } from "./Styles";

interface Props {
	title?: string;
	count?: number;
}

function ContentTitle(props: Props) {
	return (
		<TitleWrap>
			<h1>{props.title || ""}</h1>
			<p>{props.count ? `(${props.count})` : ""}</p>
		</TitleWrap>
	);
}

export default ContentTitle;
