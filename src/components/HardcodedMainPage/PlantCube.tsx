import React, { useEffect, useRef } from 'react';
import {
    WebGLRenderer,
    Scene,
    PerspectiveCamera,
    DirectionalLight,
    Object3D,
    AxesHelper,
    DoubleSide,
    Mesh,
    Material
} from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

export type PlantCubeType = {
    className?: string
}

const GLTF_FILEPATH = "Cube_Draft.glb";
// const GLTF_FILEPATH = "grassCube.gltf";
const FOV = 90; // field of view
const NEAR_CLIP_PLANE = 0.1;
const FAR_CLIP_PLANE = 1000;

// Movement amount settings
const moveScale = 0.0025;   // overall movement amount
const moveScaleX = 1;       // red axis
const moveScaleY = 0.5;     // green axis
const moveScaleZ = 1;       // blue axis


/**
 * Renders the Plane cube in the hero section of the website.
 * Moves the cube around like it is floating and allows the user
 * to click and drag to adjust the camera.
 *
 * Last Modified
 * Victor Shan
 * September 21, 2021
 */
export default function PlantCube({ className }: PlantCubeType) {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const scene = new Scene();
        const width = canvasRef.current!.clientWidth;
        const height = canvasRef.current!.clientHeight;
        const camera =  new PerspectiveCamera(
            FOV,
            // @ts-ignore
            width / height,
            NEAR_CLIP_PLANE,
            FAR_CLIP_PLANE
        );
        camera.position.y = 3;
        camera.position.z = 4;
        camera.rotateX(-0.2);

        const renderer = new WebGLRenderer({ canvas: canvasRef.current!, alpha: true });
        renderer.setSize(width!, height!);

        // axis for debugging
        // const axesHelper = new AxesHelper(5);
        // scene.add(axesHelper);

        // load gltf object into scene
        let cube: Object3D;
        const loader = new GLTFLoader();
        loader.load(GLTF_FILEPATH, function (gltf) {
            const scale = 1.25;
            console.log(gltf.scene.children);
            console.log(gltf.scene.children[1]);
            cube = gltf.scene.children[1];
            cube.scale.set(scale, scale, scale);
            cube.rotateY(0.5);
            cube.position.y += 0.25;
            scene.add(cube);
        });

        const light1 = new DirectionalLight( 0xefefff, 1.5 );
        light1.position.set( 1, 1, 1 ).normalize();
        scene.add( light1 );

        const light2 = new DirectionalLight( 0xefefff, 1.5 );
        light2.position.set( -1, -1, -1 ).normalize();
        scene.add( light2 );

        // Creates orbit controls, does not need to be stored in variable
        // unless we want to modify it
        new OrbitControls(camera, canvasRef.current!);

        const animate = (value: number) => {
            if (value > Math.PI * 2) {
                value = 0;
            }
            const requestId = requestAnimationFrame(() => animate(value + 0.01));
            if (cube) {
                // cube movement animation
                cube.position.y += moveScaleX * moveScale * Math.cos(value);
                cube.position.x += moveScaleY * moveScale * Math.sin(value);
                cube.position.z += moveScaleZ * moveScale * Math.sin(value);
                renderer.render(scene, camera);
            }
            return requestId;
        }
        const requestId = animate(0);
        return () => { cancelAnimationFrame(requestId) };
    }, [canvasRef]);

    return (<canvas className={className} ref={canvasRef}></canvas>);
}