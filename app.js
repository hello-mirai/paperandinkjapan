gsap.registerPlugin(ScrollTrigger);

// ==========================================
// 1. DATA (Split Ma and Wabi-Sabi)
// ==========================================
const articleData = {
  "ma": [
    {
      "title": "Ma: An Emptiness Full of Possibility",
      "text": "<p>The Japanese concept of <strong>Ma (間)</strong> translates to 'gap,' 'space,' 'pause,' or 'interval.' Etymologically, the ancient Chinese character originally combined the radical for 'door' with 'moon,' depicting the poetic image of moonlight peeping through the crevice of a doorway.</p><p>Unlike Western traditions that often rush to fill empty space, <em>Ma</em> treats negative space as an active, vital component that gives shape and meaning to the whole.</p>",
      "svg": "<svg viewBox=\"0 0 200 200\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><circle cx=\"100\" cy=\"100\" r=\"80\" stroke-dasharray=\"4 8\" opacity=\"0.3\"/><circle cx=\"100\" cy=\"100\" r=\"70\" fill=\"rgba(0, 242, 255, 0.1)\"/><path class=\"anim-path\" d=\"M100 20 L 100 180\" stroke=\"#ff0055\" stroke-dasharray=\"200\" stroke-dashoffset=\"200\"/></svg>"
    }
  ],
  "wabisabi": [
    {
      "title": "Wabi-Sabi: Imperfect Beauty",
      "text": "<p>While <em>Ma</em> governs space and time, <strong>Wabi-Sabi</strong> governs materiality and existence. It is a philosophical appreciation of things that are imperfect, impermanent, and incomplete.</p><p>The aesthetic was perfected in the tea ceremony. Masters rejected opulent imports in favor of rustic, earthy, and asymmetrical Japanese bowls (chawan), transforming tea preparation into an act of profound humility.</p>",
      "svg": "<svg viewBox=\"0 0 200 200\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linejoin=\"round\"><path d=\"M50 80 C 50 140 80 160 100 160 C 120 160 150 140 150 80 Z\" fill=\"rgba(255, 255, 255, 0.05)\"/><ellipse cx=\"100\" cy=\"80\" rx=\"50\" ry=\"15\" fill=\"rgba(0, 242, 255, 0.1)\"/><path class=\"anim-path\" d=\"M70 90 L 85 120 L 75 140 M 85 120 L 110 130 L 120 155\" stroke=\"#ff0055\" stroke-width=\"4\" stroke-dasharray=\"150\" stroke-dashoffset=\"150\"/></svg>"
    },
    {
      "title": "The Art of Slow Living",
      "text": "<p>In today's fast-paced world, these philosophies offer a psychological antidote. By decorating with natural materials and embracing empty space, we reduce visual clutter, which lowers stress and regulates the nervous system.</p><p>It teaches the three fundamental truths of nature: nothing is perfect, nothing is finished, and nothing is forever.</p>",
      "svg": "<svg viewBox=\"0 0 200 200\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><circle cx=\"100\" cy=\"100\" r=\"50\" fill=\"rgba(188, 19, 254, 0.1)\" stroke=\"none\"/><path class=\"anim-path\" d=\"M60 140 C 40 110 80 80 100 100\" stroke-linecap=\"round\" stroke-dasharray=\"100\" stroke-dashoffset=\"100\"/><path class=\"anim-path\" d=\"M140 140 C 160 110 120 80 100 100\" stroke-linecap=\"round\" stroke-dasharray=\"100\" stroke-dashoffset=\"100\"/></svg>"
    }
  ],
  "shodo": [
    {
      "title": "How It All Began",
      "text": "<p>Japanese calligraphy, or <strong>Shodo</strong>, translates to 'the way of writing.' Introduced from China around the 6th century, early practitioners adhered strictly to rigid, architectural styles.</p><p>During the Heian period, Japan developed its own alphabet (kana), allowing for a much softer, more fluid, and emotionally expressive script known as the <strong>Wayō</strong> style. The brush began to dance.</p>",
      "svg": "<svg viewBox=\"0 0 200 200\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"15\" stroke-linecap=\"round\"><path class=\"anim-path\" d=\"M50 100 Q 100 50 150 100 T 150 150\" stroke-dasharray=\"300\" stroke-dashoffset=\"300\"/><circle cx=\"160\" cy=\"80\" r=\"20\" fill=\"#ff0055\" stroke=\"none\" opacity=\"0.8\"/></svg>"
    },
    {
      "title": "Extensions of the Body",
      "text": "<p>To practice Shodo, an artist relies on the <strong>Four Treasures of the Study</strong>: the brush, the ink, the inkstone, and the paper.</p><p>The slow, rhythmic grinding of the solid ink stick on the stone is a deeply meditative ritual that calms the mind before writing. The posture is completely vertical, using the power of the core rather than just the wrist.</p>",
      "svg": "<svg viewBox=\"0 0 200 200\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect x=\"50\" y=\"50\" width=\"100\" height=\"120\" rx=\"5\" fill=\"rgba(255, 255, 255, 0.05)\"/><path class=\"anim-path\" d=\"M180 20 L 150 160\" stroke-width=\"8\" stroke-linecap=\"round\" stroke-dasharray=\"200\" stroke-dashoffset=\"200\"/><path d=\"M149 160 C 130 170 150 190 155 190 C 160 190 160 170 151 160 Z\" fill=\"currentColor\" stroke=\"none\"/></svg>"
    },
    {
      "title": "A Record of the Spirit",
      "text": "<p>There is a famous saying: <em>'Sho wa hito nari,'</em> meaning 'handwriting is a mirror of the self.' Because dark ink on thin washi paper cannot ever be erased, every stroke is a permanent record of the artist's mental state at that exact fraction of a second.</p><p>To achieve true mastery, one must enter <strong>Mushin</strong> (no-mind)—allowing the brush to move naturally and without hesitation.</p>",
      "svg": "<svg viewBox=\"0 0 200 200\" fill=\"none\" stroke=\"currentColor\"><circle cx=\"100\" cy=\"100\" r=\"70\" fill=\"rgba(188, 19, 254, 0.1)\" stroke=\"none\"/><path class=\"anim-path\" d=\"M60 40 Q 80 30 100 60 Q 120 120 100 180\" stroke-width=\"20\" stroke-linecap=\"round\" stroke-dasharray=\"200\" stroke-dashoffset=\"200\"/><path d=\"M102 140 Q 105 160 105 185\" stroke-width=\"4\" stroke-linecap=\"round\"/></svg>"
    }
  ],
  "origami": [
    {
      "title": "A Paper History",
      "text": "<p>The word <strong>Origami</strong> comes from <em>oru</em> (to fold) and <em>kami</em> (paper). Originally, paper was so expensive that folding was reserved strictly for the elite and Shinto religious rituals.</p><p>The father of modern origami, Akira Yoshizawa, elevated it to a fine art. He pioneered 'wet-folding'—dampening thick paper to create soft curves and lifelike, sculptural models.</p>",
      "svg": "<svg viewBox=\"0 0 200 200\" fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"2\"><polygon points=\"100,50 160,90 100,150 40,90\" fill=\"rgba(0, 242, 255, 0.1)\"/><path class=\"anim-path\" d=\"M100 50 L 100 150 M 40 90 L 160 90\" stroke-dasharray=\"200\" stroke-dashoffset=\"200\"/></svg>"
    },
    {
      "title": "Folding by the Numbers",
      "text": "<p>Modern origami is deeply tied to complex mathematics. The <em>Huzita-Justin axioms</em> define the exact geometry of folding, allowing paper folders to solve algebra problems impossible with a classic compass and ruler.</p><p>Today, NASA uses origami principles to fold massive solar panels and space telescopes so they fit inside rockets, blooming only once they reach zero gravity.</p>",
      "svg": "<svg viewBox=\"0 0 200 200\" fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"2\"><g class=\"anim-path\" stroke-dasharray=\"300\" stroke-dashoffset=\"300\"><polygon points=\"100,70 120,90 100,110 80,90\"/><polygon points=\"120,50 140,70 120,90 100,70\"/><polygon points=\"100,110 120,130 100,150 80,130\"/></g></svg>"
    },
    {
      "title": "The Legend of 1,000 Cranes",
      "text": "<p>In Japanese folklore, the crane is a mystical creature that lives for a thousand years. Folding 1,000 paper cranes (<em>senbazuru</em>) is believed to grant a single wish.</p><p>This was immortalized by Sadako Sasaki, a young girl who folded cranes hoping to recover from radiation sickness after Hiroshima. Today, the crane remains the ultimate global symbol of healing, hope, and peace.</p>",
      "svg": "<svg viewBox=\"0 0 200 200\" fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"2\"><circle cx=\"100\" cy=\"100\" r=\"50\" fill=\"rgba(255, 0, 85, 0.1)\" stroke=\"none\"/><path class=\"anim-path\" d=\"M100 80 L 50 40 L 90 110 L 150 40 Z\" fill=\"rgba(255, 255, 255, 0.05)\" stroke-dasharray=\"300\" stroke-dashoffset=\"300\"/><polygon points=\"100,80 90,110 150,150 110,110\" fill=\"#00f2ff\" stroke=\"none\"/></svg>"
    }
  ]
};

