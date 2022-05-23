import { CFooter, CLink } from '@coreui/react'


function footer(){
    return(
    <CFooter position='fixed'>
        <div>
          <CLink href="/homepage" style={{textDecoration:'none'}} className="me-2">Home</CLink>
           <span> FSWD Badminton-Course</span>
        </div>
        <div>
        <span>Powered by</span>
            <CLink href="https://coreui.io" style={{textDecoration:'none'}} className="ms-2">CoreUI</CLink>
        </div>
</CFooter>
)
}


export default footer;