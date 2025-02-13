import * as THREE from 'three'
import { useEffect, useRef, useState, memo, Suspense } from 'react'
import { Canvas, useFrame, useThree, extend } from '@react-three/fiber'
import { Clouds, Cloud, Sky as SkyImpl, StatsGl } from "@react-three/drei"
import { useCursor, MeshPortalMaterial, CameraControls, Text, Preload, OrbitControls } from '@react-three/drei'
import { useRoute, useLocation } from 'wouter'
import { easing, geometry } from 'maath'

extend(geometry)



export const Home = () => (

  <Canvas  flat camera={{ fov: 75, position: [0, 0, 30] }} eventSource={document.getElementById('root')} eventPrefix="client">
  <color attach="background" args={['#f0f0f0']} />
  <Sky />
  {['01', '02', '03', '04', '05', '06', '07', '08'].map((id, index) => (
  <Frame
    key={id}
    id={id}
    name={`Name ${id}`}
    author="Omar Faruq Tawsif"
    bg={"#e4cdac"}
    position={[(index % 4) * 3 - 4.5, Math.floor(index / 4) * -3, 0]} // Positioning in a 2x4 grid
    width={2} height={1} // Adjust frame size
  />
))}

  <Rig />
  <Preload all />
</Canvas>

)


const Frame = memo(({ id, name, author, bg, width = 1, height = 1.61803398875, children, ...props }) => {
  const portal = useRef()
  const [, setLocation] = useLocation()
  const [, params] = useRoute('/item/:id')
  const [hovered, hover] = useState(false)
  useCursor(hovered)
  useFrame((state, dt) => easing.damp(portal.current, 'blend', params?.id === id ? 1 : 0, 0.2, dt))
  return (
    <group {...props}>
      <Text  fontSize={0.3} anchorY="top" anchorX="left" lineHeight={0.8} position={[-0.375, 0.715, 0.01]} material-toneMapped={false}>
        {name}
      </Text>
      <Text fontSize={0.1} anchorX="right" position={[0.4, -0.659, 0.01]} material-toneMapped={false}>
        /{id}
      </Text>
      <Text  fontSize={0.04} anchorX="right" position={[0.0, -0.677, 0.01]} material-toneMapped={false}>
        {author}
      </Text>
      <mesh name={id} onDoubleClick={(e) => (e.stopPropagation(), setLocation('/item/' + e.object.name))} onPointerOver={(e) => hover(true)} onPointerOut={() => hover(false)}>
        <roundedPlaneGeometry args={[width, height, 0.1]} />
        <MeshPortalMaterial ref={portal} events={params?.id === id} side={THREE.DoubleSide}>
          <color attach="background" args={[bg]} />
          {children}
        </MeshPortalMaterial>
      </mesh>
    </group>
  )
})


function Rig({ position = new THREE.Vector3(0, 0, 2), focus = new THREE.Vector3(0, 0, 0) }) {
  const { controls, scene } = useThree()
  const [, params] = useRoute('/item/:id')
  useEffect(() => {
    const active = scene.getObjectByName(params?.id)
    if (active) {
      active.parent.localToWorld(position.set(0, 0.5, 0.25))
      active.parent.localToWorld(focus.set(0, 0, -2))
    }
    controls?.setLookAt(...position.toArray(), ...focus.toArray(), true)
  })
  return <CameraControls makeDefault minPolarAngle={0} maxPolarAngle={Math.PI / 2} />
}

function Sky() {
  const ref = useRef()
  const cloud0 = useRef()

  const color = "white"
  const x = 6
  const y = 1
  const z = -1
  const range = 40
  const opacity = 0.8
  const speed = 0.1
  const growth = 4
  const volume = 6
  const fade = 10

  useFrame((state, delta) => {
    ref.current.rotation.y = Math.cos(state.clock.elapsedTime / 2) / 2
    ref.current.rotation.x = Math.sin(state.clock.elapsedTime / 2) / 2
    cloud0.current.rotation.y -= delta * speed
  })

  return (
    <>
      <SkyImpl />
      <group ref={ref}>
        <Clouds material={THREE.MeshLambertMaterial} limit={400} range={range}>
          <Cloud ref={cloud0} opacity={opacity} growth={growth} color={color} bounds={[x, y, z]} />
          <Cloud opacity={opacity} growth={growth} color="#eed0d0" seed={2} position={[15, 0, 0]} bounds={[x, y, z]} />
          <Cloud opacity={opacity} growth={growth} color="#d0e0d0" seed={3} position={[-15, 0, 0]} bounds={[x, y, z]} />
          <Cloud opacity={opacity} growth={growth} color="#a0b0d0" seed={4} position={[0, 0, -12]} bounds={[x, y, z]} />
          <Cloud opacity={opacity} growth={growth} color="#c0c0dd" seed={5} position={[0, 0, 12]} bounds={[x, y, z]} />
          <Cloud concentrate="outside" growth={100} color="#ffccdd" opacity={1.25} seed={0.3} bounds={200} volume={200} />
        </Clouds>
      </group>
    </>
  )
}
