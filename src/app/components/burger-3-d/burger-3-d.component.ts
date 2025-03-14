import { Component, ElementRef, ViewChild, viewChild } from '@angular/core';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
@Component({
  selector: 'app-burger-3-d',
  standalone: true,
  imports: [],
  templateUrl: './burger-3-d.component.html',
  styleUrl: './burger-3-d.component.css'
})
export class Burger3DComponent {
  @ViewChild('renderContainer', {static : true}) renderContainer!: ElementRef;

  private scene!: THREE.Scene;
  private camera!: THREE.PerspectiveCamera;
  private renderer!: THREE.WebGLRenderer;
  private light!: THREE.DirectionalLight;
  private burger!: THREE.Group<THREE.Object3DEventMap>;

  ngOnInit() {
    this.initThreeJS();
    this.loadGLBModel();
    this.animate();
  }

  private initThreeJS(): void {
    this.scene = new THREE.Scene();

    // Camera
    // this.camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
    this.camera = new THREE.PerspectiveCamera(40, 1, 0.1, 1000); // Keep aspect ratio 1:1
    this.camera.position.set(0, 0, 1);

    // Renderer
    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderContainer.nativeElement.appendChild(this.renderer.domElement);
    // this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    // const container = this.renderContainer.nativeElement;
    // this.renderer.setSize(container.clientWidth, container.clientWidth);
    // container.appendChild(this.renderer.domElement);

    // Lighting
    this.light = new THREE.DirectionalLight(0xffffff, 1);
    this.light.position.set(5, 5, 5);
    this.scene.add(this.light);
    this.onWindowResize()
    // Resize handler
    window.addEventListener('resize', () => this.onWindowResize());
  }

  private loadGLBModel(): void {
    const loader = new GLTFLoader();
    loader.load('assets/3D/burger_piece.glb', (gltf) => {
      this.burger = gltf.scene;
      this.burger.position.set(0, 0, 0);
      this.scene.add(this.burger);
    }, undefined, (error) => {
      console.error('Error loading GLB model:', error);
    });
  }
  private animate(): void {
    requestAnimationFrame(() => this.animate());
    if(this.burger){
      this.burger.rotation.y -= 0.005;
    }
    this.renderer.render(this.scene, this.camera);
  }

  // private onWindowResize(): void {
  //   this.camera.aspect = window.innerWidth / window.innerHeight;
  //   this.camera.updateProjectionMatrix();
  //   this.renderer.setSize(window.innerWidth, window.innerHeight);
  // }

  private onWindowResize(): void {
    const container = this.renderContainer.nativeElement;
    this.camera.aspect = 1; // Keep square aspect ratio
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(container.clientWidth, container.clientWidth);
  }
  
}
