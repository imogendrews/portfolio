import { createRoot } from 'react-dom/client'
import * as THREE from 'three'
import React, { useRef, useState, memo } from 'react'
import { Canvas, useFrame, useThree, extend, useLoader } from '@react-three/fiber'
import { useCursor, MeshPortalMaterial,  CameraControls, Text, Preload, OrbitControls, Image } from '@react-three/drei'
import { useRoute, useLocation } from 'wouter'
import { easing, geometry } from 'maath'
import eye from '../assets/eye_pic.png'
import zombie from '../assets/zombie.png'
import spirit from '../assets/spirit.png'
import pattern from '../assets/pattern_image.png'
import clown from '../assets/clown_image.png'
import friends from '../assets/friends_image.png'
import { Html} from "@react-three/drei";
import { TextureLoader } from "three";
import { Clouds, Cloud, Sky as SkyImpl, StatsGl } from "@react-three/drei"


const RoundedImage = ({ url, position, width = 1, height = 1 }) => {
    const texture = useLoader(TextureLoader, url);
  
    if (!texture) {
      return <mesh position={position}><boxGeometry args={[1, 1, 1]} /><meshBasicMaterial color="gray" /></mesh>;
    }
  
    return (
      <mesh position={position}>
        <roundedPlaneGeometry args={[width, height, 0.1]} />
        <meshBasicMaterial map={texture} side={THREE.DoubleSide} />
      </mesh>
    );
  };
  
  
  const Frame = ({ id, name, bg, image, position, width = 1, height = 1 }) => {
    return (
      <group position={position}>
        <Text fontSize={0.3} anchorY="top" anchorX="left" lineHeight={0.8} position={[-0.975, 0.815, 0.01]} material-toneMapped={false}>
          {name}
        </Text>
        <mesh>
          <roundedPlaneGeometry args={[width, height, 0.1]} />
          <meshBasicMaterial color={bg} />
        </mesh>
        {/* Pass the image to the RoundedImage */}
        <RoundedImage url={image} position={[0, 0, 0.05]} width={width} height={height} />
      </group>
    );
  };

  export const Test = () => (
    <Canvas>
      <ambientLight intensity={Math.PI / 2} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />
      <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
      <Sky />
      <OrbitControls />
      {["Circles", "Spirits", "Zombies", "Pattern", "Card", "Friends"].map((id, index) => (
        <Frame
          key={id}
          id={id}
          name={`Project: ${id}`}
          image={id === "Circles" ? eye : id === "Spirits" ? spirit : id === "Zombies" ? zombie : id === "Pattern" ? pattern : id === "Card" ? clown : id === "Friends" ? friends : friends} // Ensure the image is passed correctly here
          bg={"#e4cdac"}
          position={[(index % 3) * 3 - 4.5, Math.floor(index / 3) * -3, 0]} // 2x4 grid positioning
          width={2}
          height={1}
        />
      ))}
    </Canvas>
  );

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
  