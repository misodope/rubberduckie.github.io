import React, { useEffect, useRef } from "react"
import "./RubberDuck.scss"
import "./BuyMeACoffe"
import BuyMeACoffe from "./BuyMeACoffe"
import * as THREE from "three"

const RubberDuck = () => {
  const ref = useRef();

  useEffect(() => {
    var scene = new THREE.Scene();

    var camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );

    var renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setClearColor( 0xffffff, 0 );
    renderer.setSize(500, 500);

    ref.current.appendChild(renderer.domElement);
 
    var geometry = new THREE.SphereGeometry( 2, 32, 32);
    var material = new THREE.MeshStandardMaterial();
    material.color.set(0xfeae09);
    var sphere = new THREE.Line( geometry, material );
    scene.add( sphere );
    camera.position.z = 5;

    function animate() {
      requestAnimationFrame( animate );
      sphere.rotation.x += 0.01;
      sphere.rotation.y += 0.01;
      renderer.render( scene, camera );
    }
    animate();
  }, [])

  return (
    <div className="rubber-duckie">
      <div className="rubber-duckie__container">
        <div className="rubber-duckie__container--text">Rubber Duckie</div>
        <div ref={ref} />
      </div>
      <div className="rubber-duckie__cta">
        <BuyMeACoffe />
      </div>
    </div>
  )
}

export default RubberDuck
