gsap.registerPlugin(ScrollTrigger);

// ==========================================
// 1. ATOMIC DATA (Individual Standalone Topics)
// ==========================================
const articleData = {
  "wabisabi": {
    "topic": "WABI-SABI",
    "title": "The Beauty of Being Real",
    "text": `
      <p><strong>History:</strong> In the 1500s, Japan was obsessed with fancy gold cups. But tea master <strong>Sen no Rikyū</strong> rebelled. He used rough, mud-like bowls to show that being real is cooler than being rich. This started Wabi-Sabi.</p>
      <p><strong>Process:</strong> It follows three rules: nothing lasts, nothing is finished, and nothing is perfect. Instead of seeing a scratch as damage, you see it as a story. It’s about letting things age naturally.</p>
      <p><strong>Cultural Importance:</strong> It’s the opposite of 'fast fashion.' It’s why old, thrashed-up sneakers have 'character.' It teaches us to stop stressing about being perfect on social media and enjoy the messy truth.</p>
      <p><strong>Mind-Blowing Fact:</strong> Steve Jobs loved this idea. He insisted that the <em>inside</em> of a computer—where no one looks—should be just as beautiful as the outside, reflecting Wabi-Sabi's hidden soul.</p>
    `,
    "svg": "<svg viewBox=\"0 0 200 200\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linejoin=\"round\"><path d=\"M50 80 C 50 140 80 160 100 160 C 120 160 150 140 150 80 Z\" fill=\"rgba(255, 255, 255, 0.05)\"/><ellipse cx=\"100\" cy=\"80\" rx=\"50\" ry=\"15\" fill=\"rgba(0, 242, 255, 0.1)\"/><path class=\"anim-path\" d=\"M70 90 L 85 120 L 75 140 M 85 120 L 110 130 L 120 155\" stroke=\"#ff0055\" stroke-width=\"4\" stroke-dasharray=\"150\" stroke-dashoffset=\"150\"/></svg>"
  },
  "kintsugi": {
    "topic": "KINTSUGI",
    "title": "The Golden Repair",
    "text": `
      <p><strong>History:</strong> 600 years ago, a Shogun broke his favorite bowl. It was fixed with ugly metal staples. Japanese craftsmen invented a better way: using gold-dusted tree sap to turn the cracks into art.</p>
      <p><strong>Process:</strong> It’s a slow-motion puzzle. Shards are bonded with <em>Urushi</em> lacquer and dusted with real gold. It takes weeks to dry, creating a 'map' of the accident written in precious metal.</p>
      <p><strong>Cultural Importance:</strong> It represents **resilience**. You are allowed to break, and you can come back stronger and more beautiful. It’s a rebellion against throwing things away.</p>
      <p><strong>Mind-Blowing Fact:</strong> It became so popular that people used to *deliberately* smash expensive pottery just to get it repaired with gold to show off how cool it looked!</p>
    `,
    "svg": "<svg viewBox=\"0 0 200 200\" fill=\"none\" stroke=\"#ff0055\" stroke-width=\"2\"><path d=\"M40 60 L 160 60 L 140 160 L 60 160 Z\" opacity=\"0.2\"/><path class=\"anim-path\" d=\"M80 60 L 100 100 L 90 160\" stroke-width=\"4\" stroke-dasharray=\"200\" stroke-dashoffset=\"200\"/><path class=\"anim-path\" d=\"M120 60 L 110 90 L 130 130\" stroke-width=\"4\" stroke-dasharray=\"200\" stroke-dashoffset=\"200\"/></svg>"
  },
  "shodo": {
    "topic": "SHODO",
    "title": "Writing with No Undo Button",
    "text": `
      <p><strong>History:</strong> Monk <strong>Kūkai</strong> revolutionized Japanese writing 1,200 years ago. He turned stiff symbols into a flowing style called <em>Wayō</em>. He could write so fast and well they said he had 'Three Brushes.'</p>
      <p><strong>Process:</strong> You spend 15 minutes grinding ink on a stone—a 'loading screen' for your brain. Once the brush hits the paper, there’s no Ctrl+Z. Every stroke shows exactly how you felt at that second.</p>
      <p><strong>Cultural Importance:</strong> Samurai learned Shodo to stay calm under pressure. Today, it’s a high-school sport where teams paint 30-foot scrolls with 5kg brushes while dancing on stage!</p>
      <p><strong>Mind-Blowing Fact:</strong> Traditional ink is edible! It’s made from burnt tree soot and vegetable oil. Master ink sticks aged for 50+ years are worth thousands because the color gets 'shinner' with age.</p>
    `,
    "svg": "<svg viewBox=\"0 0 200 200\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"15\" stroke-linecap=\"round\"><path class=\"anim-path\" d=\"M50 100 Q 100 50 150 100 T 150 150\" stroke-dasharray=\"300\" stroke-dashoffset=\"300\"/><circle cx=\"160\" cy=\"80\" r=\"20\" fill=\"#ff0055\" stroke=\"none\" opacity=\"0.8\"/></svg>"
  },
  "ukiyoe": {
    "topic": "UKIYO-E",
    "title": "The Ancestor of Anime",
    "text": `
      <p><strong>History:</strong> In the 1600s, artists made woodblock prints of actors and ghost stories. These 'Pictures of the Floating World' were the first mass-produced pop culture, sold for the price of noodles.</p>
      <p><strong>Process:</strong> It was a team sport: artist, carver, and printer. It works exactly like Photoshop 'layers'—each color needed its own carved block. It was high-speed media for the 18th century.</p>
      <p><strong>Cultural Importance:</strong> Without Ukiyo-e, we wouldn't have Manga or Anime. Its bold outlines and flat colors inspired everyone from comic artists to Van Gogh.</p>
      <p><strong>Mind-Blowing Fact:</strong> These prints were so common they were used as **packing paper** to wrap tea cups. Europeans discovered this 'high art' because it was used like bubble wrap!</p>
    `,
    "svg": "<svg viewBox=\"0 0 200 200\" fill=\"none\" stroke=\"#00f2ff\" stroke-width=\"2\"><rect x=\"40\" y=\"40\" width=\"120\" height=\"120\" rx=\"5\" opacity=\"0.2\"/><path class=\"anim-path\" d=\"M60 140 Q 100 60 140 140\" stroke-width=\"4\" stroke-dasharray=\"200\" stroke-dashoffset=\"200\"/><circle cx=\"130\" cy=\"70\" r=\"15\" fill=\"#ff0055\" stroke=\"none\"/></svg>"
  },
  "origami": {
    "topic": "ORIGAMI",
    "title": "3D Printing with Paper",
    "text": `
      <p><strong>History:</strong> Origami was once a sacred Shinto ritual. The first manual, <em>How to Fold 1,000 Cranes</em> (1797), turned it into a hobby. Folding 1,000 cranes is said to grant a single wish.</p>
      <p><strong>Process:</strong> Modern origami is math. Experts use 'Axioms' to turn one square into anything without scissors. 'Wet-folding' allows for soft, lifelike curves that stay permanent when dry.</p>
      <p><strong>Cultural Importance:</strong> It saves lives. Doctors use 'origami stents' that travel through vessels and 'bloom' in the heart. It’s also used to fold airbags so they pop open in a millisecond.</p>
      <p><strong>Mind-Blowing Fact:</strong> NASA uses the 'Miura-fold' to pack football-field-sized solar panels into tiny rockets. In space, they unfold perfectly with one pull—the same pattern leaves use to bloom!</p>
    `,
    "svg": "<svg viewBox=\"0 0 200 200\" fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"2\"><polygon points=\"100,50 160,90 100,150 40,90\" fill=\"rgba(0, 242, 255, 0.1)\"/><path class=\"anim-path\" d=\"M100 50 L 100 150 M 40 90 L 160 90\" stroke-dasharray=\"200\" stroke-dashoffset=\"200\"/></svg>"
  },
  "kumiki": {
    "topic": "KUMIKI",
    "title": "The Zero-Glue LEGO",
    "text": `
      <p><strong>History:</strong> Master carpenters needed to build temples that wouldn't rot or rust. They invented Kumiki—complex wood puzzles that lock together with geometry. Some have stood for 1,000 years.</p>
      <p><strong>Process:</strong> It's Minecraft IRL. Beams have hidden slots carved to 0.1mm precision. When the 'key' slides in, the whole building becomes one solid unit. No nails, no screws, no glue.</p>
      <p><strong>Cultural Importance:</strong> These buildings are earthquake-proof. Because they aren't nailed down, they 'dance' and flex during tremors instead of snapping. Ancient tech that beats modern concrete.</p>
      <p><strong>Mind-Blowing Fact:</strong> Wooden pagodas built this way have survived **1,300 years** of earthquakes and typhoons that destroyed modern buildings right next to them.</p>
    `,
    "svg": "<svg viewBox=\"0 0 200 200\" fill=\"none\" stroke=\"#ff0055\" stroke-width=\"2\"><rect x=\"60\" y=\"60\" width=\"80\" height=\"80\" opacity=\"0.2\"/><path class=\"anim-path\" d=\"M60 100 L 140 100 M 100 60 L 100 140\" stroke-width=\"6\" stroke-dasharray=\"200\" stroke-dashoffset=\"200\"/></svg>"
  },
  "ma": {
    "topic": "MA",
    "title": "The Power of the Pause",
    "text": `
      <p><strong>History:</strong> Designers realized what you <em>don't</em> add is the key. The word <strong>Ma</strong> shows a door with the moon shining through. It officially started in 11th-century garden design books.</p>
      <p><strong>Process:</strong> It’s the 'beat drop' of design. The silence before the drop is what makes it feel powerful. It forces you to focus on the 'vibe' of the moment rather than just being busy.</p>
      <p><strong>Cultural Importance:</strong> In a world of noise, Ma is a 'mute button' for your brain. It’s used in minimalist posters and bows to give breathing room. A clean room feels better because of Ma.</p>
      <p><strong>Mind-Blowing Fact:</strong> Listening to music that uses Ma physically slows your heart rate. The silence triggers a 'relaxation mode' in your nervous system, calming your body instantly.</p>
    `,
    "svg": "<svg viewBox=\"0 0 200 200\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><circle cx=\"100\" cy=\"100\" r=\"80\" stroke-dasharray=\"4 8\" opacity=\"0.3\"/><circle cx=\"100\" cy=\"100\" r=\"70\" fill=\"rgba(0, 242, 255, 0.1)\"/><path class=\"anim-path\" d=\"M100 20 L 100 180\" stroke=\"#ff0055\" stroke-dasharray=\"200\" stroke-dashoffset=\"200\"/></svg>"
  },
  "hanko": {
    "topic": "HANKO",
    "title": "The Analog Blockchain",
    "text": `
      <p><strong>History:</strong> You don't sign your name in Japan; you 'stamp' it. <strong>Hanko</strong> seals have been used since 701 AD. Every person has a unique design registered with the government as their 'face.'</p>
      <p><strong>Process:</strong> You dip the seal into red cinnabar paste. The pressure matters—too light is invalid, too heavy is messy. It's a physical key to your legal identity that's hard to forge.</p>
      <p><strong>Cultural Importance:</strong> You need a Hanko for bank accounts and houses. Japan keeps them because physical objects are harder to hack. It’s a mix of ancient tradition and security.</p>
      <p><strong>Mind-Blowing Fact:</strong> Japan is in a 'culture war' over Hankos! Remote work pushed digital files, but many fight to keep the stamps. Some artists even carve tiny hidden pictures inside the names!</p>
    `,
    "svg": "<svg viewBox=\"0 0 200 200\" fill=\"none\" stroke=\"#bc13fe\" stroke-width=\"2\"><circle cx=\"100\" cy=\"100\" r=\"60\" opacity=\"0.2\"/><path class=\"anim-path\" d=\"M100 60 L 100 140 M 70 80 L 130 120\" stroke-width=\"8\" stroke-dasharray=\"200\" stroke-dashoffset=\"200\"/><rect x=\"85\" y=\"85\" width=\"30\" height=\"30\" fill=\"#ff0055\" stroke=\"none\"/></svg>"
  }
};

