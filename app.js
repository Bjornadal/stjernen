/**
 * Ane Emilie Stjernen - Website JavaScript
 * Alpine.js components and scroll animations
 */

// ==================== MAIN APP ====================
function mainApp() {
    return {
        scrolled: false,
        mobileMenuOpen: false,
        musicNotes: generateMusicNotes(),

        init() {
            // Initialize scroll animations (Intersection Observer)
            this.initScrollAnimations();
        }
    };
}

// ==================== MUSIC NOTES (Hero decoration) ====================
function generateMusicNotes() {
    const symbols = ['♪', '♫', '♩', '♬', '𝅘𝅥𝅮'];
    const notes = [];
    for (let i = 0; i < 15; i++) {
        notes.push({
            id: i,
            symbol: symbols[i % symbols.length],
            left: Math.random() * 100,
            size: 16 + Math.random() * 24,
            duration: 8 + Math.random() * 12,
            delay: Math.random() * 10,
        });
    }
    return notes;
}

// ==================== GALLERY / LIGHTBOX ====================
function gallery() {
    return {
        lightboxOpen: false,
        currentImage: 0,
        images: [
            {
                src: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=600&q=80',
                alt: 'Opptreden i kirke'
            },
            {
                src: 'https://images.unsplash.com/photo-1460723237483-7a6dc9d0b212?w=600&q=80',
                alt: 'Bryllupssang'
            },
            {
                src: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&q=80',
                alt: 'Konsertopptreden'
            },
            {
                src: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=600&q=80',
                alt: 'Musikalsk øyeblikk'
            },
            {
                src: 'https://images.unsplash.com/photo-1415201364774-f6f0bb35f28f?w=600&q=80',
                alt: 'Stemningsfull opptreden'
            },
            {
                src: 'https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?w=600&q=80',
                alt: 'Bryllupsseremoni'
            },
            {
                src: 'https://images.unsplash.com/photo-1510915361894-db8b60106cb1?w=600&q=80',
                alt: 'Scene med lys'
            },
            {
                src: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=600&q=80',
                alt: 'Musikkopplevelse'
            }
        ],
        openLightbox(index) {
            this.currentImage = index;
            this.lightboxOpen = true;
            document.body.style.overflow = 'hidden';
        },
        closeLightbox() {
            this.lightboxOpen = false;
            document.body.style.overflow = '';
        },
        next() {
            this.currentImage = (this.currentImage + 1) % this.images.length;
        },
        prev() {
            this.currentImage = (this.currentImage - 1 + this.images.length) % this.images.length;
        }
    };
}

// ==================== TESTIMONIALS CAROUSEL ====================
function testimonials() {
    return {
        current: 0,
        autoPlayInterval: null,
        items: [
            {
                quote: 'Ane Emilie gjorde bryllupet vårt magisk. Stemmen hennes fylte kirken med en varme og kjærlighet vi aldri vil glemme. Gjestene våre snakker fortsatt om det.',
                name: 'Maria & Thomas',
                event: 'Bryllup, juni 2025'
            },
            {
                quote: 'I en vanskelig tid ga Ane Emilie oss trøst gjennom musikken. Hun sang med en slik innlevelse og respekt at det var dypt rørende for alle som var til stede.',
                name: 'Familien Hansen',
                event: 'Begravelse, mars 2025'
            },
            {
                quote: 'Vi engasjerte Ane Emilie til vår firmafest, og hun skapte den perfekte stemningen. Profesjonell, fleksibel og utrolig talentfull. Anbefales varmt!',
                name: 'Nordvik AS',
                event: 'Firmaarrangement, desember 2024'
            },
            {
                quote: 'Ane Emilie sang i konfirmasjonen til datteren vår, og det ble et øyeblikk vi alltid vil huske. Sangen var nydelig og personlig. Tusen takk!',
                name: 'Lise og Erik Johansen',
                event: 'Konfirmasjon, mai 2025'
            }
        ],
        init() {
            this.startAutoPlay();
        },
        startAutoPlay() {
            this.autoPlayInterval = setInterval(() => {
                this.next();
            }, 6000);
        },
        stopAutoPlay() {
            clearInterval(this.autoPlayInterval);
        },
        next() {
            this.current = (this.current + 1) % this.items.length;
        },
        prev() {
            this.stopAutoPlay();
            this.current = (this.current - 1 + this.items.length) % this.items.length;
            this.startAutoPlay();
        },
        goTo(index) {
            this.stopAutoPlay();
            this.current = index;
            this.startAutoPlay();
        }
    };
}

// ==================== CONTACT FORM ====================
function contactForm() {
    return {
        form: {
            name: '',
            email: '',
            phone: '',
            eventType: '',
            date: '',
            message: ''
        },
        sending: false,
        submitted: false,
        errors: {},

        validate() {
            this.errors = {};
            if (!this.form.name.trim()) this.errors.name = 'Navn er påkrevd';
            if (!this.form.email.trim()) this.errors.email = 'E-post er påkrevd';
            else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.form.email)) this.errors.email = 'Ugyldig e-postadresse';
            if (!this.form.eventType) this.errors.eventType = 'Velg type arrangement';
            if (!this.form.message.trim()) this.errors.message = 'Melding er påkrevd';
            return Object.keys(this.errors).length === 0;
        },

        async submit() {
            if (!this.validate()) return;

            this.sending = true;

            // Simulate sending (replace with actual form submission, e.g. Formspree)
            // Example with Formspree:
            // const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
            //     method: 'POST',
            //     headers: { 'Content-Type': 'application/json' },
            //     body: JSON.stringify(this.form)
            // });

            await new Promise(resolve => setTimeout(resolve, 1500));

            this.sending = false;
            this.submitted = true;

            // Reset form after 5 seconds
            setTimeout(() => {
                this.submitted = false;
                this.form = {
                    name: '',
                    email: '',
                    phone: '',
                    eventType: '',
                    date: '',
                    message: ''
                };
            }, 5000);
        }
    };
}

// ==================== SCROLL ANIMATIONS ====================
// Initialize Intersection Observer for fade-in animations
function initScrollAnimations() {
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        }
    );

    // Observe all elements with the .fade-in class
    document.querySelectorAll('.fade-in').forEach((el) => {
        observer.observe(el);
    });
}

// Run scroll animations when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    // Small delay to ensure Alpine has initialized
    setTimeout(initScrollAnimations, 100);
});

// Re-run for dynamically added elements (Alpine templates)
document.addEventListener('alpine:initialized', () => {
    setTimeout(initScrollAnimations, 200);
});

