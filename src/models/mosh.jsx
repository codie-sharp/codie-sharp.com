import { PerspectiveCamera, Center, useGLTF } from '@react-three/drei'

export default function Mosh() {
    const { nodes } = useGLTF('models/mosh/mosh.glb')
    console.log(nodes)

    return <>
        <PerspectiveCamera makeDefault fov={45} position={[3,3,10]}/>

        <Center>
        </Center>
    </>
}