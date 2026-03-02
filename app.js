gsap.registerPlugin(ScrollTrigger);

// ==========================================
// 1. DATA (Expanded & Accessible Content)
// ==========================================
const articleData = {
  "ma": [
    {
      "title": "Ma: The Power of the Pause",
      "text": `
        <p><strong>History:</strong> A long time ago, Japanese builders and gardeners realized that what you <em>don't</em> put in a room is just as important as what you do. The word <strong>Ma (間)</strong> is written with a symbol that shows a door with the moon shining through a crack. It represents that tiny moment of light in the darkness. It officially started in the 11th century with a book called the <em>Sakuteiki</em>, which told gardeners that the empty space between rocks was the most important part of the whole garden.</p>
        <p><strong>Process:</strong> Think of Ma like the 'beat drop' in your favorite song. The silence right before the bass hits is what makes the drop feel so powerful. In Japanese houses, they use something called an <em>engawa</em>—it's a porch that isn't quite 'inside' and isn't quite 'outside.' It’s a middle ground where you can just sit and exist. In theater, actors use Ma by stopping perfectly still in the middle of a scene, forcing the audience to focus on the 'vibe' of the moment rather than just the dialogue.</p>
        <p><strong>Cultural Importance:</strong> In our world of constant notifications, doomscrolling, and noise, Ma is like a 'mute button' for your brain. It’s used in everything from cool minimalist posters to the way people bow to each other. It’s about giving people 'breathing room' so they don't feel overwhelmed. It’s the reason a clean, empty room feels so much more relaxing than a messy one.</p>
        <p><strong>Mind-Blowing Fact:</strong> Scientists have actually studied this! When people listen to traditional Japanese music that uses Ma, their heart rate actually slows down. The silence between the notes triggers a 'relaxation mode' in your nervous system, physically calming your body down just by leaving space in the music.</p>
      `,
      "svg": "<svg viewBox=\"0 0 200 200\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><circle cx=\"100\" cy=\"100\" r=\"80\" stroke-dasharray=\"4 8\" opacity=\"0.3\"/><circle cx=\"100\" cy=\"100\" r=\"70\" fill=\"rgba(0, 242, 255, 0.1)\"/><path class=\"anim-path\" d=\"M100 20 L 100 180\" stroke=\"#ff0055\" stroke-dasharray=\"200\" stroke-dashoffset=\"200\"/></svg>"
    }
  ],
  "wabisabi": [
    {
      "title": "Wabi-Sabi: The Beauty of Being Real",
      "text": `
        <p><strong>History:</strong> In the 1500s, Japan was obsessed with fancy, expensive gold cups from China. But a famous tea master named <strong>Sen no Rikyū</strong> decided he’d had enough. He started using simple, rough, hand-made bowls that looked like they were made of mud. The powerful leader of Japan at the time loved his 'Gold Tea Room,' but Rikyū built a tiny shack made of straw. He wanted to show that being real and humble was way cooler than being rich and fake. This 'rebellion' started the whole Wabi-Sabi movement.</p>
        <p><strong>Process:</strong> Wabi-Sabi is all about three simple rules: nothing lasts forever, nothing is ever totally finished, and nothing is perfect. The best example is <em>Kintsugi</em>. When a bowl breaks, instead of throwing it away, they glue it back together with real gold. They don't try to hide the cracks; they make them the star of the show. It’s like saying, 'Yeah, I broke, but look how much cooler I look now that I’ve been fixed.'</p>
        <p><strong>Cultural Importance:</strong> This is a huge deal today because it’s the opposite of 'fast fashion' or always needing the newest iPhone. It’s about why you love your old, thrashed-up sneakers or a hoodie that has a few holes in it—it has 'character.' Wabi-Sabi teaches us to stop stressing about being perfect on social media and to appreciate the messy, real parts of life.</p>
        <p><strong>Mind-Blowing Fact:</strong> Even Steve Jobs, the guy who started Apple, was obsessed with this. He loved the idea that the <em>inside</em> of a computer—the part no one ever sees—should be just as beautiful as the outside. He wanted Apple products to have that hidden 'soul' that Wabi-Sabi is all about.</p>
      `,
      "svg": "<svg viewBox=\"0 0 200 200\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linejoin=\"round\"><path d=\"M50 80 C 50 140 80 160 100 160 C 120 160 150 140 150 80 Z\" fill=\"rgba(255, 255, 255, 0.05)\"/><ellipse cx=\"100\" cy=\"80\" rx=\"50\" ry=\"15\" fill=\"rgba(0, 242, 255, 0.1)\"/><path class=\"anim-path\" d=\"M70 90 L 85 120 L 75 140 M 85 120 L 110 130 L 120 155\" stroke=\"#ff0055\" stroke-width=\"4\" stroke-dasharray=\"150\" stroke-dashoffset=\"150\"/></svg>"
    }
  ],
  "shodo": [
    {
      "title": "Shodo: Writing with No Undo Button",
      "text": `
        <p><strong>History:</strong> Writing in Japan used to be very stiff and formal until a monk named <strong>Kūkai</strong> came along about 1,200 years ago. He was basically the first 'writing influencer.' He took the complicated Chinese symbols and turned them into a smooth, flowing style called <em>Wayō</em>. It made writing look more like a dance and less like a textbook. People were so amazed by his skills that they said he had 'Three Brushes' because he could write so fast and beautifully.</p>
        <p><strong>Process:</strong> Shodo isn't just picking up a pen. You have to use 'The Four Treasures': a brush, an ink stick, an inkstone, and special paper. You spend 15 minutes grinding the ink stick into water on the stone. This is like a 'loading screen' for your brain—it calms you down before you start. Once you touch the brush to the thin paper, that’s it. You can't erase it, you can't white it out, and there’s no 'Ctrl+Z.' Every stroke shows exactly how you were feeling at that second.</p>
        <p><strong>Cultural Importance:</strong> Back in the day, Samurai warriors had to learn Shodo because it taught them how to stay calm under pressure. If you can't keep your hand steady while writing, you can't keep it steady with a sword. Today, it’s a massive sport in Japanese schools. Teams of students perform on giant stages, dancing and painting huge 30-foot scrolls with brushes that weigh as much as a small dog!</p>
        <p><strong>Mind-Blowing Fact:</strong> Traditional calligraphy ink is actually edible! It’s made from the soot of burnt trees mixed with a special glue made from animal hide. Some master ink sticks are so old (over 100 years!) that they are worth thousands of dollars because the color becomes deeper and 'shinier' as the ink ages.</p>
      `,
      "svg": "<svg viewBox=\"0 0 200 200\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"15\" stroke-linecap=\"round\"><path class=\"anim-path\" d=\"M50 100 Q 100 50 150 100 T 150 150\" stroke-dasharray=\"300\" stroke-dashoffset=\"300\"/><circle cx=\"160\" cy=\"80\" r=\"20\" fill=\"#ff0055\" stroke=\"none\" opacity=\"0.8\"/></svg>"
    }
  ],
  "origami": [
    {
      "title": "Origami: 3D Printing with Paper",
      "text": `
        <p><strong>History:</strong> Before it was something you did in art class, Origami was a sacred ritual for the gods. In the 1600s, people used it to fold special 'good luck' charms called <em>Noshi</em> for gifts. Then, in 1797, the first-ever instruction book was published called <em>How to Fold 1,000 Cranes</em>. It turned folding from a secret religious practice into a fun hobby for everyone. The '1,000 Cranes' legend says that if you fold a thousand of them, you get one wish granted.</p>
        <p><strong>Process:</strong> Modern origami is actually high-level math. Experts use 'Axioms' (which are like the 'laws of folding') to figure out how to turn one flat square of paper into literally anything without ever using scissors or glue. There’s even a style called 'wet-folding' where you dampen the paper so you can sculpt it into soft, realistic shapes that look like they belong in a museum.</p>
        <p><strong>Cultural Importance:</strong> Origami is literally helping people live longer. Doctors use 'origami stents'—tiny tubes that are folded up small to travel through your blood vessels and then 'bloom' open once they reach the heart. It’s also used to fold up giant air-bags in cars so they can pop open in a fraction of a second during a crash. It’s about the science of 'packing' big things into small spaces.</p>
        <p><strong>Mind-Blowing Fact:</strong> NASA uses origami to build the future! They use a pattern called the 'Miura-fold' to pack massive solar panels (the size of a football field) into tiny rockets. Once the rocket is in space, the panels unfold perfectly with just one pull. It’s the same pattern nature uses to unfold leaves on a tree in the spring!</p>
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
