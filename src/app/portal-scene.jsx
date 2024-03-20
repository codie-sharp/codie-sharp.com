import { Center, useTexture, useGLTF, OrbitControls } from '@react-three/drei'

export default function PortalScene() {
    const { nodes } = useGLTF('./model/portal-red.glb')
    const bakedTexture = useTexture('./model/baked128.jpg')
    bakedTexture.flipY = false

    return <>
        <OrbitControls makeDefault />

        <Center>
            <mesh geometry={ nodes.baked.geometry }>
                <meshBasicMaterial map={ bakedTexture } />
            </mesh>
        </Center>
    </>
}