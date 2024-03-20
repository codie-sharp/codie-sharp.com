import '../src/app/style.css'
import { Canvas } from '@react-three/fiber'
import PortalScene from '../src/app/portal-scene'


export default function Index() {
    return <div id='portal-scene'>
        <Canvas
            flat
            camera={{
                fov: 45,
                near: 0.1,
                far: 50,
                position: [1, 2, 6]
            }}
        >
            <PortalScene />
        </Canvas>
    </div>
}