import { OrbitControls } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
// import { useControls } from 'leva'
// import { Perf } from 'r3f-perf'
import React, { useRef } from 'react'

const Experience = () => {

    const cube = useRef()

    // const { showPerf } = useControls('Performance', {
    //     showPerf: true
    // })

    // const { cubeWireFrame } = useControls('Cube', {
    //     cubeWireFrame: false,
    // })

    useFrame((state, delta) => {
        cube.current.rotation.y += delta
        // console.log(delta)
    })

    return (
        <>
            {/* { showPerf &&  <Perf position="top-left" /> } */}

            <OrbitControls makeDefault />

            <mesh ref={ cube }>
                <boxGeometry />
                {/* <meshNormalMaterial wireframe={ cubeWireFrame } /> */}
                <meshNormalMaterial wireframe={ false } />
            </mesh>
        </>
  )
}

export default Experience