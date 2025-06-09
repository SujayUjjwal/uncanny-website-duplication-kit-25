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
				'dna-helix': 'dna-helix 10s linear infinite'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
