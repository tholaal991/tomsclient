import { BrowserView, MobileView } from "react-device-detect"
import { FTDBrowserForm } from "./Ftdmobile-browser"
import { FtdMobile } from "./Ftdform-mobile"



export const Ftdfrom = ()=>{


    return(
        <>
                <BrowserView>
                     <FTDBrowserForm/>
                </BrowserView>
                <MobileView>
                     <FtdMobile/>
                </MobileView>
        </>
    )
}