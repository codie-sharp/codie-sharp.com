import { PerspectiveCamera, Center, useTexture, useGLTF, OrbitControls } from '@react-three/drei'

export default function PortalRed() {
    const { nodes } = useGLTF('portal-red.glb')
    const bakedTexture = useTexture('baked128.jpg')
    bakedTexture.flipY = false

    return <>
        <OrbitControls makeDefault />
        <PerspectiveCamera makeDefault fov={45} position={[3,3,9]}/>

        <Center>
            <mesh geometry={ nodes.baked.geometry }>
                <meshBasicMaterial map={ bakedTexture } />
            </mesh>
        </Center>
    </>
}