import { OrbitControls } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { Debug, RigidBody, Physics } from '@react-three/rapier'
// import { useControls } from 'leva'
import { Perf } from 'r3f-perf'
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
        // cube.current.rotation.y += delta
        // console.log(delta)
    })

    return (
        <>
            <Perf position="top-left" />
            {/* <color args={ ['#ff0000']} attach="background" /> */}

            <OrbitControls makeDefault />
            <directionalLight castShadow position={ [ 1, 2, 3 ] } intensity={ 1.5 } />
            <ambientLight intensity={ 0.5 } />

            <Physics>
                <Debug />

                {/* <RigidBody>
                    <mesh ref={cube} castShadow position-x={1} position-y={2} >
                        <boxGeometry args={[3,2,1]}/>
                        <meshStandardMaterial color="mediumpurple" wireframe={ false } />
                    </mesh>
                </RigidBody> */}

                <RigidBody colliders="trimesh">
                    <mesh castShadow rotation-x={Math.PI * 0.28} position-y={ 1.5 }>
                        <torusBufferGeometry args={[1, 0.3, 16, 32]} />
                        <meshStandardMaterial color="mediumpurple" />
                    </mesh>
                </RigidBody>

                <RigidBody colliders="ball">
                    <mesh castShadow position-x={0} position-y={ 4 }>
                        <sphereBufferGeometry args={[.8, 22, 22]} />
                        <meshStandardMaterial color="orange" />
                    </mesh>
                </RigidBody>

                <RigidBody type="fixed">
                    <mesh receiveShadow rotation-x={- Math.PI * 0.5} position-y={-1}>
                        <boxBufferGeometry args={[10, 10, 0.5]} />
                        <meshStandardMaterial color="yellowgreen" />
                    </mesh>
                </RigidBody>
            </Physics>
        </>
  )
}

export default Experience