import React from "react";
import { ChildCategory } from "../../interfaces/models/ChildCategory";
import { Wrapper, Bottom, TopLeft, UnorderedList, LinkItem } from "./Styles";

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
					{categories?.map((category: any) => {
						return (
							<LinkItem key={category.urlPath} href={category.urlPath}>
								{category.name}
							</LinkItem>
						);
					})}
				</UnorderedList>
			</Bottom>
		</Wrapper>
	);
}

export default Sidebar;
