import { createRoot } from 'react-dom/client'
import * as THREE from 'three'
import React, { useRef, useState, memo, useEffect } from 'react'
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


// useEffect(() => {
//   const preventScroll = (e) => e.preventDefault();
//   window.addEventListener("wheel", preventScroll, { passive: false });

//   return () => window.removeEventListener("wheel", preventScroll);
// }, []);

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
    const [, setLocation] = useLocation(); // Correct way to navigate in wouter
  
    return (
      <group position={position} onClick={() => setLocation(`/item/${id}`)} cursor="pointer">
        <Text fontSize={0.3} anchorY="top" anchorX="left" lineHeight={0.8} position={[-0.975, 0.815, 0.01]} material-toneMapped={false}>
          {name}
        </Text>
        <mesh>
          <roundedPlaneGeometry args={[width, height, 0.1]} />
          <meshBasicMaterial color={bg} />
        </mesh>
        <RoundedImage url={image} position={[0, 0, 0.05]} width={width} height={height} />
      </group>
    );
  };
  
  



  export const Test = () => {
    const [, setLocation] = useLocation(); // Get setLocation from useLocation
    return(
    <Canvas style={{ width: "100vw", height: "100vh" }} camera={{ fov: 75, position: [0, 0, 5] }}>
      <OrbitControls enableZoom={false} />
      <Text fontSize={0.8} anchorY="top" anchorX="left" lineHeight={0.8} position={[-2.5, 3, 0]} material-toneMapped={false}>
          Imogen Drews
        </Text>
       <group onClick={() => setLocation('/about')} cursor="pointer">
        <Text fontSize={0.3} anchorY="top" anchorX="left" lineHeight={0.8} position={[-2.5, 2, 0]} material-toneMapped={false}>
          About
        </Text>
      </group>
      <group onClick={() => setLocation('/cv')} cursor="pointer">
        <Text fontSize={0.3} anchorY="top" anchorX="left" lineHeight={0.8} position={[-0.5, 2, 0]} material-toneMapped={false}>
          CV
        </Text>
      </group>
      <group onClick={() => setLocation('/contact')} cursor="pointer">
        <Text fontSize={0.3} anchorY="top" anchorX="left" lineHeight={0.8} position={[1.5, 2, 0]} material-toneMapped={false}>
          Contact
        </Text>
      </group>
 
      {["Circles", "Spirits", "Zombies", "Pattern", "Card", "Friends"].map((id, index) => (
        <Frame
          key={id}
          id={id}
          name={`Project: ${id}`}
          image={id === "Circles" ? eye : id === "Spirits" ? spirit : id === "Zombies" ? zombie : id === "Pattern" ? pattern : id === "Card" ? clown : id === "Friends" ? friends : friends} // Ensure the image is passed correctly here
          bg={"#e4cdac"}
          position={[(index % 3) * 3 - 3.5, Math.floor(index / 3) * -3, 0]} // 2x4 grid positioning
          width={2}
          height={1}
        />
      ))}
    </Canvas>
  )}

  