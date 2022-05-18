import { Button } from '@mui/material'
import React from 'react'

export default function ButtonComp(props) {
    const { color, text } = props
    return (
        <div>
            <Button
                style={{
                    color: `${color}`,
                    border: `1px solid ${color}`,
                    maxWidth: '150px',
                    height: '40px',
                    borderRadius: '8px',
                    padding: '1rem 1rem',
                }}
            >
                {text}
            </Button>
        </div>
    )
}
