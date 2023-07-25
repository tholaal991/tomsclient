import {BrowserView, MobileView, isBrowser, isMobile} from 'react-device-detect'


export const  DeviceDetect =()=> {



    return (
    <>
    
     <BrowserView>
                    This is a browser
        </BrowserView>

        <MobileView>
              this is a mobile 
        </MobileView>
    
    
    </>
       
    )           
}