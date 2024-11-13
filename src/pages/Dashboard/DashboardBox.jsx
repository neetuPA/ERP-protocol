import { useEffect } from "react"

export const DashboardBox=(props)=>{

    return(
<>
<div className='dashboardBox' style={{
    background: `linear-gradient(90deg, ${props.color?.[0]} 0%, ${props.color?.[1]} 100%)`
}}>
    
    <div className='d-flex w-100'>
        <div className="col1">
            <h4 className='text-white'>Total Employee

            </h4>
            <span className="text-white">277</span>
            <div>
                <h6 className="text-white pt-12">Last Month</h6>
            </div>

        </div>
    </div>
    
     </div>
</>
    )
}