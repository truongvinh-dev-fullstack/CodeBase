// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface IDrawerItem {
	label: string
	id: number
	routerName?: string
	childs?: Array<IDrawerChildItem>
	icon?: React.ReactNode,
	isShow?: boolean ,
}

interface IDrawerChildItem {
	label: string
	id: number
	routerName: string
	icon?: React.ReactNode,
	isShow?: boolean ,
}
