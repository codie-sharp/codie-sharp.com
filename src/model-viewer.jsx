import { Canvas } from '@react-three/fiber'

export default function ModelViewer({ children }) {
  return <Canvas>
    <color args={ [ '#030202' ] } attach="background" />
    { children }
  </Canvas>
}