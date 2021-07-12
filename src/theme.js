export const getThemes = () => {
	const foundation = {
		brandHue: "235",
		brandSaturation: `100%`,
		brandLightness: `60%`
	}

	const lightTheme = {
		id: "1",
		name: "light",
		brand: `hsl(${foundation.brandHue} ${foundation.brandSaturation} ${foundation.brandLightness})`,
		text1: `hsl(${foundation.brandHue} calc(${foundation.brandSaturation} / 2) 10%)`,
		text2: `hsl(${foundation.brandHue} 30% 30%)`,
		surface1: `hsl(${foundation.brandHue} 25% 90%)`,
		surface2: `hsl(${foundation.brandHue} 20% 99%)`,
		surface3: `hsl(${foundation.brandHue} 20% 92%)`,
		surface4: `hsl(${foundation.brandHue} 20% 85%)`,
		surfaceShadow: `${foundation.brandHue} 10% 20%`,
		shadowStrength: `.02`,
	}

	const darkTheme = {
		id: "2",
		name: "dark",
		brand: `hsl(${foundation.brandHue} calc(${foundation.brandSaturation} / 1.25) calc(${foundation.brandLightness} * 1.25))`,
		text1: `hsl(${foundation.brandHue} 15% 85%)`,
		text2: `hsl(${foundation.brandHue} 5% 65%)`,
		surface1: `hsl(${foundation.brandHue} 10% 10%)`,
		surface2: `hsl(${foundation.brandHue} 10% 15%)`,
		surface3: `hsl(${foundation.brandHue} 5%  20%)`,
		surface4: `hsl(${foundation.brandHue} 5% 25%)`,
		surfaceShadow: `${foundation.brandHue} 50% 3%`,
		shadowStrength: `.8`
	}

	const fonts = {
		ffPrimary: `'Source Sans Pro', sans-serif`,
		ffHeading: `'Poppins', sans-serif`,
		fwRegular: 400,
		fwSemiBold: 600,
		fwBold: 700,
		fwBlack: 900,
		fsRegular: "clamp(0.875rem, 0.8250rem + 0.2000vw, 1rem)",
		fsMedium: "clamp(0.75rem, 0.7000rem + 0.2000vw, 0.875rem)",
		fsSmall: "clamp(0.625rem, 0.5750rem + 0.2000vw, 0.75rem)",
		fsH1: "clamp(2rem, 1.6000rem + 1.6000vw, 3rem)",
		fsH2: "clamp(1.875rem, 1.6250rem + 1.0000vw, 2.5rem)",
		fsH3: "clamp(1.5rem, 1.4000rem + 0.4000vw, 1.75rem)",
		fsH5: "clamp(1.25rem, 1.1500rem + 0.4000vw, 1.5rem)"
	}

	const shadow = {
		boxShadow: `0 1rem .5rem -.5rem`,
		border: `1px solid hsl(${foundation.brandHue} 10% 50% / 15%)`
	}

	const getRadShadow = (surfaceShadow, shadowStrength) => (
		`0 2.8px 2.2px hsl(${surfaceShadow} / calc(${shadowStrength} + .03)),
		0 6.7px 5.3px hsl(${surfaceShadow} / calc(${shadowStrength} + .01)),
		0 12.5px 10px hsl(${surfaceShadow} / calc(${shadowStrength} + .02)),
		0 22.3px 17.9px hsl(${surfaceShadow} / calc(${shadowStrength} + .02)),
		0 41.8px 33.4px hsl(${surfaceShadow} / calc(${shadowStrength} + .03)),
		0 100px 80px hsl(${surfaceShadow} / ${shadowStrength})`
	)

	const getTheme = (theme) => ({
		...theme,
		radShadow: getRadShadow(theme.surfaceShadow, theme.shadowStrength)
	})

	const fixed = {
		...fonts,
		...shadow,
	}

	const light = getTheme(lightTheme);
	const dark = getTheme(darkTheme);

	return [fixed, light, dark]
}