import React from 'react'

function Alert(props) {
    // Convert the first letter of the "successs"
    const capitalize=(word)=>{
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
  return (
    // div style is used fix the layout sizing
    <div style={{height:"50px"}}>
       {/* //backticks are used interplotaion-(interploation means replacing placeholders with the values) */}
        {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
        <strong>{capitalize(props.alert.type)}</strong>:{props.alert.msg}
        

</div>}
  
</div>
    
  )
}

export default Alert