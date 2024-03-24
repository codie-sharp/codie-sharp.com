import { Canvas } from '@react-three/fiber'
import PortalRed from '../portal-red'

export default function ModelViewer() {
  return(
    <Canvas flat camera={{fov: 45, near: 0.1, far: 50, position: [1,2,6]}}>
        <color args={ [ '#030202' ] } attach="background" />
        <PortalRed />
    </Canvas>
  )
}