const state = {
    isTransitioning: false,
    activeTopic: null,
    mouse: new THREE.Vector2(),
    targetMouse: new THREE.Vector2()
};

// ==========================================
// 2. THREE.JS SPATIAL VOID
// ==========================================
const canvas = document.getElementById('void-canvas-3d');
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

const ambientLight = new THREE.AmbientLight(0x404040, 2);
scene.add(ambientLight);
const pointLight = new THREE.PointLight(0x00f2ff, 2);
pointLight.position.set(5, 5, 5);
scene.add(pointLight);

const artifacts = [];

function createArtifact(geometry, color, position, id) {
    const material = new THREE.MeshStandardMaterial({ 
        color: color, 
        wireframe: true, 
        transparent: true, 
        opacity: 0.8 
    });
    const mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(...position);
    mesh.userData.id = id;
    mesh.userData.initialPos = mesh.position.clone();
    scene.add(mesh);
    artifacts.push(mesh);
    return mesh;
}

// 01 Ma: Sparse Sphere (The Void)
const meshMa = createArtifact(new THREE.SphereGeometry(1, 12, 12), 0x00f2ff, [-2, 1.5, -5], 'ma');
// 02 Wabi-Sabi: Organic Dodecahedron
const meshWabi = createArtifact(new THREE.DodecahedronGeometry(1, 0), 0xff0055, [-1.5, -1, -4], 'wabisabi');
// 03 Origami: Octahedron
const meshOri = createArtifact(new THREE.OctahedronGeometry(1.2, 0), 0x00f2ff, [1.5, -1.5, -5], 'origami');
// 04 Shodo: Torus Knot
const meshSho = createArtifact(new THREE.TorusKnotGeometry(0.7, 0.2, 100, 16), 0xbc13fe, [2, 1, -6], 'shodo');

