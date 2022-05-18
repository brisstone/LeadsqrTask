import { Button } from '@mui/material'
import React from 'react'

export default function ApprovalButton(props) {
    const { color, text, bgColor } = props
    return (
        <div>
            <Button
                style={{
                    backgroundColor: `${bgColor}`,
                    color: `${color}`,
                    minWidth: '100px',
                    height: '40px',
                    borderRadius: '100px',
                    opacity: '',
                }}
            >
                {text}
            </Button>
        </div>
    )
}
