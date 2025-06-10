import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				'playfair': ['Playfair Display', 'serif'],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'gentle-fade-in': {
					'0%': {
						opacity: '0',
						transform: 'translateY(15px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'gentle-fade-in-up': {
					'0%': {
						opacity: '0',
						transform: 'translateY(20px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'gentle-slide-in-left': {
					'0%': {
						opacity: '0',
						transform: 'translateX(-20px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateX(0)'
					}
				},
				'gentle-slide-in-right': {
					'0%': {
						opacity: '0',
						transform: 'translateX(20px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateX(0)'
					}
				},
				'gentle-progress': {
					'0%': {
						width: '0%'
					},
					'100%': {
						width: 'var(--target-width)'
					}
				},
				'typewriter': {
					'0%': {
						width: '0'
					},
					'100%': {
						width: '100%'
					}
				},
				'expand-width': {
					'0%': {
						width: '0'
					},
					'100%': {
						width: '100%'
					}
				},
				// Cosmic space animations for Reviews
				'shooting-star': {
					'0%': {
						transform: 'translateX(-100vw) translateY(0)',
						opacity: '0'
					},
					'10%': {
						opacity: '1'
					},
					'90%': {
						opacity: '1'
					},
					'100%': {
						transform: 'translateX(100vw) translateY(-50vh)',
						opacity: '0'
					}
				},
				'aurora-wave': {
					'0%': {
						transform: 'translateX(-100%) scaleY(1)',
						opacity: '0.3'
					},
					'50%': {
						transform: 'translateX(0%) scaleY(1.2)',
						opacity: '0.6'
					},
					'100%': {
						transform: 'translateX(100%) scaleY(1)',
						opacity: '0.3'
					}
				},
				'nebula-float': {
					'0%, 100%': {
						transform: 'translateY(0px) rotate(0deg)',
						opacity: '0.4'
					},
					'50%': {
						transform: 'translateY(-20px) rotate(180deg)',
						opacity: '0.6'
					}
				},
				'constellation-twinkle': {
					'0%, 100%': {
						opacity: '0.3',
						transform: 'scale(1)'
					},
					'50%': {
						opacity: '1',
						transform: 'scale(1.2)'
					}
				},
				'parallax-drift': {
					'0%': {
						transform: 'translateX(0) translateY(0)'
					},
					'100%': {
						transform: 'translateX(-50px) translateY(-30px)'
					}
				},
				// Educational theme animations for Team
				'math-symbol-float': {
					'0%, 100%': {
						transform: 'translateY(0px) rotate(0deg)',
						opacity: '0.6'
					},
					'50%': {
						transform: 'translateY(-15px) rotate(45deg)',
						opacity: '0.8'
					}
				},
				'molecule-rotate': {
					'0%': {
						transform: 'rotate(0deg) scale(1)'
					},
					'100%': {
						transform: 'rotate(360deg) scale(1.1)'
					}
				},
				'circuit-pulse': {
					'0%, 100%': {
						opacity: '0.3',
						transform: 'scale(1)'
					},
					'50%': {
						opacity: '0.7',
						transform: 'scale(1.05)'
					}
				},
				'gradient-orb': {
					'0%, 100%': {
						transform: 'translateY(0px) scale(1)',
						opacity: '0.4'
					},
					'50%': {
						transform: 'translateY(-25px) scale(1.2)',
						opacity: '0.6'
					}
				},
				'book-flip': {
					'0%': {
						transform: 'rotateY(0deg) translateY(0px)'
					},
					'50%': {
						transform: 'rotateY(90deg) translateY(-10px)'
					},
					'100%': {
						transform: 'rotateY(180deg) translateY(0px)'
					}
				},
				'dna-helix': {
					'0%': {
						transform: 'rotateX(0deg) rotateY(0deg)'
					},
					'100%': {
						transform: 'rotateX(360deg) rotateY(720deg)'
					}
				},
				// NEW PROFESSIONAL ANIMATIONS
				// Executive Boardroom Theme - Strategy Section
				'luxury-reveal': {
					'0%': {
						opacity: '0',
						transform: 'translateY(40px) scale(0.95)',
						filter: 'blur(4px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0) scale(1)',
						filter: 'blur(0px)'
					}
				},
				'executive-badge': {
					'0%': {
						transform: 'rotate(-180deg) scale(0.8)',
						opacity: '0'
					},
					'50%': {
						transform: 'rotate(0deg) scale(1.1)',
						opacity: '0.8'
					},
					'100%': {
						transform: 'rotate(0deg) scale(1)',
						opacity: '1'
					}
				},
				'premium-glow': {
					'0%, 100%': {
						boxShadow: '0 0 20px rgba(255, 215, 0, 0.3), 0 0 40px rgba(255, 215, 0, 0.1)'
					},
					'50%': {
						boxShadow: '0 0 30px rgba(255, 215, 0, 0.5), 0 0 60px rgba(255, 215, 0, 0.2)'
					}
				},
				'connection-line': {
					'0%': {
						width: '0%',
						opacity: '0'
					},
					'100%': {
						width: '100%',
						opacity: '1'
					}
				},
				// Financial Dashboard Theme - Statistics Section
				'luxury-counter': {
					'0%': {
						transform: 'scale(0.5) rotateY(-90deg)',
						opacity: '0'
					},
					'50%': {
						transform: 'scale(1.1) rotateY(0deg)',
						opacity: '0.8'
					},
					'100%': {
						transform: 'scale(1) rotateY(0deg)',
						opacity: '1'
					}
				},
				'progress-ring': {
					'0%': {
						strokeDasharray: '0 251.2',
						transform: 'rotate(-90deg)'
					},
					'100%': {
						strokeDasharray: '251.2 251.2',
						transform: 'rotate(270deg)'
					}
				},
				'financial-chart': {
					'0%': {
						strokeDasharray: '0 1000',
						opacity: '0'
					},
					'100%': {
						strokeDasharray: '1000 1000',
						opacity: '1'
					}
				},
				'executive-glow': {
					'0%, 100%': {
						boxShadow: '0 4px 20px rgba(34, 197, 94, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
					},
					'50%': {
						boxShadow: '0 8px 30px rgba(34, 197, 94, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.2)'
					}
				},
				// Corporate Elegance Theme - Contact Section
				'form-reveal': {
					'0%': {
						opacity: '0',
						transform: 'translateX(-30px) scale(0.95)',
						filter: 'blur(2px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateX(0) scale(1)',
						filter: 'blur(0px)'
					}
				},
				'luxury-ripple': {
					'0%': {
						transform: 'scale(0)',
						opacity: '1'
					},
					'100%': {
						transform: 'scale(4)',
						opacity: '0'
					}
				},
				'corporate-slide': {
					'0%': {
						opacity: '0',
						transform: 'translateY(30px) rotateX(-10deg)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0) rotateX(0deg)'
					}
				},
				'elegant-focus': {
					'0%': {
						borderColor: 'rgba(156, 163, 175, 0.3)',
						boxShadow: '0 0 0 0 rgba(59, 130, 246, 0)'
					},
					'100%': {
						borderColor: 'rgba(59, 130, 246, 0.6)',
						boxShadow: '0 0 0 3px rgba(59, 130, 246, 0.1)'
					}
				},
				// Executive Interface Theme - Navigation
				'executive-menu': {
					'0%': {
						opacity: '0',
						transform: 'translateY(-10px) scale(0.95)',
						backdropFilter: 'blur(0px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0) scale(1)',
						backdropFilter: 'blur(8px)'
					}
				},
				'luxury-underline': {
					'0%': {
						width: '0%',
						height: '2px',
						background: 'linear-gradient(90deg, transparent, #fbbf24, transparent)'
					},
					'100%': {
						width: '100%',
						height: '2px',
						background: 'linear-gradient(90deg, #fbbf24, #f59e0b, #fbbf24)'
					}
				},
				'premium-scale': {
					'0%': {
						transform: 'scale(1)',
						filter: 'brightness(1)'
					},
					'100%': {
						transform: 'scale(1.05)',
						filter: 'brightness(1.1)'
					}
				},
				// Sophisticated General Animations
				'soothing-fade-in': {
					'0%': {
						opacity: '0',
						transform: 'translateY(20px)',
						filter: 'blur(1px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)',
						filter: 'blur(0px)'
					}
				},
				'soothing-fade-in-up': {
					'0%': {
						opacity: '0',
						transform: 'translateY(25px)',
						filter: 'blur(1px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)',
						filter: 'blur(0px)'
					}
				},
				'gentle-scale-in': {
					'0%': {
						opacity: '0',
						transform: 'scale(0.9)',
						filter: 'blur(2px)'
					},
					'100%': {
						opacity: '1',
						transform: 'scale(1)',
						filter: 'blur(0px)'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'gentle-fade-in': 'gentle-fade-in 0.8s ease-out',
				'gentle-fade-in-up': 'gentle-fade-in-up 1s ease-out',
				'gentle-slide-in-left': 'gentle-slide-in-left 1s ease-out',
				'gentle-slide-in-right': 'gentle-slide-in-right 1s ease-out',
				'gentle-progress': 'gentle-progress 1.2s ease-out',
				'typewriter': 'typewriter 3s steps(40) 1s both',
				'expand-width': 'expand-width 1s ease-out',
				// Cosmic space animations
				'shooting-star': 'shooting-star 3s linear infinite',
				'aurora-wave': 'aurora-wave 8s ease-in-out infinite',
				'nebula-float': 'nebula-float 6s ease-in-out infinite',
				'constellation-twinkle': 'constellation-twinkle 2s ease-in-out infinite',
				'parallax-drift': 'parallax-drift 20s linear infinite',
				// Educational theme animations
				'math-symbol-float': 'math-symbol-float 4s ease-in-out infinite',
				'molecule-rotate': 'molecule-rotate 8s linear infinite',
				'circuit-pulse': 'circuit-pulse 3s ease-in-out infinite',
				'gradient-orb': 'gradient-orb 5s ease-in-out infinite',
				'book-flip': 'book-flip 6s ease-in-out infinite',
				'dna-helix': 'dna-helix 10s linear infinite',
				// NEW PROFESSIONAL ANIMATIONS
				// Executive Boardroom Theme
				'luxury-reveal': 'luxury-reveal 1.2s cubic-bezier(0.16, 1, 0.3, 1)',
				'executive-badge': 'executive-badge 1.5s cubic-bezier(0.34, 1.56, 0.64, 1)',
				'premium-glow': 'premium-glow 3s ease-in-out infinite',
				'connection-line': 'connection-line 1.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
				// Financial Dashboard Theme
				'luxury-counter': 'luxury-counter 1.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
				'progress-ring': 'progress-ring 2s cubic-bezier(0.4, 0, 0.2, 1)',
				'financial-chart': 'financial-chart 2.5s cubic-bezier(0.645, 0.045, 0.355, 1)',
				'executive-glow': 'executive-glow 4s ease-in-out infinite',
				// Corporate Elegance Theme
				'form-reveal': 'form-reveal 1s cubic-bezier(0.23, 1, 0.32, 1)',
				'luxury-ripple': 'luxury-ripple 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
				'corporate-slide': 'corporate-slide 1.1s cubic-bezier(0.215, 0.61, 0.355, 1)',
				'elegant-focus': 'elegant-focus 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
				// Executive Interface Theme
				'executive-menu': 'executive-menu 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
				'luxury-underline': 'luxury-underline 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
				'premium-scale': 'premium-scale 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
				// Sophisticated General
				'soothing-fade-in': 'soothing-fade-in 1s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
				'soothing-fade-in-up': 'soothing-fade-in-up 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
				'gentle-scale-in': 'gentle-scale-in 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
