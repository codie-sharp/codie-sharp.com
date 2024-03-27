import { PerspectiveCamera, Center, useTexture, useGLTF, OrbitControls } from '@react-three/drei'

export default function PortalRed() {
    const { nodes } = useGLTF('models/portal-red/portal-red.glb')
    const bakedTexture = useTexture('models/portal-red/baked128.jpg')
    bakedTexture.flipY = false

    return <>
        <OrbitControls makeDefault />
        <PerspectiveCamera makeDefault fov={45} position={[3,3,10]}/>

        <Center>
            <mesh geometry={ nodes.baked.geometry }>
                <meshBasicMaterial map={ bakedTexture } />
            </mesh>
        </Center>
    </>
}