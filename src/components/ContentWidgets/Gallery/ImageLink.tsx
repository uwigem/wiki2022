import React, { useState } from 'react'

export type ImageLinkProps = {
    value?: string
    onUpdate: (val: string) => void
}

export default function ImageLink({ value, onUpdate }: ImageLinkProps) {
    const [text, setText] = useState(value || "")

    return (
        <>
            <input
                type="text"
                value={text}
                onChange={e => setText(e.target.value as string)}/>
            <button onClick={() => onUpdate(text)} disabled={value === text}>Update</button>
        </>
    )
}