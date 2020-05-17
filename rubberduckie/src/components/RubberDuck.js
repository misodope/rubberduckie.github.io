import React, { useEffect, useRef } from "react";
import "./RubberDuck.scss";
import "./BuyMeACoffe";
import * as THREE from "three";

const RubberDuck = () => {
  const ref = useRef();

  const fieldOfView = 75; //degrees
  const aspect = 2;
  const near = 0.1;
  const far = 1000;

  useEffect(() => {
    window.THREE = THREE || {};
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(fieldOfView, aspect, near, far);
    var renderer = new THREE.WebGLRenderer({ alpha: true });

    renderer.setClearColor(0xffffff, 0);
    renderer.setSize(800, 600);

    ref.current.appendChild(renderer.domElement);

    // BODY OF DUCK
    var geometry = new THREE.SphereGeometry(2, 32, 32);
    var material = new THREE.MeshPhongMaterial({
      wireframe: false,
      transparent: false,
      color: 0xfeae09,
      vertexColors: 0xfeae09,
      shading: THREE.SmoothShading,
    });

    // HEAD OF DUCK
    var geometry2 = new THREE.SphereGeometry(1, 32, 32);
    var material2 = new THREE.MeshPhongMaterial({
      wireframe: false,
      transparent: false,
      color: 0xfeae09,
      vertexColors: 0xfeae09,
      shading: THREE.SmoothShading,
    });

    // Mouth of Duck
    const mouthRadius = 0.75;
    const mouthHeight = 1.5;
    const mouthRadialSegments = 32;
    const mouthHeightSegments = 1;
    const mouthOpenEnded = true;
    const mouthThetaStart = Math.PI * 0.0;
    const mouthThetaLength = Math.PI * 2.0;
    var geometry3 = new THREE.ConeBufferGeometry(
      mouthRadius,
      mouthHeight,
      mouthRadialSegments,
      mouthHeightSegments,
      mouthOpenEnded,
      mouthThetaStart,
      mouthThetaLength,
    );
    var material3 = new THREE.MeshPhongMaterial({
      wireframe: false,
      transparent: false,
      color: 0xfeae09,
    });

    // Eyes of Duck
    const eyeInnerRadius = 0.25;
    const eyeOuterRadius = 0.1;
    const eyeThetaSegments = 30;
    const eyeGeometry = new THREE.RingBufferGeometry(eyeInnerRadius, eyeOuterRadius, eyeThetaSegments);
    const eyeMaterial = new THREE.MeshBasicMaterial({ color: "black", side: THREE.DoubleSide });

    // Creating Sphere Shape for Body
    var sphere = new THREE.Mesh(geometry, material);

    // Creating Sphere shape for head and setting position
    var sphere2 = new THREE.Mesh(geometry2, material2);
    sphere2.position.set(0, 1.5, 1.25);

    // Creating Mouth shape and setting position
    var mouth = new THREE.Mesh(geometry3, material3);
    mouth.position.set(0, 2.1, 1.25);

    // Creating eye Shape and setting positions
    const eye1 = new THREE.Mesh(eyeGeometry, eyeMaterial);
    const eye2 = new THREE.Mesh(eyeGeometry, eyeMaterial);
    eye1.position.set(0.75, 2.15, 1.45);
    eye1.rotation.x += 2;
    eye1.rotation.y -= 0.8;
    eye1.rotation.z += 1;

    eye2.position.set(-0.75, 2.15, 1.45);
    eye2.rotation.x += 2;
    eye2.rotation.y += 0.8;
    eye2.rotation.z += 1;

    var light = new THREE.DirectionalLight(0xffffff);
    light.position.set(1, 1, 2).normalize();

    var group = new THREE.Group();
    var headGroup = new THREE.Group();
    var eyePair = new THREE.Group();

    eyePair.add(eye1);
    eyePair.add(eye2);

    headGroup.add(sphere2);
    headGroup.add(mouth);
    headGroup.add(eyePair);

    group.add(sphere);
    group.add(headGroup);

    scene.add(light);
    scene.add(group);
    camera.position.z = 5;

    group.rotation.y += 3;
    group.rotation.x += 1.5;
    group.rotation.z += 0.55;

    function animate() {
      requestAnimationFrame(animate);
      group.rotation.z += 0.02;
      renderer.render(scene, camera);
    }
    animate();
  }, []);

  return (
    <div className="rubber-duckie">
      <div className="rubber-duckie__container">
        <div ref={ref} />
      </div>
    </div>
  );
};

export default RubberDuck;
