/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 public/model/monkeyVietnameseHat.gltf --transform 
Files: public/model/monkeyVietnameseHat.gltf [3.26KB] > D:\Code\ReactJs\ThreeJs\polytopia\monkeyVietnameseHat-transformed.glb [6.55KB] (-101%)
*/
"use client";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function MonkeyVietnameseHat(props) {
  const { nodes, materials } = useGLTF(
    "public/model/monkeyVietnameseHat-transformed.glb"
  );
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.Suzanne.geometry}
        material={materials["Material.001"]}
        position={[0, 0, -3.885]}
      />
      <mesh
        geometry={nodes.Cone.geometry}
        material={materials.Material}
        position={[0.028, 1.001, -4.104]}
        rotation={[-0.239, 0, 0]}
        scale={[1.307, 0.42, 1.307]}
      />
    </group>
  );
}

useGLTF.preload("/monkeyVietnameseHat-transformed.glb");
