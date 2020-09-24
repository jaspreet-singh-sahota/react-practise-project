import React, { forwardRef } from 'react'
import Tooltip from '@tippy.js/react'
import 'tippy.js/dist/tippy.css'

const ComponentTooltip = () => {
  return (
    <span style={{ color: 'orange' }}>Colored</span>
  )
}

const ComponentText = forwardRef((props, ref) => {
  return (
    <div ref={ref}>
      <div>Colored</div>
      <div>random</div>
      <div>Testing</div>
    </div>
  )
})

const ToolTipExpample = () => {
  return (
    <div>
      <div style={{ paddingTop: '50px' }}>
        <Tooltip delay={1000} placement="left" arrow={false} content="HEllo world">
          <button>Hover</button>
        </Tooltip>
      </div>
      <div style={{ paddingTop: '100px' }}>
        <Tooltip content={<ComponentTooltip></ComponentTooltip>}>
          <ComponentText>Hover</ComponentText>
        </Tooltip>
      </div>
    </div>
  )
}

export default ToolTipExpample
