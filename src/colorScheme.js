export const getThemes = () => {
	const foundation = {
		brandHue: "235",
		brandSaturation: `90%`,
		brandLightness: `70%`
	}

	const lightTheme = {
		id: "1",
		name: "light",
		brand: `hsl(${foundation.brandHue} ${foundation.brandSaturation} ${foundation.brandLightness})`,
		text1: `hsl(${foundation.brandHue} ${foundation.brandSaturation} 10%)`,
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
		brand: `hsl(${foundation.brandHue} calc(${foundation.brandSaturation} / 2) calc(${foundation.brandLightness} / 1.5))`,
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
		FontPrimary: `'Poppins', sans-serif`,
		FontHeading: `'Source Sans Pro', sans-serif`,
		FWRegular: 400,
		FWSemiBold: 600,
		FWBold: 700,
		FWBlack: 900,
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
		...fonts,
		...theme,
		...shadow,
		radShadow: getRadShadow(theme.surfaceShadow, theme.shadowStrength)
	})

	const light = getTheme(lightTheme);
	const dark = getTheme(darkTheme);

	return [light, dark]
}