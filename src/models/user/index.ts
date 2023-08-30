import { gram, kcal } from '@/models/types'

export interface Plan {
	id?: number
	title: string
	description?: string
	beginDate: Date
	dueDate: Date
	calorie?: kcal
	carbohydrate?: gram
	protein?: gram
	fat?: gram
}

export interface User {
	id?: number
	name: string
	plans: Plan[]
}
