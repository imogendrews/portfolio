import { useParams } from 'wouter';
import profile_pic from '../assets/imo_profile.jpeg'
import {  Text,  OrbitControls } from '@react-three/drei'
import { Canvas, useFrame, useThree, extend, useLoader } from '@react-three/fiber'
import { TextureLoader } from "three";
import * as THREE from 'three'


export const Contact = () => {
  const { id } = useParams();

  return (
    <Canvas>
       <Text fontSize={0.6} anchorY="top" anchorX="left" lineHeight={0.8} position={[-1.5, 2, 0]} material-toneMapped={false}>
                Contact
              </Text>
      <group>
  {/* Background Panel */}
  <mesh position={[-0.5, 0 , 0]}>
    <roundedPlaneGeometry args={[4, 2, 0.1]} />
    <meshBasicMaterial />
  </mesh>

  

  {/* First line of text next to the image */}
  <Text 
    color="black" 
    fontSize={0.2} 
    anchorY="top" 
    anchorX="left"
    position={[-2.25, 0.75, 0.01]} // Align with image
    maxWidth={4} 
    textAlign="left"
  >
Email: imoleadrews@gmail.com
  </Text>
  
  <Text 
    color="black" 
    fontSize={0.2} 
    anchorY="top" 
    anchorX="left"
    position={[-2.25, 0, 0.01]} // Start below the image
    maxWidth={4.5} 
    textAlign="left"
  >
    
    Number: +49 151 127 31191
  </Text>
</group>

</Canvas>

  );
};

