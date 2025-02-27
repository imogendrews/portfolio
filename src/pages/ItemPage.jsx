import { useEffect, useState } from "react";
import { useRoute } from "wouter";
import { Canvas } from '@react-three/fiber'
import {  Text, Image  } from '@react-three/drei'
export const ItemPage = () => {
  const [project, setProject] = useState(null);
  const [match, params] = useRoute("/item/:id");
  
      useEffect(() => {
        if (!params.id) return; // Don't fetch if ID is missing
        fetch("/data/projects.json") // Adjust path based on where the JSON is stored
          .then((response) => response.json())
          .then((data) => {
            const selectedProject = data.find((p) => p.id === Number(params.id));
            setProject(selectedProject || null)});
            
      }, [params.id]);
      

  if (!project) return <p>Loading...</p>;

  return (
    <Canvas>
      <Text fontSize={0.3} anchorY="top" anchorX="left" lineHeight={0.8} position={[-0.975, 0.815, 0.01]} material-toneMapped={false}>{project.name}</Text>
      <Image url={project.image} position={[0, 0, 0.05]} width={2} height={1} />
      <Text fontSize={0.3} anchorY="top" anchorX="left" lineHeight={0.8} position={[-0.975, 0.400, 0.01]} material-toneMapped={false}>{project.description}</Text>
      {/* <a href={project.github} target="_blank" rel="noopener noreferrer">
        GitHub Repo
      </a> */}
    </Canvas>
  );
};



