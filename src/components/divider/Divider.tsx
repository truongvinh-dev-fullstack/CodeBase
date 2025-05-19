import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { appColors } from 'src/constants'

type DividerProps = {
	color?: string
	top?: number
	bottom?: number
}

export const Divider: React.FC<DividerProps> = React.memo(
	({ color = appColors.divider, top = 0, bottom = 0 }) => {
		return (
			<View
				style={{
					...styles.container,
					backgroundColor: color,
					marginTop: top,
					marginBottom: bottom,
				}}
			/>
		)
	},
)

const styles = StyleSheet.create({
	container: {
		height: 1,
	},
})
