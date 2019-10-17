import { ContentData } from "../../_data/Data";

export const printContent = (contentData: ContentData) => {
	console.log(JSON.stringify(contentData, null, 2));
}