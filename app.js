gsap.registerPlugin(ScrollTrigger);

// ==========================================
// 1. DATA (The Four Pillars - Expanded Teen Content)
// ==========================================
const articleData = {
  "glitch": [
    {
      "topic": "WABI-SABI",
      "title": "The Beauty of Being Real",
      "text": `
        <p><strong>History:</strong> In the 1500s, Japan was obsessed with fancy, expensive gold cups from China. But a famous tea master named <strong>Sen no Rikyū</strong> decided he’d had enough. He started using simple, rough, hand-made bowls that looked like they were made of mud. The powerful leader of Japan at the time loved his 'Gold Tea Room,' but Rikyū built a tiny shack made of straw. He wanted to show that being real and humble was way cooler than being rich and fake. This 'rebellion' started the whole Wabi-Sabi movement.</p>
        <p><strong>Process:</strong> Wabi-Sabi is all about three simple rules: nothing lasts forever, nothing is ever totally finished, and nothing is perfect. It’s an aesthetic mindset. Instead of seeing a scratch on your phone or a hole in your jeans as 'damage,' you see it as part of that object's unique story. It’s about letting things age naturally and finding the 'vibe' in the wear and tear.</p>
        <p><strong>Cultural Importance:</strong> This is a huge deal today because it’s the opposite of 'fast fashion' or always needing the newest iPhone. It’s about why you love your old, thrashed-up sneakers or a hoodie that has a few holes in it—it has 'character.' Wabi-Sabi teaches us to stop stressing about being perfect on social media and to appreciate the messy, real parts of life.</p>
        <p><strong>Mind-Blowing Fact:</strong> Even Steve Jobs, the guy who started Apple, was obsessed with this. He loved the idea that the <em>inside</em> of a computer—the part no one ever sees—should be just as beautiful as the outside. He wanted Apple products to have that hidden 'soul' that Wabi-Sabi is all about.</p>
      `,
      "svg": "<svg viewBox=\"0 0 200 200\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linejoin=\"round\"><path d=\"M50 80 C 50 140 80 160 100 160 C 120 160 150 140 150 80 Z\" fill=\"rgba(255, 255, 255, 0.05)\"/><ellipse cx=\"100\" cy=\"80\" rx=\"50\" ry=\"15\" fill=\"rgba(0, 242, 255, 0.1)\"/><path class=\"anim-path\" d=\"M70 90 L 85 120 L 75 140 M 85 120 L 110 130 L 120 155\" stroke=\"#ff0055\" stroke-width=\"4\" stroke-dasharray=\"150\" stroke-dashoffset=\"150\"/></svg>"
    },
    {
      "topic": "KINTSUGI",
      "title": "The Golden Repair",
      "text": `
        <p><strong>History:</strong> About 600 years ago, a Japanese ruler (a Shogun) broke his favorite tea bowl. He sent it to China to get fixed, but it came back held together with ugly metal staples. It looked terrible. Japanese craftsmen decided they could do better. They invented a way to glue the pieces back together using tree sap and real gold powder. They realized that the bowl wasn't just fixed—it was actually <em>more</em> valuable than before it broke.</p>
        <p><strong>Process:</strong> It's like a slow-motion puzzle. First, you clean every shard. Then you use <em>Urushi</em> lacquer (which is basically super-strong tree glue) to bond them. Finally, you dust the seams with real gold. It takes weeks to dry. The result is a 'map' of the accident, written in gold. It turns a disaster into a masterpiece.</p>
        <p><strong>Cultural Importance:</strong> Kintsugi is the ultimate 'No Regrets' philosophy. It represents **resilience**—the idea that you are allowed to fail, you are allowed to break, and you can come back stronger and more beautiful than you were at the start. In a world of 'buy it and throw it away,' Kintsugi is a rebellion for keeping things and making them better.</p>
        <p><strong>Mind-Blowing Fact:</strong> Kintsugi became so popular in the old days that some people were accused of *deliberately* smashing their expensive pottery just so they could have it repaired with gold to show off how cool it looked!</p>
      `,
      "svg": "<svg viewBox=\"0 0 200 200\" fill=\"none\" stroke=\"#ff0055\" stroke-width=\"2\"><path d=\"M40 60 L 160 60 L 140 160 L 60 160 Z\" opacity=\"0.2\"/><path class=\"anim-path\" d=\"M80 60 L 100 100 L 90 160\" stroke-width=\"4\" stroke-dasharray=\"200\" stroke-dashoffset=\"200\"/><path class=\"anim-path\" d=\"M120 60 L 110 90 L 130 130\" stroke-width=\"4\" stroke-dasharray=\"200\" stroke-dashoffset=\"200\"/></svg>"
    }
  ],
  "ink": [
    {
      "topic": "SHODO",
      "title": "Writing with No Undo Button",
      "text": `
        <p><strong>History:</strong> Writing in Japan used to be very stiff until a monk named <strong>Kūkai</strong> came along about 1,200 years ago. He was the original 'writing influencer.' He took complicated symbols and turned them into a smooth, flowing style called <em>Wayō</em>. It made writing look more like a dance and less like a textbook. People said he had 'Three Brushes' because he could write so fast and beautifully.</p>
        <p><strong>Process:</strong> Shodo isn't just picking up a pen. You spend 15 minutes grinding a solid ink stick into water on a stone. This is like a 'loading screen' for your brain—it calms you down. Once you touch the brush to the thin paper, that’s it. You can't erase it, and there’s no 'Ctrl+Z.' Every stroke shows exactly how you were feeling at that exact second.</p>
        <p><strong>Cultural Importance:</strong> Samurai warriors had to learn Shodo because it taught them how to stay calm under pressure. Today, it’s a massive school sport. Teams of students perform on giant stages, dancing and painting huge 30-foot scrolls with brushes that weigh as much as a small dog! It’s about the connection between your body and the ink.</p>
        <p><strong>Mind-Blowing Fact:</strong> Traditional calligraphy ink is actually edible! It’s made from the soot of burnt trees mixed with vegetable oils. Master ink sticks aged for over 50 years are worth thousands of dollars because the color becomes 'shinner' and deeper as they age.</p>
      `,
      "svg": "<svg viewBox=\"0 0 200 200\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"15\" stroke-linecap=\"round\"><path class=\"anim-path\" d=\"M50 100 Q 100 50 150 100 T 150 150\" stroke-dasharray=\"300\" stroke-dashoffset=\"300\"/><circle cx=\"160\" cy=\"80\" r=\"20\" fill=\"#ff0055\" stroke=\"none\" opacity=\"0.8\"/></svg>"
    },
    {
      "topic": "UKIYO-E",
      "title": "The Ancestor of Anime",
      "text": `
        <p><strong>History:</strong> In the 1600s, Japan was at peace and everyone wanted to party. Artists started making woodblock prints of famous actors, beautiful landscapes, and ghost stories. These were called <strong>Ukiyo-e</strong> ('Pictures of the Floating World'). They were the first mass-produced 'pop culture' items in history, sold for the price of a bowl of ramen.</p>
        <p><strong>Process:</strong> It was a team sport. An artist drew the image, a carver cut it into a block of cherry wood, and a printer layered the colors. It works exactly like how 'layers' work in Photoshop or Procreate today, but done 400 years ago with wood and ink. Each color needed its own carved block.</p>
        <p><strong>Cultural Importance:</strong> Without Ukiyo-e, we wouldn't have Manga or Anime. It created the 'visual language' of Japan—bold outlines, flat colors, and dramatic expressions. Even famous painters like Van Gogh in Europe were obsessed with these prints and tried to copy the style.</p>
        <p><strong>Mind-Blowing Fact:</strong> Because these prints were so cheap and common in Japan, Europeans first discovered them because they were being used as **packing paper** to wrap Japanese tea cups during shipping. They were literally the 'bubble wrap' of the 1800s!</p>
      `,
      "svg": "<svg viewBox=\"0 0 200 200\" fill=\"none\" stroke=\"#00f2ff\" stroke-width=\"2\"><rect x=\"40\" y=\"40\" width=\"120\" height=\"120\" rx=\"5\" opacity=\"0.2\"/><path class=\"anim-path\" d=\"M60 140 Q 100 60 140 140\" stroke-width=\"4\" stroke-dasharray=\"200\" stroke-dashoffset=\"200\"/><circle cx=\"130\" cy=\"70\" r=\"15\" fill=\"#ff0055\" stroke=\"none\"/></svg>"
    }
  ],
  "geo": [
    {
      "topic": "ORIGAMI",
      "title": "3D Printing with Paper",
      "text": `
        <p><strong>History:</strong> Before it was an art class project, Origami was a sacred Shinto ritual. In the Heian period, people used it to fold special 'good luck' charms called <em>Noshi</em>. The first-ever instruction book, published in 1797, was called <em>How to Fold 1,000 Cranes</em>. It turned folding from a secret religious practice into a fun hobby for everyone.</p>
        <p><strong>Process:</strong> Modern origami is actually high-level math. Experts use 'Axioms' (laws of folding) to turn one flat square of paper into anything without using scissors or glue. There’s even 'wet-folding' where you dampen paper to sculpt it into soft, realistic shapes that look like they're alive.</p>
        <p><strong>Cultural Importance:</strong> Origami is helping people live longer. Doctors use 'origami stents'—tiny tubes that travel through blood vessels and then 'bloom' open in the heart. It’s also used to fold up giant air-bags in cars so they can pop open in a fraction of a second. It’s about the science of 'packing' big things into small spaces.</p>
        <p><strong>Mind-Blowing Fact:</strong> NASA uses origami to build the future! They use the 'Miura-fold' to pack massive solar panels into tiny rockets. Once in space, the panels unfold perfectly with just one pull. It’s the same pattern nature uses to unfold leaves in the spring!</p>
      `,
      "svg": "<svg viewBox=\"0 0 200 200\" fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"2\"><polygon points=\"100,50 160,90 100,150 40,90\" fill=\"rgba(0, 242, 255, 0.1)\"/><path class=\"anim-path\" d=\"M100 50 L 100 150 M 40 90 L 160 90\" stroke-dasharray=\"200\" stroke-dashoffset=\"200\"/></svg>"
    },
    {
      "topic": "KUMIKI",
      "title": "The Zero-Glue LEGO",
      "text": `
        <p><strong>History:</strong> Japanese master carpenters had a huge problem: glue rots and nails rust. To build temples that would last forever, they invented <strong>Kumiki</strong>—complex puzzles where wood pieces slide together and lock tight using only geometry. Some of these buildings have stayed standing for over 1,000 years.</p>
        <p><strong>Process:</strong> It's like Minecraft but in real life. Every beam has hidden slots and tabs carved to a precision of 0.1 millimeters (the thickness of a human hair!). When the final 'key' piece is slid in, the whole building becomes one solid unit. No nails, no screws, no glue.</p>
        <p><strong>Cultural Importance:</strong> These joints are 'earthquake-proof.' Because the wood isn't nailed down, the building can 'dance' and flex during a tremor instead of snapping. It’s the ultimate example of working with nature instead of fighting it. It's ancient engineering that's still better than modern tech.</p>
        <p><strong>Mind-Blowing Fact:</strong> There are wooden pagodas in Japan built with this method that have survived over **1,300 years** of massive earthquakes, while modern concrete buildings right next to them have crumbled to dust!</p>
      `,
      "svg": "<svg viewBox=\"0 0 200 200\" fill=\"none\" stroke=\"#ff0055\" stroke-width=\"2\"><rect x=\"60\" y=\"60\" width=\"80\" height=\"80\" opacity=\"0.2\"/><path class=\"anim-path\" d=\"M60 100 L 140 100 M 100 60 L 100 140\" stroke-width=\"6\" stroke-dasharray=\"200\" stroke-dashoffset=\"200\"/></svg>"
    }
  ],
  "system": [
    {
      "topic": "MA",
      "title": "The Power of the Pause",
      "text": `
        <p><strong>History:</strong> Japanese builders realized that what you <em>don't</em> put in a room is just as important as what you do. The word <strong>Ma (間)</strong> is written with a symbol that shows a door with the moon shining through. It represents that tiny moment of light. It officially started in the 11th century with a book that told gardeners that empty space was the key to beauty.</p>
        <p><strong>Process:</strong> Think of Ma like the 'beat drop' in a song. The silence right before the drop is what makes it feel powerful. In Japanese houses, they use an <em>engawa</em> porch—a middle ground where you can just sit and exist. It forces you to focus on the 'vibe' of the moment rather than just being busy.</p>
        <p><strong>Cultural Importance:</strong> In a world of constant notifications and noise, Ma is like a 'mute button' for your brain. It’s used in everything from cool posters to the way people bow. It’s about giving people 'breathing room' so they don't feel overwhelmed. It’s why a clean room feels so much better than a cluttered one.</p>
        <p><strong>Mind-Blowing Fact:</strong> Research shows that when you listen to music that uses Ma, your heart rate actually slows down. The silence triggers a 'relaxation mode' in your nervous system, physically calming your body down just by leaving space.</p>
      `,
      "svg": "<svg viewBox=\"0 0 200 200\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><circle cx=\"100\" cy=\"100\" r=\"80\" stroke-dasharray=\"4 8\" opacity=\"0.3\"/><circle cx=\"100\" cy=\"100\" r=\"70\" fill=\"rgba(0, 242, 255, 0.1)\"/><path class=\"anim-path\" d=\"M100 20 L 100 180\" stroke=\"#ff0055\" stroke-dasharray=\"200\" stroke-dashoffset=\"200\"/></svg>"
    },
    {
      "topic": "HANKO",
      "title": "The Analog Blockchain",
      "text": `
        <p><strong>History:</strong> In Japan, you don't sign your name with a pen; you 'stamp' it. These personal seals (<strong>Hanko</strong>) have been used since the year 701 AD. Every person has a unique design, often carved from stone, that is registered with the government. It's your official 'face' in the legal world.</p>
        <p><strong>Process:</strong> You dip the seal into a thick, red paste made from oil and minerals. The way you press it onto the paper matters—too light and it’s invalid; too heavy and it’s a mess. It’s a physical 'key' to your identity that proves you are who you say you are.</p>
        <p><strong>Cultural Importance:</strong> Even today, you need your Hanko to buy a car or open a bank account. It’s a symbol of your social responsibility. While the rest of the world moved to digital signatures, Japan kept the Hanko because it’s harder to forge a hand-carved physical object. It's a mix of ancient tradition and strict rules.</p>
        <p><strong>Mind-Blowing Fact:</strong> There is currently a 'culture war' in Japan over the Hanko! Because of remote work, some people want to move to digital files, but others are fighting to keep the cool physical stamps. There are even 'Hanko artists' who carve tiny hidden pictures inside your name!</p>
      `,
      "svg": "<svg viewBox=\"0 0 200 200\" fill=\"none\" stroke=\"#bc13fe\" stroke-width=\"2\"><circle cx=\"100\" cy=\"100\" r=\"60\" opacity=\"0.2\"/><path class=\"anim-path\" d=\"M100 60 L 100 140 M 70 80 L 130 120\" stroke-width=\"8\" stroke-dasharray=\"200\" stroke-dashoffset=\"200\"/><rect x=\"85\" y=\"85\" width=\"30\" height=\"30\" fill=\"#ff0055\" stroke=\"none\"/></svg>"
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

// Pillar 1: Cracked Icosahedron (Glitch Protocol)
const meshGlitch = createArtifact(new THREE.IcosahedronGeometry(1.2, 0), 0xff0055, [-2, 1.5, -5], 'glitch');
// Pillar 2: Torus Knot (Ink-Stream)
const meshInk = createArtifact(new THREE.TorusKnotGeometry(0.8, 0.3, 100, 16), 0xbc13fe, [2, 1.2, -6], 'ink');
// Pillar 3: Box Geometry (Geo-Lock)
const meshGeo = createArtifact(new THREE.BoxGeometry(1.5, 1.5, 1.5), 0x00f2ff, [-1.8, -1.5, -5], 'geo');
// Pillar 4: Cylinder (System Mark)
const meshSystem = createArtifact(new THREE.CylinderGeometry(0.6, 0.6, 1.8, 32), 0x00f2ff, [2, -1.8, -5], 'system');

camera.position.z = 7;

const partGeo = new THREE.BufferGeometry();
const partCount = 1500;
const posArray = new Float32Array(partCount * 3);
for(let i=0; i < partCount * 3; i++) {
    posArray[i] = (Math.random() - 0.5) * 35;
}
partGeo.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
const partMat = new THREE.PointsMaterial({ size: 0.02, color: 0x00f2ff, transparent: true, opacity: 0.4 });
const particles = new THREE.Points(partGeo, partMat);
scene.add(particles);

function animate() {
    requestAnimationFrame(animate);
    const time = Date.now() * 0.001;
    artifacts.forEach((m, i) => {
        m.rotation.y += 0.01;
        m.rotation.z += 0.005;
        m.position.y = m.userData.initialPos.y + Math.sin(time + i) * 0.25;
        
        const vector = m.position.clone().project(camera);
        const x = (vector.x * 0.5 + 0.5) * window.innerWidth;
        const y = (-vector.y * 0.5 + 0.5) * window.innerHeight;
        
        const label = document.getElementById(`label-${m.userData.id}`);
        if(label) {
            label.style.left = `${x}px`;
            label.style.top = `${y}px`;
            const margin = 150;
            if (x < -margin || x > window.innerWidth + margin || y < -margin || y > window.innerHeight + margin) {
                label.style.opacity = '0';
                label.style.pointerEvents = 'none';
            } else {
                label.style.opacity = '1';
                label.style.pointerEvents = 'auto';
            }
        }
    });
    particles.rotation.y += 0.0005;
    state.mouse.x = THREE.MathUtils.lerp(state.mouse.x, state.targetMouse.x, 0.05);
    state.mouse.y = THREE.MathUtils.lerp(state.mouse.y, state.targetMouse.y, 0.05);
    const multiplier = window.innerWidth < 768 ? 1 : 2.5;
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
    title.innerText = topic.replace('-', ' ').toUpperCase();
    overlay.style.display = 'flex';
    const tl = gsap.timeline({
        onComplete: () => {
            document.getElementById('void-viewport').style.display = 'none';
            buildArticle(topic);
            showArticle();
        }
    });
    tl.fromTo(overlay, { opacity: 0 }, { opacity: 1, duration: 0.1 });
    for(let i=0; i<12; i++) {
        tl.to(overlay, { 
            clipPath: () => {
                const y1 = Math.random() * 100;
                const y2 = y1 + Math.random() * 15;
                return `polygon(0 ${y1}%, 100% ${y1}%, 100% ${y2}%, 0 ${y2}%)`;
            },
            x: (Math.random() - 0.5) * 60,
            duration: 0.04 
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
        delay: 0.6,
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

function buildArticle(pillar) {
    const contentDiv = document.getElementById('article-content');
    contentDiv.innerHTML = '';
    const sections = articleData[pillar];
    if (!sections) return;
    
    sections.forEach((sec, i) => {
        const html = `
            <div class="story-section" id="section-${pillar}-${i}">
                <div class="story-content">
                    <span class="text-[var(--neon-crimson)] font-mono text-sm mb-2 block tracking-tighter">// PILLAR_${pillar.toUpperCase()}_0${i+1}</span>
                    <span class="text-xs font-bold text-[var(--neon-cyan)] mb-4 block tracking-[0.3em] uppercase">${sec.topic}</span>
                    <h2 class="font-jp">${sec.title}</h2>
                    ${sec.text}
                </div>
                <div class="story-visual-container">
                    <div class="w-full h-full flex items-center justify-center opacity-80 scale-125">
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
            y: 50,
            opacity: 0,
            filter: 'blur(10px)',
            scrollTrigger: {
                trigger: content,
                scroller: '#article-viewport',
                start: 'top 85%',
                toggleActions: 'play none none reverse'
            }
        });
    });
}
