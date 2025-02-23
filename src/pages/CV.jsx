import { useParams } from 'wouter';
import CV_image from '../assets/Imo_CV_pic.jpg'
import {  Text,  OrbitControls } from '@react-three/drei'
import { Canvas, useFrame, useThree, extend, useLoader } from '@react-three/fiber'
import { TextureLoader } from "three";
import * as THREE from 'three'
export const CV = () => {
  const { id } = useParams();

  return (
    <Canvas>
       <OrbitControls  />
          <group >
           
            <mesh>
              <roundedPlaneGeometry args={[5, 5, 0.1]} />
              <meshBasicMaterial  />
            </mesh>
            <RoundedImage url={CV_image} position={[0, 0, 0.05]} width={5} height={7} />
          </group>
</Canvas>

  );
};

const RoundedImage = ({ url, position, width = 5, height = 7 }) => {
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