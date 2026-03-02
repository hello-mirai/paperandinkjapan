gsap.registerPlugin(ScrollTrigger);

// ==========================================
// 1. DATA (High-Engagement/High-Fact Audit)
// ==========================================
const articleData = {
  "ma": [
    {
      "title": "Ma: The Architecture of the Void",
      "text": `
        <p><strong>History:</strong> While often simplified as 'space,' the concept of <strong>Ma (間)</strong> emerged from ancient Japanese agricultural and architectural timing. The kanji itself originally depicted a door (門) with the sun (日) inside, later replaced by the moon (月), symbolizing the precise moment moonlight leaks through a structural gap. It was first formalized in the 11th-century <em>Sakuteiki</em>, the oldest known treatise on garden design, where the 'space between rocks' was considered more vital than the rocks themselves.</p>
        <p><strong>Process:</strong> Ma operates on the principle of <em>negative capability</em>. In Japanese Noh theater, Ma is the 'pregnant pause'—the frozen moment of silence between a drum beat and a vocalization. It requires the viewer to mentally complete the action. In architecture, it is the <em>engawa</em> (veranda), a transitional space that is neither inside nor outside, blurring the boundary between the human and natural worlds.</p>
        <p><strong>Cultural Importance:</strong> In a hyper-dense society like Tokyo, Ma is a psychological survival mechanism. It informs everything from <em>O-mikuji</em> (the spacing of fortunes) to the 'white space' in high-end graphic design, providing a sensory 'reset' that prevents cognitive overload and fosters deep contemplation.</p>
        <p><strong>Mind-Blowing Fact:</strong> Research in spatial acoustics has shown that the specific 'Ma' intervals in traditional Japanese music (Gagaku) can actually lower a listener's heart rate by triggering a parasympathetic nervous system response—the physical body literally relaxes into the silence.</p>
      `,
      "svg": "<svg viewBox=\"0 0 200 200\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><circle cx=\"100\" cy=\"100\" r=\"80\" stroke-dasharray=\"4 8\" opacity=\"0.3\"/><circle cx=\"100\" cy=\"100\" r=\"70\" fill=\"rgba(0, 242, 255, 0.1)\"/><path class=\"anim-path\" d=\"M100 20 L 100 180\" stroke=\"#ff0055\" stroke-dasharray=\"200\" stroke-dashoffset=\"200\"/></svg>"
    }
  ],
  "wabisabi": [
    {
      "title": "Wabi-Sabi: The Elegance of Entropy",
      "text": `
        <p><strong>History:</strong> Wabi-Sabi rose to prominence in the 16th century as a radical aesthetic protest. The tea master <strong>Sen no Rikyū</strong> rejected the 'daimyo' preference for opulent, gold-leafed Chinese ceramics, instead championing rough, hand-formed Korean peasant bowls. This culminated in a famous aesthetic clash with the warlord Toyotomi Hideyoshi, who preferred a 'Golden Tea Room'—Rikyū chose a two-mat hut of mud and straw, forever cementing the beauty of the humble.</p>
        <p><strong>Process:</strong> The aesthetic is governed by three fundamental truths: nothing is perfect, nothing is finished, and nothing is forever. It is physically manifested through <em>Kintsugi</em>—the process of repairing broken pottery with lacquer mixed with powdered gold. Rather than hiding the 'scar,' the repair highlights the object's history, making it more valuable because of its fracture, not despite it.</p>
        <p><strong>Cultural Importance:</strong> Wabi-Sabi acts as an ethical counterweight to modern consumerism and 'planned obsolescence.' By finding beauty in the aged, the weathered, and the patinated, it encourages a lifestyle of <em>Mottainai</em> (regret over waste) and a profound respect for the life-cycle of all materials.</p>
        <p><strong>Mind-Blowing Fact:</strong> The legendary 'Wabi' aesthetic was so influential that it partially inspired Steve Jobs' design philosophy for the early Apple products—specifically the idea that the back of a device (which few people see) should be as meticulously designed as the front, reflecting a hidden, 'incomplete' integrity.</p>
      `,
      "svg": "<svg viewBox=\"0 0 200 200\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linejoin=\"round\"><path d=\"M50 80 C 50 140 80 160 100 160 C 120 160 150 140 150 80 Z\" fill=\"rgba(255, 255, 255, 0.05)\"/><ellipse cx=\"100\" cy=\"80\" rx=\"50\" ry=\"15\" fill=\"rgba(0, 242, 255, 0.1)\"/><path class=\"anim-path\" d=\"M70 90 L 85 120 L 75 140 M 85 120 L 110 130 L 120 155\" stroke=\"#ff0055\" stroke-width=\"4\" stroke-dasharray=\"150\" stroke-dashoffset=\"150\"/></svg>"
    }
  ],
  "shodo": [
    {
      "title": "Shodo: The Kinetic Mirror",
      "text": `
        <p><strong>History:</strong> Japanese calligraphy, or <strong>Shodo</strong>, arrived via China in the 6th century, but it was the 9th-century monk <strong>Kūkai</strong> (known as one of the 'Three Great Brushes') who revolutionized it. He adapted Chinese characters into <em>Hiragana</em>, a phonetic script with flowing, cursive lines that allowed for a softer, uniquely Japanese emotional expression known as <em>Wayō</em>.</p>
        <p><strong>Process:</strong> Shodo is a high-stakes performance of 'The Four Treasures': the brush (fude), the ink stick (sumi), the inkstone (suzuri), and the paper (washi). The artist must grind the solid ink stick into water on the stone—a meditative act that can take 15 minutes to reach the perfect viscosity. Once the brush touches the paper, there is no correction. The ink's carbon-based particles bond instantly with the fibers of the washi.</p>
        <p><strong>Cultural Importance:</strong> In the Edo period, calligraphy was a mandatory skill for the Samurai class, viewed as a physical manifestation of one's discipline and <em>Ki</em> (life energy). Today, it survives in high-school 'Shodo Performance' competitions, where teams of students dance while painting massive characters on 10-meter-wide scrolls using giant 5kg brushes.</p>
        <p><strong>Mind-Blowing Fact:</strong> Authentic <em>Sumi</em> ink is technically edible. It is traditionally made from the soot of burnt pine trees or vegetable oils mixed with animal hide glue—some master-grade ink sticks are aged for over 50 years to improve their depth of blackness and luster.</p>
      `,
      "svg": "<svg viewBox=\"0 0 200 200\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"15\" stroke-linecap=\"round\"><path class=\"anim-path\" d=\"M50 100 Q 100 50 150 100 T 150 150\" stroke-dasharray=\"300\" stroke-dashoffset=\"300\"/><circle cx=\"160\" cy=\"80\" r=\"20\" fill=\"#ff0055\" stroke=\"none\" opacity=\"0.8\"/></svg>"
    }
  ],
  "origami": [
    {
      "title": "Origami: Folding the Future",
      "text": `
        <p><strong>History:</strong> Long before it was a child's hobby, <strong>Origami</strong> (oru 'fold' + kami 'paper') was a sacred Shinto ritual. In the Heian period, <em>Noshi</em>—folded paper strips accompanying gifts—were used as complex social markers. The first instructional book, <em>Hiden Senbazuru Orikata</em> (1797), revealed the secrets of folding interconnected cranes, marking the transition from ceremonial to recreational art.</p>
        <p><strong>Process:</strong> Modern 'Technical Origami' utilizes the <em>Kawasaki Theorem</em> and <em>Huzita-Justin axioms</em> to determine foldability. It has moved from purely linear folds to 3D 'wet-folding,' a technique pioneered by Akira Yoshizawa where paper is dampened to allow for sculptural, organic curves that maintain their shape after drying.</p>
        <p><strong>Cultural Importance:</strong> Origami is the bridge between art and advanced engineering. Its principles are used to design heart stents that travel through arteries and deploy in the heart, as well as deployable air-bags in vehicles. It teaches a fundamental lesson in <em>spatial efficiency</em>: how to pack a massive 2D surface into a compact 3D volume.</p>
        <p><strong>Mind-Blowing Fact:</strong> NASA engineers use the 'Miura-ori' fold—a specific origami pattern found in the way leaves unfold in spring—to pack massive solar arrays into tiny rockets. Once in space, a single pull allows the entire array to bloom open in seconds without a single mechanical motor.</p>
      `,
      "svg": "<svg viewBox=\"0 0 200 200\" fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"2\"><polygon points=\"100,50 160,90 100,150 40,90\" fill=\"rgba(0, 242, 255, 0.1)\"/><path class=\"anim-path\" d=\"M100 50 L 100 150 M 40 90 L 160 90\" stroke-dasharray=\"200\" stroke-dashoffset=\"200\"/></svg>"
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

window.addEventListener('touchmove', (e) => {
    state.targetMouse.x = (e.touches[0].clientX / window.innerWidth) * 2 - 1;
    state.targetMouse.y = (e.touches[0].clientY / window.innerHeight) * 2 - 1;
});

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
