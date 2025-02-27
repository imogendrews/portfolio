import { useParams } from 'wouter';
import profile_pic from '../assets/imo_profile.jpeg'
import {  Text,  OrbitControls } from '@react-three/drei'
import { Canvas, useFrame, useThree, extend, useLoader } from '@react-three/fiber'
import * as THREE from 'three'
import { geometry } from 'maath'

extend(geometry)


export const Contact = () => {
  const { id } = useParams();

  return (
    <Canvas>
      <OrbitControls enableZoom={false} />
       <Text font="/fonts/BebasNeue-Regular.ttf" fontSize={0.6} anchorY="top" anchorX="left" lineHeight={0.8} position={[-1.5, 2, 0]} material-toneMapped={false}>
                Contact
              </Text>
      <group>
  {/* Background Panel */}
  <mesh position={[-0.5, 0 , 0]}>
    <roundedPlaneGeometry args={[4, 2, 0.1]} />
    <meshBasicMaterial color="#a0b0d0" transparent={true} opacity={0.8}  />
  </mesh>

  

  {/* First line of text next to the image */}
  <Text 
  font="/fonts/RobotoCondensed.ttf"
    color="#1a1e1c" 
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
  font="/fonts/RobotoCondensed.ttf"
    color="#1a1e1c" 
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

