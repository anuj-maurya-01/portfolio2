import * as THREE from 'three'

export default class ProjectTextureGenerator {
    static createSlide(title, subtitle, bullets, themeColor = '#ff5722', accentColor = '#2196f3') {
        const canvas = document.createElement('canvas')
        canvas.width = 1024
        canvas.height = 512
        const ctx = canvas.getContext('2d')

        // Background gradient
        const bgGrad = ctx.createLinearGradient(0, 0, 1024, 512)
        bgGrad.addColorStop(0, '#0f172a')
        bgGrad.addColorStop(1, '#1e293b')
        ctx.fillStyle = bgGrad
        ctx.fillRect(0, 0, 1024, 512)

        // Accent top bar
        ctx.fillStyle = themeColor
        ctx.fillRect(0, 0, 1024, 16)

        // Decorative background elements
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.05)'
        ctx.lineWidth = 2
        for (let i = 0; i < 1024; i += 40) {
            ctx.beginPath()
            ctx.moveTo(i, 0)
            ctx.lineTo(i + 200, 512)
            ctx.stroke()
        }

        // Title
        ctx.fillStyle = '#ffffff'
        ctx.font = 'bold 38px Inter, sans-serif'
        ctx.fillText(title, 60, 80)

        // Subtitle / Tech Stack
        ctx.fillStyle = accentColor
        ctx.font = 'bold 22px Inter, sans-serif'
        ctx.fillText(subtitle, 60, 120)

        // Divider line
        ctx.strokeStyle = themeColor
        ctx.lineWidth = 3
        ctx.beginPath()
        ctx.moveTo(60, 140)
        ctx.lineTo(964, 140)
        ctx.stroke()

        // Bullet points
        ctx.fillStyle = '#e2e8f0'
        ctx.font = '20px Inter, sans-serif'
        let y = 190

        bullets.forEach(bullet => {
            ctx.fillStyle = themeColor
            ctx.beginPath()
            ctx.arc(75, y - 6, 6, 0, Math.PI * 2)
            ctx.fill()

            ctx.fillStyle = '#f8fafc'
            const words = bullet.split(' ')
            let line = ''
            const maxWidth = 850
            const x = 100

            for (let n = 0; n < words.length; n++) {
                const testLine = line + words[n] + ' '
                const metrics = ctx.measureText(testLine)
                if (metrics.width > maxWidth && n > 0) {
                    ctx.fillText(line, x, y)
                    line = words[n] + ' '
                    y += 32
                } else {
                    line = testLine
                }
            }
            ctx.fillText(line, x, y)
            y += 45
        })

        // Footer badge
        ctx.fillStyle = 'rgba(255, 255, 255, 0.1)'
        ctx.roundRect ? ctx.roundRect(60, 440, 240, 40, 8) : ctx.fillRect(60, 440, 240, 40)
        ctx.fill()
        ctx.fillStyle = '#94a3b8'
        ctx.font = 'bold 16px Inter, sans-serif'
        ctx.fillText('ANUJ KUMAR MAURYA', 80, 465)

