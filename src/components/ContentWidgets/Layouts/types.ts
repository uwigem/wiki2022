import { WidgetTypes } from "../../ContentMapping/ContentMapping";
import { ContentSingularData } from "../../_data/ContentSingularData";

export type Widget = {
    type: WidgetTypes
    content: ContentSingularData
}