import { Canvas } from '@react-three/fiber'
import PortalRed from '@/portal-red'


export default function ModelViewer() {
    return <div id='model-viewer'>
        <Canvas flat
            camera={{fov: 45, near: 0.1, far: 50, position: [1,2,6]}}
        >
            <PortalRed />
        </Canvas>
    </div>
}