camera.position.z = 7;

const partGeo = new THREE.BufferGeometry();
const partCount = 1000;
const posArray = new Float32Array(partCount * 3);
for(let i=0; i < partCount * 3; i++) {
    posArray[i] = (Math.random() - 0.5) * 30;
}
partGeo.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
const partMat = new THREE.PointsMaterial({ size: 0.02, color: 0x00f2ff, transparent: true, opacity: 0.5 });
const particles = new THREE.Points(partGeo, partMat);
scene.add(particles);

function animate() {
    requestAnimationFrame(animate);
    const time = Date.now() * 0.001;
    artifacts.forEach((m, i) => {
        m.rotation.y += 0.01;
        m.rotation.x += 0.005;
        m.position.y = m.userData.initialPos.y + Math.sin(time + i) * 0.2;
        
        const vector = m.position.clone().project(camera);
        const x = (vector.x * 0.5 + 0.5) * window.innerWidth;
        const y = (-vector.y * 0.5 + 0.5) * window.innerHeight;
        
        const label = document.getElementById(`label-${m.userData.id}`);
        if(label) {
            label.style.left = `${x}px`;
            label.style.top = `${y}px`;
            
            // Smoother hide if way off-screen or too close to edges
            const margin = 100;
            if (x < -margin || x > window.innerWidth + margin || y < -margin || y > window.innerHeight + margin) {
                label.style.opacity = '0';
                label.style.pointerEvents = 'none';
            } else {
                label.style.opacity = '1';
                label.style.pointerEvents = 'auto';
            }
        }
    });
    particles.rotation.y += 0.001;
    state.mouse.x = THREE.MathUtils.lerp(state.mouse.x, state.targetMouse.x, 0.05);
    state.mouse.y = THREE.MathUtils.lerp(state.mouse.y, state.targetMouse.y, 0.05);
    
    // Adjusted follow for mobile
    const multiplier = window.innerWidth < 768 ? 1 : 2;
    camera.position.x = state.mouse.x * multiplier;
    camera.position.y = -state.mouse.y * multiplier;
    camera.lookAt(0, 0, -5);
    renderer.render(scene, camera);
}
animate();

window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

window.addEventListener('mousemove', (e) => {
    state.targetMouse.x = (e.clientX / window.innerWidth) * 2 - 1;
    state.targetMouse.y = (e.clientY / window.innerHeight) * 2 - 1;
    const glow = document.getElementById('cursor-glow');
    if(glow) glow.style.transform = `translate(${e.clientX - 40}px, ${e.clientY - 40}px)`;
});

