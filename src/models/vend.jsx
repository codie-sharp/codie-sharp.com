import { PerspectiveCamera, Center, useGLTF, OrbitControls, Environment, useAnimations } from '@react-three/drei'
import { useEffect } from 'react'

export default function Vend() {
  const { scene, animations } = useGLTF('models/vend/vend.glb')
  const { actions } = useAnimations(animations, scene)

  useEffect(() => {
    actions['baked-a1'].play()
  })

    return <>
        <OrbitControls makeDefault />
        <PerspectiveCamera makeDefault fov={45} position={[3, 3, 10]} />

        <Center>
        <Environment preset='city' />
        <primitive object={scene} 
            onClick={(event) =>{
                console.log('hello')
                event.stopPropagation()
            }}/>
        </Center>
    </>
}
