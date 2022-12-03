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
            <directionalLight position={ [ 1, 2, 3 ] } intensity={ 1.5 } />
            <ambientLight intensity={ 0.5 } />

            <mesh ref={cube}>
                <boxGeometry />
                {/* <meshNormalMaterial wireframe={ cubeWireFrame } /> */}
                <meshNormalMaterial wireframe={ false } />
            </mesh>

            <mesh rotation-x={- Math.PI * 0.5} position-y={ -1 }>
                <planeGeometry args={[10, 10]} />
                <meshStandardMaterial color="yellowgreen" />
            </mesh>

        </>
  )
}

export default Experience