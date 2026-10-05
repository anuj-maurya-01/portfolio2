import * as THREE from 'three'
import Project from './Project'
import gsap from 'gsap'
import ProjectTextureGenerator from '../../Utils/ProjectTextureGenerator.js'

export default class ProjectsSection
{
    constructor(_options)
    {
        // Options
        this.time = _options.time
        this.resources = _options.resources
        this.camera = _options.camera
        this.passes = _options.passes
        this.objects = _options.objects
        this.areas = _options.areas
        this.zones = _options.zones
        this.tiles = _options.tiles
        this.debug = _options.debug
        this.x = _options.x
        this.y = _options.y

        // Debug
        if(this.debug)
        {
            this.debugFolder = this.debug.addFolder('projects')
            this.debugFolder.open()
        }

        // Set up
        this.items = []

        this.interDistance = 24
        this.positionRandomess = 5
        this.projectHalfWidth = 9

        this.container = new THREE.Object3D()
        this.container.matrixAutoUpdate = false
        this.container.updateMatrix()

        this.setGeometries()
        this.setMeshes()
        this.setList()
        this.setZone()

        // Add all project from the list
        for(const _options of this.list)
        {
            this.add(_options)
        }
    }

    setGeometries()
    {
        this.geometries = {}
        this.geometries.floor = new THREE.PlaneGeometry(16, 8)
    }

    setMeshes()
    {
        this.meshes = {}

        // this.meshes.boardStructure = this.objects.getConvertedMesh(this.resources.items.projectsBoardStructure.scene.children, { floorShadowTexture: this.resources.items.projectsBoardStructureFloorShadowTexture })
        this.resources.items.areaOpenTexture.magFilter = THREE.NearestFilter
        this.resources.items.areaOpenTexture.minFilter = THREE.LinearFilter
        this.meshes.boardPlane = this.resources.items.projectsBoardPlane.scene.children[0]
        this.meshes.areaLabel = new THREE.Mesh(new THREE.PlaneGeometry(2, 0.5), new THREE.MeshBasicMaterial({ transparent: true, depthWrite: false, color: 0xffffff, alphaMap: this.resources.items.areaOpenTexture }))
        this.meshes.areaLabel.matrixAutoUpdate = false
    }

    setList()
    {
        const attritionSlide1 = ProjectTextureGenerator.createSlide(
            'Employee Attrition Prediction',
            'Python • Scikit-learn • XGBoost • Streamlit',
            [
                'End-to-end Machine Learning solution to detect employee turnover risks using IBM HR dataset.',
                'Achieved peak accuracy of 87.76% with XGBoost and maximized recall trade-off (88.9%).',
                'Deployed via interactive Streamlit web dashboard for seamless HR executive oversight.'
            ],
            '#e11d48',
            '#f43f5e'
        )

        const attritionSlide2 = ProjectTextureGenerator.createSlide(
            'Data Pipeline & Imbalance Handling',
            'ColumnTransformer & SMOTE Oversampling',
            [
                'Engineered preprocessing pipeline incorporating IQR outlier capping, Z-score scaling & One-Hot Encoding.',
                'Tackled severe class imbalance with SMOTE for unbiased evaluation across Logistic Regression & Random Forest.'
            ],
            '#e11d48',
            '#f43f5e'
        )

        const cpuSlide1 = ProjectTextureGenerator.createSlide(
            'CPU Scheduling Visualizer',
            'React.js • JavaScript • HTML5 • CSS3 • Vercel',
            [
                'Interactive web simulator to visualize and benchmark classic CPU scheduling algorithms.',
                'Supports FCFS, SJF, SRTF, Priority Scheduling, and Round Robin algorithms.'
            ],
            '#0284c7',
            '#38bdf8'
        )

        const cpuSlide2 = ProjectTextureGenerator.createSlide(
            'Gantt Charts & Real-Time Metrics',
            'Auto-Calculating Performance Metrics',
            [
                'Rendered process execution paths dynamically through animated Gantt charts.',
                'Auto-calculates key metrics: Waiting Time (WT), Turnaround Time (TAT), and Response Time (RT).'
            ],
            '#0284c7',
            '#38bdf8'
        )

        this.list = [
            {
                name: 'Employee Attrition Prediction System',
                imageSources: [attritionSlide1, attritionSlide2],
                floorTexture: ProjectTextureGenerator.createFloorTexture('Employee Attrition Prediction', 'Python • Scikit-learn • XGBoost • Streamlit'),
                link: {
                    href: 'https://github.com/anujmaurya1004',
                    x: - 4.8,
                    y: - 3,
                    halfExtents: { x: 3.2, y: 1.5 }
                },
                distinctions: []
            },
            {
                name: 'CPU Scheduling Visualizer',
                imageSources: [cpuSlide1, cpuSlide2],
                floorTexture: ProjectTextureGenerator.createFloorTexture('CPU Scheduling Visualizer', 'React.js • JavaScript • HTML5 • CSS3 • Vercel'),
                link: {
                    href: 'https://github.com/anujmaurya1004',
                    x: - 4.8,
                    y: - 3,
                    halfExtents: { x: 3.2, y: 1.5 }
                },
                distinctions: []
            }
        ]
    }

    setZone()
    {
        const totalWidth = this.list.length * (this.interDistance / 2)

        const zone = this.zones.add({
            position: { x: this.x + totalWidth - this.projectHalfWidth - 6, y: this.y },
            halfExtents: { x: totalWidth, y: 12 },
            data: { cameraAngle: 'projects' }
        })

        zone.on('in', (_data) =>
        {
            this.camera.angle.set(_data.cameraAngle)
            gsap.to(this.passes.horizontalBlurPass.material.uniforms.uStrength.value, { x: 0, duration: 2 })
            gsap.to(this.passes.verticalBlurPass.material.uniforms.uStrength.value, { y: 0, duration: 2 })
        })

        zone.on('out', () =>
        {
            this.camera.angle.set('default')
            gsap.to(this.passes.horizontalBlurPass.material.uniforms.uStrength.value, { x: this.passes.horizontalBlurPass.strength, duration: 2 })
            gsap.to(this.passes.verticalBlurPass.material.uniforms.uStrength.value, { y: this.passes.verticalBlurPass.strength, duration: 2 })
        })
    }

    add(_options)
    {
        const x = this.x + this.items.length * this.interDistance
        let y = this.y
        if(this.items.length > 0)
        {
            y += (Math.random() - 0.5) * this.positionRandomess
        }

        // Create project
        const project = new Project({
            time: this.time,
            resources: this.resources,
            objects: this.objects,
            areas: this.areas,
            geometries: this.geometries,
            meshes: this.meshes,
            debug: this.debugFolder,
            x: x,
            y: y,
            ..._options
        })

        this.container.add(project.container)

        // Add tiles
        if(this.items.length >= 1)
        {
            const previousProject = this.items[this.items.length - 1]
            const start = new THREE.Vector2(previousProject.x + this.projectHalfWidth, previousProject.y)
            const end = new THREE.Vector2(project.x - this.projectHalfWidth, project.y)
            const delta = end.clone().sub(start)
            this.tiles.add({
                start: start,
                delta: delta
            })
        }

        // Save
        this.items.push(project)
    }
}
