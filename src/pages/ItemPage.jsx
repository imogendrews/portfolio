import { useEffect, useState } from "react";
import { useRoute } from "wouter";
import { Canvas } from '@react-three/fiber'
import {  Text  } from '@react-three/drei'
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
      <Text>{project.name}</Text>
      {/* <img src={project.image} alt={project.name} style={{ width: "400px" }} /> */}
      <Text>{project.description}</Text>
      {/* <a href={project.github} target="_blank" rel="noopener noreferrer">
        GitHub Repo
      </a> */}
    </Canvas>
  );
};