const state = {
    isTransitioning: false,
    activeTopic: null,
    mouse: new THREE.Vector2(),
    targetMouse: new THREE.Vector2()
};

// ==========================================
// 2. THREE.JS SPATIAL VOID (Wide Atomic Layout)
// ==========================================
const canvas = document.getElementById('void-canvas-3d');
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

scene.add(new THREE.AmbientLight(0x404040, 2.5));
const pointLight = new THREE.PointLight(0x00f2ff, 2.5);
pointLight.position.set(10, 10, 10);
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
    mesh.scale.set(1.2, 1.2, 1.2);
    mesh.position.set(...position);
    mesh.userData.id = id;
    mesh.userData.initialPos = mesh.position.clone();
    scene.add(mesh);
    artifacts.push(mesh);
    return mesh;
}

// SIGNIFICANTLY SPREAD OUT to prevent overlap
createArtifact(new THREE.DodecahedronGeometry(1, 0), 0xff0055, [-7, 4, -12], 'wabisabi');
createArtifact(new THREE.IcosahedronGeometry(1, 0), 0xff0055, [-8, -2, -10], 'kintsugi');
createArtifact(new THREE.TorusKnotGeometry(0.7, 0.25, 100, 16), 0xbc13fe, [-2, 6, -14], 'shodo');
createArtifact(new THREE.TorusGeometry(1, 0.2, 16, 100), 0x00f2ff, [4, 6, -12], 'ukiyoe');
createArtifact(new THREE.OctahedronGeometry(1.2, 0), 0x00f2ff, [8, 2, -10], 'origami');
createArtifact(new THREE.BoxGeometry(1.5, 1.5, 1.5), 0x00f2ff, [7, -4, -12], 'kumiki');
createArtifact(new THREE.SphereGeometry(1.2, 12, 12), 0xbc13fe, [0, -7, -14], 'ma');
createArtifact(new THREE.CylinderGeometry(0.7, 0.7, 1.8, 32), 0xff0055, [-5, -6, -12], 'hanko');

