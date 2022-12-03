import { Canvas } from '@react-three/fiber'
// import { Leva } from 'leva'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Experience from './Experience'
import './style.css'



const root = createRoot(document.querySelector('#root'))


root.render(
    <StrictMode>
        {/* <Leva collapsed /> */}
        <Canvas
            // flat
            camera={{
            fov: 45,
            position: [-4, 3, 6]
            }}
        >
            <Experience />
        </Canvas>
    </StrictMode>
)