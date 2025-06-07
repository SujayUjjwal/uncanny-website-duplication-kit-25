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
				'fantastic-glow': {
					'0%': {
						transform: 'scale(1)',
						filter: 'brightness(1) drop-shadow(0 0 5px rgba(234, 179, 8, 0.5))',
						textShadow: '0 0 10px rgba(234, 179, 8, 0.3)'
					},
					'25%': {
						transform: 'scale(1.05)',
						filter: 'brightness(1.2) drop-shadow(0 0 15px rgba(234, 179, 8, 0.8))',
						textShadow: '0 0 20px rgba(234, 179, 8, 0.6), 0 0 30px rgba(234, 179, 8, 0.4)'
					},
					'50%': {
						transform: 'scale(1.1)',
						filter: 'brightness(1.5) drop-shadow(0 0 25px rgba(234, 179, 8, 1))',
						textShadow: '0 0 30px rgba(234, 179, 8, 0.8), 0 0 40px rgba(234, 179, 8, 0.6), 0 0 50px rgba(234, 179, 8, 0.4)'
					},
					'75%': {
						transform: 'scale(1.05)',
						filter: 'brightness(1.2) drop-shadow(0 0 15px rgba(234, 179, 8, 0.8))',
						textShadow: '0 0 20px rgba(234, 179, 8, 0.6), 0 0 30px rgba(234, 179, 8, 0.4)'
					},
					'100%': {
						transform: 'scale(1)',
						filter: 'brightness(1) drop-shadow(0 0 5px rgba(234, 179, 8, 0.5))',
						textShadow: '0 0 10px rgba(234, 179, 8, 0.3)'
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
				'fantastic-glow': 'fantastic-glow 3s ease-in-out infinite'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
