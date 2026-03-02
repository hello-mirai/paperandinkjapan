gsap.registerPlugin(ScrollTrigger);

        // ==========================================
        // DATA: Content & SVG Generation
        // ==========================================
        let articleData = {};
        fetch('content.json')
            .then(res => res.json())
            .then(data => articleData = data)
            .catch(err => console.error('Error fetching content:', err));

        // ==========================================
        // 1. SPATIAL DESK (Dragging Logic)
        // ==========================================
        const deskViewport = document.getElementById('desk-viewport');
        const deskCanvas = document.getElementById('desk-canvas');
        let isDragging = false;
        let startX, startY;
        let translateX = 0, translateY = 0;
        
        // Center the desk initially
        const cx = window.innerWidth / 2;
        const cy = window.innerHeight / 2;
        gsap.set(deskCanvas, { x: 0, y: 0 });

        deskViewport.addEventListener('mousedown', (e) => {
            isDragging = true;
            startX = e.clientX - translateX;
            startY = e.clientY - translateY;
        });

        window.addEventListener('mouseup', () => isDragging = false);

        window.addEventListener('mousemove', (e) => {
            if (!isDragging) return;
            // Calculate boundaries so they don't drag off the edge completely
            let newX = e.clientX - startX;
            let newY = e.clientY - startY;
            const boundX = window.innerWidth * 0.4;
            const boundY = window.innerHeight * 0.4;
            
            translateX = Math.max(-boundX, Math.min(boundX, newX));
            translateY = Math.max(-boundY, Math.min(boundY, newY));
            
            gsap.to(deskCanvas, { x: translateX, y: translateY, duration: 0.5, ease: "power2.out" });
        });

        // Touch support
        deskViewport.addEventListener('touchstart', (e) => {
            isDragging = true;
            startX = e.touches[0].clientX - translateX;
            startY = e.touches[0].clientY - translateY;
        });
        window.addEventListener('touchend', () => isDragging = false);
        window.addEventListener('touchmove', (e) => {
            if (!isDragging) return;
            let newX = e.touches[0].clientX - startX;
            let newY = e.touches[0].clientY - startY;
            const boundX = window.innerWidth * 0.4;
            const boundY = window.innerHeight * 0.4;
            translateX = Math.max(-boundX, Math.min(boundX, newX));
            translateY = Math.max(-boundY, Math.min(boundY, newY));
            gsap.to(deskCanvas, { x: translateX, y: translateY, duration: 0.5, ease: "power2.out" });
        });

        // ==========================================
        // 2. INTERACTIVE WEBGL & 3D ELEMENTS
        // ==========================================
        
        // A. Liquid Ink Background (Canvas 2D Ripple implementation for performance)
        const inkCanvas = document.getElementById('ink-bg-canvas');
        const inkCtx = inkCanvas.getContext('2d');
        let inkTrails = [];
        
        function resizeInkCanvas() {
            inkCanvas.width = deskCanvas.offsetWidth;
            inkCanvas.height = deskCanvas.offsetHeight;
        }
        window.addEventListener('resize', resizeInkCanvas);
        resizeInkCanvas();

        deskCanvas.addEventListener('mousemove', (e) => {
            // Adjust coordinates relative to the panning canvas
            const rect = deskCanvas.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            inkTrails.push({ x, y, age: 0, maxAge: 50 + Math.random() * 50 });
        });

        function animateInk() {
            inkCtx.clearRect(0, 0, inkCanvas.width, inkCanvas.height);
            for (let i = inkTrails.length - 1; i >= 0; i--) {
                let p = inkTrails[i];
                p.age++;
                if (p.age > p.maxAge) {
                    inkTrails.splice(i, 1);
                    continue;
                }
                const progress = p.age / p.maxAge;
                const radius = 10 + progress * 50;
                const opacity = 1 - Math.pow(progress, 2);
                
                inkCtx.beginPath();
                inkCtx.arc(p.x, p.y, radius, 0, Math.PI * 2);
                inkCtx.fillStyle = `rgba(54, 49, 45, ${opacity * 0.2})`; // ink-main color
                inkCtx.fill();
            }
            requestAnimationFrame(animateInk);
        }
        animateInk();

        // B. 3D Origami Crane (Three.js)
        const threeContainer = document.getElementById('three-crane');
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(50, threeContainer.offsetWidth / threeContainer.offsetHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
        renderer.setSize(threeContainer.offsetWidth, threeContainer.offsetHeight);
        threeContainer.appendChild(renderer.domElement);

        // Create a stylized geometric bird
        const geometry = new THREE.ConeGeometry(1, 2, 4);
        const material = new THREE.MeshStandardMaterial({ 
            color: 0xfbfaf6, 
            roughness: 0.8, 
            flatShading: true 
        });
        const craneMesh = new THREE.Mesh(geometry, material);
        craneMesh.rotation.x = Math.PI / 2;
        scene.add(craneMesh);

        // Add Wings
        const wingGeo = new THREE.BufferGeometry();
        const vertices = new Float32Array([
            0, 0, 0,
            2, 1, -1,
            0, 0, -2,
            
            0, 0, 0,
            0, 0, -2,
            -2, 1, -1
        ]);
        wingGeo.setAttribute('position', new THREE.BufferAttribute(vertices, 3));
        wingGeo.computeVertexNormals();
        const wings = new THREE.Mesh(wingGeo, material);
        craneMesh.add(wings);

        // Lighting
        const light = new THREE.DirectionalLight(0xffffff, 1);
        light.position.set(5, 5, 5);
        scene.add(light);
        const ambientLight = new THREE.AmbientLight(0xb56a5c, 0.5); // Clay tint
        scene.add(ambientLight);

        camera.position.z = 6;

        // Mouse follow rotation
        let targetRotationX = 0;
        let targetRotationY = 0;
        window.addEventListener('mousemove', (e) => {
            targetRotationY = (e.clientX / window.innerWidth) * 2 - 1;
            targetRotationX = (e.clientY / window.innerHeight) * 2 - 1;
        });

        function animateThree() {
            requestAnimationFrame(animateThree);
            craneMesh.rotation.y += 0.01; // Base slow spin
            craneMesh.rotation.z = THREE.MathUtils.lerp(craneMesh.rotation.z, -targetRotationY * 0.5, 0.1);
            craneMesh.rotation.x = THREE.MathUtils.lerp(craneMesh.rotation.x, (Math.PI/2) + targetRotationX * 0.5, 0.1);
            renderer.render(scene, camera);
        }
        animateThree();

        // ==========================================
        // 3. GAMIFIED TRANSITION (Paint to Reveal)
        // ==========================================
        const wipeOverlay = document.getElementById('wipe-overlay');
        const wipeCanvas = document.getElementById('wipe-canvas');
        const wipeCtx = wipeCanvas.getContext('2d');
        const instruction = document.getElementById('wipe-instruction');
        
        let isTransitioning = false;
        let activeTopic = null;
        let wipeProgress = 0;

        function resizeWipeCanvas() {
            wipeCanvas.width = window.innerWidth;
            wipeCanvas.height = window.innerHeight;
        }
        window.addEventListener('resize', resizeWipeCanvas);
        resizeWipeCanvas();

        function triggerTransition(topic) {
            if (isTransitioning) return;
            isTransitioning = true;
            activeTopic = topic;
            
            // Show overlay, fill with Ink
            wipeOverlay.style.pointerEvents = 'auto';
            wipeCtx.globalCompositeOperation = 'source-over';
            wipeCtx.fillStyle = '#111111'; // Deep ink
            wipeCtx.fillRect(0, 0, wipeCanvas.width, wipeCanvas.height);
            
            gsap.to(instruction, { opacity: 1, duration: 1, delay: 0.5 });
            
            // Switch to eraser mode
            wipeCtx.globalCompositeOperation = 'destination-out';
            wipeCtx.lineWidth = 150;
            wipeCtx.lineCap = 'round';
            wipeCtx.lineJoin = 'round';
            wipeProgress = 0;

            // Pre-build the article content behind the black screen
            buildArticle(topic);
        }

        let isWiping = false;
        let lastX, lastY;

        wipeOverlay.addEventListener('mousedown', (e) => {
            isWiping = true;
            lastX = e.clientX; lastY = e.clientY;
            gsap.to(instruction, { opacity: 0, duration: 0.3 });
        });
        window.addEventListener('mouseup', () => isWiping = false);

        wipeOverlay.addEventListener('mousemove', (e) => {
            if (!isWiping || !isTransitioning) return;
            
            wipeCtx.beginPath();
            wipeCtx.moveTo(lastX, lastY);
            wipeCtx.lineTo(e.clientX, e.clientY);
            wipeCtx.stroke();
            
            lastX = e.clientX;
            lastY = e.clientY;
            
            wipeProgress++;
            // If user has scrubbed enough, finish transition automatically
            if (wipeProgress > 50) {
                finishTransition();
            }
        });

        // Touch wipe
        wipeOverlay.addEventListener('touchstart', (e) => {
            isWiping = true;
            lastX = e.touches[0].clientX; lastY = e.touches[0].clientY;
            gsap.to(instruction, { opacity: 0, duration: 0.3 });
        });
        window.addEventListener('touchend', () => isWiping = false);
        wipeOverlay.addEventListener('touchmove', (e) => {
            if (!isWiping || !isTransitioning) return;
            wipeCtx.beginPath();
            wipeCtx.moveTo(lastX, lastY);
            wipeCtx.lineTo(e.touches[0].clientX, e.touches[0].clientY);
            wipeCtx.stroke();
            lastX = e.touches[0].clientX; lastY = e.touches[0].clientY;
            wipeProgress++;
            if (wipeProgress > 30) finishTransition(); // Faster on mobile
        });

        function finishTransition() {
            isTransitioning = false;
            wipeOverlay.style.pointerEvents = 'none';
            gsap.to(wipeCanvas, { 
                opacity: 0, 
                duration: 1, 
                onComplete: () => {
                    document.getElementById('desk-viewport').style.display = 'none';
                    wipeCtx.clearRect(0, 0, wipeCanvas.width, wipeCanvas.height);
                    wipeCanvas.style.opacity = 1;
                    initScrollAnimations();
                } 
            });
            
            const articleViewport = document.getElementById('article-viewport');
            articleViewport.style.display = 'block';
            gsap.to(articleViewport, { opacity: 1, duration: 0.5 });
            articleViewport.scrollTop = 0;
        }

        function returnToDesk() {
            // Simple fade back
            const articleViewport = document.getElementById('article-viewport');
            gsap.to(articleViewport, {
                opacity: 0,
                duration: 0.8,
                onComplete: () => {
                    articleViewport.style.display = 'none';
                    document.getElementById('desk-viewport').style.display = 'block';
                    // Kill ScrollTriggers to prevent memory leaks
                    ScrollTrigger.getAll().forEach(t => t.kill());
                }
            })
        }

        // ==========================================
        // 4. SCROLLYTELLING & "MA" IDLE EFFECT
        // ==========================================
        
        function buildArticle(topic) {
            const contentDiv = document.getElementById('article-content');
            contentDiv.innerHTML = '';
            const sections = articleData[topic];
            
            sections.forEach((sec, i) => {
                const html = `
                    <div class="story-section">
                        <div class="story-text ma-effect">
                            <h2>${sec.title}</h2>
                            ${sec.text}
                        </div>
                        <div class="story-visual">
                            ${sec.svg}
                        </div>
                    </div>
                `;
                contentDiv.insertAdjacentHTML('beforeend', html);
            });
        }

        function initScrollAnimations() {
            // Animate SVG paths as they come into view
            const animPaths = document.querySelectorAll('.anim-path');
            animPaths.forEach(path => {
                gsap.to(path, {
                    strokeDashoffset: 0,
                    scrollTrigger: {
                        trigger: path.closest('.story-section'),
                        scroller: "#article-viewport",
                        start: "top center",
                        end: "bottom center",
                        scrub: 1
                    }
                });
            });

            // Sticky Visuals (Desktop Only)
            if (window.innerWidth > 768) {
                const visuals = document.querySelectorAll('.story-visual');
                visuals.forEach(vis => {
                    ScrollTrigger.create({
                        trigger: vis.closest('.story-section'),
                        scroller: "#article-viewport",
                        start: "top top",
                        end: "bottom bottom",
                        pin: vis
                    });
                });
            }

            // Ink Guide Line down the left
            gsap.fromTo('.guide-path', 
                { strokeDashoffset: 1000 },
                { strokeDashoffset: 0, 
                  scrollTrigger: {
                      trigger: '#article-content',
                      scroller: "#article-viewport",
                      start: "top top",
                      end: "bottom bottom",
                      scrub: true
                  }
                }
            );
        }

        // The "Ma" Effect: Fade UI if idle
        let idleTimer;
        const articleViewport = document.getElementById('article-viewport');
        
        function resetMaEffect() {
            articleViewport.classList.remove('is-idle');
            clearTimeout(idleTimer);
            idleTimer = setTimeout(() => {
                // Only trigger if we are inside an article
                if(articleViewport.style.display === 'block') {
                    articleViewport.classList.add('is-idle');
                }
            }, 3000); // 3 seconds of stillness
        }

        window.addEventListener('mousemove', resetMaEffect);
        window.addEventListener('touchmove', resetMaEffect);
        articleViewport.addEventListener('scroll', resetMaEffect);
        
        resetMaEffect(); // Init timer