// Touch support for camera
window.addEventListener('touchmove', (e) => {
    state.targetMouse.x = (e.touches[0].clientX / window.innerWidth) * 2 - 1;
    state.targetMouse.y = (e.touches[0].clientY / window.innerHeight) * 2 - 1;
});

// ==========================================
// 3. GLITCH TRANSITION
// ==========================================
function triggerGlitch(topic) {
    if (state.isTransitioning) return;
    state.isTransitioning = true;
    state.activeTopic = topic;
    const overlay = document.getElementById('glitch-overlay');
    const title = document.getElementById('glitch-title');
    title.innerText = topic.toUpperCase();
    overlay.style.display = 'flex';
    const tl = gsap.timeline({
        onComplete: () => {
            document.getElementById('void-viewport').style.display = 'none';
            buildArticle(topic);
            showArticle();
        }
    });
    tl.fromTo(overlay, { opacity: 0 }, { opacity: 1, duration: 0.1 });
    for(let i=0; i<10; i++) {
        tl.to(overlay, { 
            clipPath: () => {
                const y1 = Math.random() * 100;
                const y2 = y1 + Math.random() * 20;
                return `polygon(0 ${y1}%, 100% ${y1}%, 100% ${y2}%, 0 ${y2}%)`;
            },
            x: (Math.random() - 0.5) * 50,
            duration: 0.05 
        });
    }
    tl.to(overlay, { clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)', x: 0, duration: 0.1 });
}

function showArticle() {
    const viewport = document.getElementById('article-viewport');
    viewport.style.display = 'block';
    gsap.to(viewport, { opacity: 1, duration: 0.5 });
    gsap.to('#glitch-overlay', { 
        opacity: 0, 
        duration: 0.5, 
        delay: 0.5,
        onComplete: () => {
            document.getElementById('glitch-overlay').style.display = 'none';
            state.isTransitioning = false;
            initScrollAnimations();
        }
    });
}

function returnToVoid() {
    const viewport = document.getElementById('article-viewport');
    gsap.to(viewport, {
        opacity: 0,
        duration: 0.5,
        onComplete: () => {
            viewport.style.display = 'none';
            document.getElementById('void-viewport').style.display = 'block';
            ScrollTrigger.getAll().forEach(t => t.kill());
            document.getElementById('scroll-progress').style.width = '0%';
        }
    });
}

// ==========================================
// 4. SCROLLYTELLING
// ==========================================
function buildArticle(topic) {
    const contentDiv = document.getElementById('article-content');
    contentDiv.innerHTML = '';
    const sections = articleData[topic];
    if (!sections) return;
    
    sections.forEach((sec, i) => {
        const html = `
            <div class="story-section" id="section-${i}">
                <div class="story-content">
                    <span class="text-[var(--neon-crimson)] font-mono text-sm mb-4 block tracking-tighter">// SEGMENT_${i+1}</span>
                    <h2 class="font-jp">${sec.title}</h2>
                    ${sec.text}
                </div>
                <div class="story-visual-container">
                    <div class="w-full h-full flex items-center justify-center opacity-80 scale-150">
                        ${sec.svg.split('class="anim-path"').join('class="neon-path"')
                               .split("class='anim-path'").join('class="neon-path"')
                               .split('class=\"anim-path\"').join('class="neon-path"')}
                    </div>
                </div>
            </div>
        `;
        contentDiv.insertAdjacentHTML('beforeend', html);
    });
}

function initScrollAnimations() {
    gsap.to('#scroll-progress', {
        width: '100%',
        ease: 'none',
        scrollTrigger: {
            trigger: '#article-content',
            scroller: '#article-viewport',
            start: 'top top',
            end: 'bottom bottom',
            scrub: 0.3
        }
    });

    const paths = document.querySelectorAll('.neon-path');
    paths.forEach(path => {
        gsap.to(path, {
            strokeDashoffset: 0,
            scrollTrigger: {
                trigger: path.closest('.story-section'),
                scroller: '#article-viewport',
                start: 'top 60%',
                end: 'bottom 40%',
                scrub: 1
            }
        });
    });

    const contents = document.querySelectorAll('.story-content');
    contents.forEach(content => {
        gsap.from(content, {
            x: -50,
            opacity: 0,
            filter: 'blur(10px)',
            scrollTrigger: {
                trigger: content,
                scroller: '#article-viewport',
                start: 'top 80%',
                toggleActions: 'play none none reverse'
            }
        });
    });
}
