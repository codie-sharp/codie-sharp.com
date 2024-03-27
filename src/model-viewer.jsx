import { Canvas } from '@react-three/fiber'

export default function ModelViewer({ children }) {
  return <Canvas>
    { children }
  </Canvas>
}