        return canvas.toDataURL('image/png')
    }

    static createFloorTexture(title, subtitle) {
        const canvas = document.createElement('canvas')
        canvas.width = 1024
        canvas.height = 512
        const ctx = canvas.getContext('2d')

        ctx.clearRect(0, 0, 1024, 512)
        ctx.fillStyle = '#000000'
        ctx.fillRect(0, 0, 1024, 512)

        ctx.fillStyle = '#ffffff'
        ctx.font = '900 48px Inter, sans-serif'
        ctx.textAlign = 'center'
        ctx.fillText(title.toUpperCase(), 512, 230)

        ctx.font = 'bold 26px Inter, sans-serif'
        ctx.fillStyle = '#cccccc'
        ctx.fillText(subtitle.toUpperCase(), 512, 310)

        const texture = new THREE.CanvasTexture(canvas)
        texture.magFilter = THREE.NearestFilter
        texture.minFilter = THREE.LinearFilter
        texture.needsUpdate = true
        return texture
    }

    static createIntroTitleTexture() {
        const canvas = document.createElement('canvas')
        canvas.width = 2048
        canvas.height = 512
        const ctx = canvas.getContext('2d')

        ctx.clearRect(0, 0, 2048, 512)

        ctx.fillStyle = '#ffffff'
        ctx.font = '900 140px "Outfit", "Inter", sans-serif'
        ctx.textAlign = 'center'
        ctx.textBaseline = 'middle'
        ctx.fillText('ANUJ MAURYA', 1024, 256)

        const texture = new THREE.CanvasTexture(canvas)
        texture.magFilter = THREE.LinearFilter
        texture.minFilter = THREE.LinearFilter
        texture.needsUpdate = true
        return texture
    }

    static createIntroSubTitleTexture() {
        const canvas = document.createElement('canvas')
        canvas.width = 2048
        canvas.height = 256
        const ctx = canvas.getContext('2d')

        ctx.clearRect(0, 0, 2048, 256)

        ctx.fillStyle = '#ffffff'
        ctx.font = 'bold 64px "Outfit", "Inter", sans-serif'
        ctx.textAlign = 'center'
        ctx.textBaseline = 'middle'
        ctx.fillText('AI / ML  &  FULL-STACK DEVELOPER', 1024, 128)

        const texture = new THREE.CanvasTexture(canvas)
        texture.magFilter = THREE.LinearFilter
        texture.minFilter = THREE.LinearFilter
        texture.needsUpdate = true
        return texture
    }

    static createActivitiesTexture() {
        const canvas = document.createElement('canvas')
        canvas.width = 2048
        canvas.height = 1024
        const ctx = canvas.getContext('2d')

        ctx.clearRect(0, 0, 2048, 1024)

        // Heading
        ctx.fillStyle = '#ffffff'
        ctx.font = '900 90px "Outfit", "Inter", sans-serif'
        ctx.fillText('ACTIVITIES', 80, 130)

        const activities = [
            { role: 'CAMPUS MANTRI (AMBASSADOR)', org: 'AT GEEKSFORGEEKS', date: '2026 - PRESENT' },
            { role: 'CORE TEAM MEMBER', org: 'AT UCER HACKATHONS & TECH FESTS', date: '2024 - PRESENT' },
            { role: 'RESEARCH INTERN (AI/ML)', org: 'AT MNNIT FOUNDATION', date: '2026' },
            { role: 'FULL-STACK & AI/ML DEVELOPER', org: 'COMPUTER SCIENCE & ENGINEERING', date: '2024 - 2028' }
        ]

        let y = 280
        activities.forEach(item => {
            ctx.fillStyle = '#ffffff'
            ctx.font = '900 50px "Outfit", "Inter", sans-serif'
            ctx.fillText(item.role, 120, y)

            ctx.fillStyle = '#dddddd'
            ctx.font = 'bold 36px "Inter", sans-serif'
            ctx.fillText(`${item.org}   |   ${item.date}`, 120, y + 48)

            y += 175
        })

        const texture = new THREE.CanvasTexture(canvas)
        texture.magFilter = THREE.LinearFilter
        texture.minFilter = THREE.LinearFilter
        texture.needsUpdate = true
        return texture
    }

    static createIndianFlagTexture() {
        const canvas = document.createElement('canvas')
        canvas.width = 512
        canvas.height = 341
        const ctx = canvas.getContext('2d')

        // Saffron Top
        ctx.fillStyle = '#FF9933'
        ctx.fillRect(0, 0, 512, 113.6)

        // White Middle
        ctx.fillStyle = '#FFFFFF'
        ctx.fillRect(0, 113.6, 512, 113.6)

        // Green Bottom
        ctx.fillStyle = '#138808'
        ctx.fillRect(0, 227.2, 512, 113.6)

        // Ashoka Chakra
        const cx = 256
        const cy = 170.4
        const r = 45

        ctx.strokeStyle = '#000080'
        ctx.lineWidth = 4
        ctx.beginPath()
        ctx.arc(cx, cy, r, 0, Math.PI * 2)
        ctx.stroke()

        ctx.fillStyle = '#000080'
        ctx.beginPath()
        ctx.arc(cx, cy, 7, 0, Math.PI * 2)
        ctx.fill()

        ctx.lineWidth = 2
        for (let i = 0; i < 24; i++) {
            const angle = (i * Math.PI) / 12
            ctx.beginPath()
            ctx.moveTo(cx, cy)
            ctx.lineTo(cx + r * Math.cos(angle), cy + r * Math.sin(angle))
            ctx.stroke()
        }

        const texture = new THREE.CanvasTexture(canvas)
        texture.magFilter = THREE.LinearFilter
        texture.minFilter = THREE.LinearFilter
        texture.needsUpdate = true
        return texture
    }
}
