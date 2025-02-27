import { useRef } from 'react';
import { useParams } from 'wouter';
import CV_image from '../assets/Imo_CV_pic.jpg'
import CV_pdf from '../assets/imo_cv_download.pdf'
import {  Text,  OrbitControls, Html } from '@react-three/drei'
import { Canvas, useFrame, useThree, extend, useLoader } from '@react-three/fiber'
import { TextureLoader } from "three";
import * as THREE from 'three'
import { geometry } from 'maath'

extend(geometry)

export const CV = () => {
  const { id } = useParams();
 


  return (
    <div style={{ position: 'relative', width: '100vw', height: '100vh' }}>
      {/* Canvas takes up full viewport */}
      <Canvas style={{ width: '100%', height: '100%' }}>
        <OrbitControls />
        <group>
          <mesh>
            <roundedPlaneGeometry args={[5, 5, 0.1]} />
            <meshBasicMaterial />
          </mesh>
          {/* Replace RoundedImage with your actual component */}
          <RoundedImage url={CV_image} position={[0, 0, 0.05]} width={5} height={7} />
        </group>
      </Canvas>

      {/* Button will be positioned on top of canvas, and won't interfere with other elements */}
    </div>

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