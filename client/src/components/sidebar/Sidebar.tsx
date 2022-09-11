import React from "react";
import { ChildCategory } from "../../interfaces/models/ChildCategory";
import {
	Wrapper,
	Bottom,
	TopLeft,
	UnorderedList,
	LinkItem,
	NotFoundItem,
} from "./Styles";

interface Props {
	categories?: ChildCategory[];
}

function Sidebar(props: Props) {
	const { categories } = props;
	return (
		<Wrapper>
			<TopLeft>
				<h3>Kategorien</h3>
			</TopLeft>
			<Bottom>
				<UnorderedList>
					{categories?.length ? (
						categories?.map((category: any) => {
							return (
								<LinkItem key={category.urlPath} href={category.urlPath}>
									{category.name}
								</LinkItem>
							);
						})
					) : (
						<NotFoundItem>Items not found</NotFoundItem>
					)}
				</UnorderedList>
			</Bottom>
		</Wrapper>
	);
}

export default Sidebar;