camera.position.z = 10; // Moved camera back to frame the wider spread

function animate() {
    requestAnimationFrame(animate);
    const time = Date.now() * 0.001;
    artifacts.forEach((m, i) => {
        m.rotation.y += 0.008;
        m.rotation.z += 0.004;
        m.position.y = m.userData.initialPos.y + Math.sin(time + i) * 0.4;
        
        const vector = m.position.clone().project(camera);
        const x = (vector.x * 0.5 + 0.5) * window.innerWidth;
        const y = (-vector.y * 0.5 + 0.5) * window.innerHeight;
        
        const label = document.getElementById(`label-${m.userData.id}`);
        if(label) {
            label.style.left = `${x}px`;
            label.style.top = `${y}px`;
            const margin = 50;
            if (x < -margin || x > window.innerWidth + margin || y < -margin || y > window.innerHeight + margin) {
                label.style.opacity = '0';
                label.style.pointerEvents = 'none';
            } else {
                label.style.opacity = '1';
                label.style.pointerEvents = 'auto';
            }
        }
    });
    
    state.mouse.x = THREE.MathUtils.lerp(state.mouse.x, state.targetMouse.x, 0.05);
    state.mouse.y = THREE.MathUtils.lerp(state.mouse.y, state.targetMouse.y, 0.05);
    const multiplier = window.innerWidth < 768 ? 2 : 4;
    camera.position.x = state.mouse.x * multiplier;
    camera.position.y = -state.mouse.y * multiplier;
    camera.lookAt(0, 0, -8);
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
    if(glow) glow.style.transform = `translate(${e.clientX - 48}px, ${e.clientY - 48}px)`;
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
    viewport.scrollTop = 0;
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

function buildArticle(topicKey) {
    const contentDiv = document.getElementById('article-content');
    contentDiv.innerHTML = '';
    const sec = articleData[topicKey];
    if (!sec) return;
    
    const html = `
        <article class="story-section" id="section-${topicKey}">
            <div class="story-content">
                <span class="text-[var(--neon-crimson)] font-mono text-sm mb-4 block tracking-tighter">// STANDALONE_UNIT: ${topicKey.toUpperCase()}</span>
                <h2>${sec.title}</h2>
                <div class="article-body">${sec.text}</div>
            </div>
            <div class="story-visual-container">
                <div class="w-full h-full flex items-center justify-center opacity-80 scale-150">
                    ${sec.svg.split('class="anim-path"').join('class="neon-path"')
                           .split("class='anim-path'").join('class="neon-path"')
                           .split('class=\"anim-path\"').join('class="neon-path"')}
                </div>
            </div>
        </article>
    `;
    contentDiv.insertAdjacentHTML('beforeend', html);
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
                start: 'top center',
                end: 'bottom center',
                scrub: 1
            }
        });
    });
}
