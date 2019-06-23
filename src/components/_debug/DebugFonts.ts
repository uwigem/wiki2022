// @ts-ignore
import FontFaceObserver from 'fontfaceobserver';

/**
 * Fonts will use the FontFaceObserver library to load the fonts in dynamically to the page. This 
 * was one of the easier ways I figured to do this. Ideally we would want to keep the fonts local
 * but getting it off google is alright too. If we want it to stay static, we could mess around 
 * with using `dangerouslySetInnerHTML` on a `style` tag, but that isn't ideal either. 
 */
export const DebugFonts = async () => {
    const link = document.createElement("link");
    link.href = "https://fonts.googleapis.com/css?family=Abel|Raleway:400,700";
    link.rel = "stylesheet";
    document.head.appendChild(link);

    const raleway = new FontFaceObserver("Raleway");
    const abel = new FontFaceObserver("Abel");

    try {
        await raleway.load();
        await abel.load();
    } catch (e) {
        console.log("Debug fonts received " + e + ". Don't worry about it");
    }
}
